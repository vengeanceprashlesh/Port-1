'use client'

import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null)
    const followerRef = useRef<HTMLDivElement>(null)
    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        const cursor = cursorRef.current
        const follower = followerRef.current

        if (!cursor || !follower) return

        // GSAP QuickTo for performance (no state updates)
        const xToCursor = gsap.quickTo(cursor, "x", { duration: 0.05, ease: "power3" })
        const yToCursor = gsap.quickTo(cursor, "y", { duration: 0.05, ease: "power3" })

        const xToFollower = gsap.quickTo(follower, "x", { duration: 0.8, ease: "power3" })
        const yToFollower = gsap.quickTo(follower, "y", { duration: 0.8, ease: "power3" })

        const onMouseMove = (e: MouseEvent) => {
            if (cursor.classList.contains('opacity-0')) {
                cursor.classList.remove('opacity-0')
                follower.classList.remove('opacity-0')
            }
            xToCursor(e.clientX)
            yToCursor(e.clientY)
            xToFollower(e.clientX)
            yToFollower(e.clientY)
        }

        // Add hover listeners to clickable elements
        const onMouseEnter = () => setIsHovering(true)
        const onMouseLeave = () => setIsHovering(false)

        const clickables = document.querySelectorAll('a, button, .cursor-pointer')
        clickables.forEach(el => {
            el.addEventListener('mouseenter', onMouseEnter)
            el.addEventListener('mouseleave', onMouseLeave)
        })

        window.addEventListener('mousemove', onMouseMove)

        return () => {
            window.removeEventListener('mousemove', onMouseMove)
            clickables.forEach(el => {
                el.removeEventListener('mouseenter', onMouseEnter)
                el.removeEventListener('mouseleave', onMouseLeave)
            })
        }
    }, []) // Re-run if route changes? Ideally this should be robust enough.

    // Re-attach listeners on DOM mutations (e.g. navigation) could be needed, 
    // but for now simple mount is okay.

    return (
        <>
            {/* Primary Dot */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2"
            />

            {/* Follower Ring */}
            <div
                ref={followerRef}
                className={`fixed top-0 left-0 w-12 h-12 border border-white rounded-full pointer-events-none z-[9998] mix-blend-difference -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out ${isHovering ? 'scale-[2] bg-white text-black mix-blend-difference border-transparent' : 'scale-100'
                    }`}
            />
        </>
    )
}
