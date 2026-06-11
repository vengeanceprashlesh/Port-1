'use client'

import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null)
    const [isHovering, setIsHovering] = useState(false)
    const [isTouchDevice, setIsTouchDevice] = useState(false)

    useEffect(() => {
        if (window.matchMedia('(pointer: coarse)').matches) {
            setIsTouchDevice(true)
            return
        }

        const cursor = cursorRef.current
        if (!cursor) return

        // Single, snappy quickTo for immediate tracking (no laggy follower)
        const xToCursor = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3.out" })
        const yToCursor = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3.out" })

        const onMouseMove = (e: MouseEvent) => {
            if (cursor.classList.contains('opacity-0')) {
                cursor.classList.remove('opacity-0')
            }
            // Center the cursor exactly on the mouse coordinates
            xToCursor(e.clientX)
            yToCursor(e.clientY)
        }

        const onMouseEnter = () => setIsHovering(true)
        const onMouseLeave = () => setIsHovering(false)

        // Attach to links, buttons, and anything with a cursor-pointer
        const attachListeners = () => {
            const clickables = document.querySelectorAll('a, button, .cursor-pointer')
            clickables.forEach(el => {
                // Ensure we don't attach multiple times
                el.removeEventListener('mouseenter', onMouseEnter)
                el.removeEventListener('mouseleave', onMouseLeave)
                el.addEventListener('mouseenter', onMouseEnter)
                el.addEventListener('mouseleave', onMouseLeave)
            })
        }

        attachListeners()
        window.addEventListener('mousemove', onMouseMove)

        // Simple mutation observer to catch dynamically added elements (like projects)
        const observer = new MutationObserver(() => attachListeners())
        observer.observe(document.body, { childList: true, subtree: true })

        return () => {
            window.removeEventListener('mousemove', onMouseMove)
            observer.disconnect()
            const clickables = document.querySelectorAll('a, button, .cursor-pointer')
            clickables.forEach(el => {
                el.removeEventListener('mouseenter', onMouseEnter)
                el.removeEventListener('mouseleave', onMouseLeave)
            })
        }
    }, [])

    if (isTouchDevice) return null

    return (
        <div
            ref={cursorRef}
            className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference bg-white -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out opacity-0 ${
                isHovering ? 'w-20 h-20' : 'w-4 h-4'
            }`}
        />
    )
}
