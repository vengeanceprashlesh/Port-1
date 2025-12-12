export const stats = [
  { label: 'GitHub Repos', value: '15+', icon: 'github' },
  { label: 'Jailbreak Detection', value: '95%', icon: 'shield' },
  { label: 'Fiverr Gigs', value: '5+', icon: 'briefcase' },
  { label: 'DSA Problems', value: '200+', icon: 'code' },
]

export const skills = {
  'Data Structures & Algorithms': {
    items: ['Trees & Graphs', 'Dynamic Programming', 'Backtracking', 'Greedy Algorithms'],
    level: 'Advanced',
  },
  'Machine Learning': {
    items: ['PyTorch', 'Scikit-learn', 'LSTM/RNN', 'Transfer Learning', 'Model Deployment'],
    level: 'Intermediate',
  },
  'Web Development': {
    items: ['Next.js 15', 'React', 'Tailwind CSS', 'Node.js', 'Vercel'],
    level: 'Advanced',
  },
  'Languages': {
    items: ['Python', 'JavaScript/TypeScript', 'SQL', 'C++'],
    level: 'Advanced',
  },
  'Tools & Platforms': {
    items: ['Git/GitHub', 'Google Colab', 'Docker', 'Clerk Auth', 'Supabase'],
    level: 'Intermediate',
  },
}

export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  longDescription: string
  metrics: {
    label: string
    value: string
  }[]
  techStack: string[]
  features: string[]
  challenges: string[]
  learnings: string[]
  github?: string
  demo?: string
  image: string
  featured: boolean
  category: 'AI/ML' | 'Full-Stack' | 'Client Work'
}

export const projects: Project[] = [
  {
    id: 'llm-security-proxy',
    title: 'LLM Security Proxy',
    tagline: 'Multi-layer defense system for LLM applications',
    description: 'Enterprise-grade security proxy with 95% jailbreak detection using static signatures, semantic checks, and execution gating.',
    longDescription: 'Built a production-ready security layer for LLM applications using a multi-tiered approach: static signature matching for known attack patterns, semantic vector similarity for novel prompts, execution gating based on confidence scores, and output scanning for data leaks. Deployed using FastAPI with Redis caching for low-latency inference.',
    metrics: [
      { label: 'Detection Rate', value: '95%' },
      { label: 'Latency', value: '120ms' },
      { label: 'False Positives', value: '<2%' },
      { label: 'Throughput', value: '1000 req/s' },
    ],
    techStack: ['Python', 'FastAPI', 'PyTorch', 'Redis', 'Docker', 'Sentence Transformers'],
    features: [
      'Real-time prompt injection detection using BERT embeddings',
      'Multi-stage filtering: regex → semantic → execution gating',
      'Output sanitization and PII detection',
      'Redis-backed caching for repeated pattern matching',
      'Configurable threat levels and response strategies',
    ],
    challenges: [
      'Balancing detection accuracy vs. latency (solved with caching)',
      'Handling adversarial prompts that bypass regex filters',
      'Scaling to 1000+ requests/second with Redis clustering',
    ],
    learnings: [
      'Learned semantic similarity techniques using embeddings',
      'Optimized inference pipeline with batch processing',
      'Deployed containerized ML models in production',
    ],
    github: 'https://github.com/yourusername/llm-security-proxy',
    image: '/projects/security-proxy.png',
    featured: true,
    category: 'AI/ML',
  },
  {
    id: 'prompt-injection-detector',
    title: 'Prompt Injection Detector',
    tagline: 'ML-powered classifier for adversarial prompts',
    description: 'Research-grade ML model achieving 92% precision on prompt injection attacks using semantic vector matching and LSTM architecture.',
    longDescription: 'Developed a specialized classifier for detecting prompt injection attacks on LLMs. Curated a dataset of 10,000+ malicious prompts from jailbreak communities, trained an LSTM model with attention mechanism, and deployed via Hugging Face. Published methodology in a research paper format.',
    metrics: [
      { label: 'Precision', value: '92%' },
      { label: 'Recall', value: '89%' },
      { label: 'Dataset Size', value: '10K+' },
      { label: 'Model Size', value: '45MB' },
    ],
    techStack: ['PyTorch', 'Transformers', 'Scikit-learn', 'Hugging Face', 'Google Colab', 'Pandas'],
    features: [
      'Custom LSTM architecture with attention layers',
      'Dataset scraped from GitHub/Discord jailbreak repos',
      'Semantic embedding using SentenceTransformers',
      'Cross-validation with 5-fold splits',
      'Confusion matrix visualization with Matplotlib',
    ],
    challenges: [
      'Imbalanced dataset (90% benign prompts) → solved with SMOTE',
      'Overfitting on training data → added dropout layers',
      'Deployment on edge devices → quantized model to INT8',
    ],
    learnings: [
      'Hands-on experience with NLP architectures',
      'Dataset curation and labeling techniques',
      'Model optimization for inference speed',
    ],
    github: 'https://github.com/yourusername/prompt-injection-detector',
    demo: 'https://huggingface.co/yourusername/prompt-injection-detector',
    image: '/projects/injection-detector.png',
    featured: true,
    category: 'AI/ML',
  },
  {
    id: 'raffle-platform',
    title: 'Raffle Website with Fraud Detection',
    tagline: 'Full-stack raffle platform with ML-based fraud prevention',
    description: 'Built a complete raffle system handling 500+ entries with real-time fraud detection using behavioral analysis and payment verification.',
    longDescription: 'Developed a production raffle platform with Next.js frontend, Node.js backend, PostgreSQL database, and Stripe payments. Implemented ML fraud detection analyzing entry patterns, payment velocity, and user behavior to flag suspicious activity. Deployed on Vercel with 99.9% uptime.',
    metrics: [
      { label: 'Total Entries', value: '500+' },
      { label: 'Fraud Blocked', value: '15%' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Avg Load Time', value: '1.2s' },
    ],
    techStack: ['Next.js', 'PostgreSQL', 'Prisma', 'Stripe', 'Vercel', 'TailwindCSS', 'Clerk Auth'],
    features: [
      'Real-time entry validation with rate limiting',
      'ML fraud detection using isolation forests',
      'Stripe payment integration with webhooks',
      'Admin dashboard with analytics',
      'Email notifications via Resend API',
    ],
    challenges: [
      'Preventing duplicate entries from same user',
      'Handling payment webhook retries',
      'Scaling database for concurrent entries',
    ],
    learnings: [
      'Full-stack development from scratch',
      'Payment processing and webhook handling',
      'Database optimization with indexing',
    ],
    github: 'https://github.com/yourusername/raffle-platform',
    demo: 'https://raffle-platform.vercel.app',
    image: '/projects/raffle.png',
    featured: true,
    category: 'Full-Stack',
  },
  {
    id: 'custom-llm',
    title: 'Custom LLM Builder',
    tagline: 'No-code platform for fine-tuning LLMs',
    description: 'Built a Lovable.dev-style platform for non-technical users to fine-tune GPT models with custom datasets and deploy via API.',
    longDescription: 'Created a no-code platform enabling users to upload datasets, configure hyperparameters, fine-tune OpenAI models, and deploy custom LLM endpoints. Features include cost estimation, training progress tracking, and one-click deployment to Vercel serverless functions.',
    metrics: [
      { label: 'Active Users', value: '50+' },
      { label: 'Models Trained', value: '120+' },
      { label: 'Avg Training Time', value: '45min' },
      { label: 'API Calls/Day', value: '2K+' },
    ],
    techStack: ['Next.js', 'OpenAI API', 'Supabase', 'Vercel Serverless', 'Stripe', 'React Flow'],
    features: [
      'Drag-and-drop dataset upload (CSV/JSON)',
      'Visual hyperparameter tuning interface',
      'Real-time training logs and metrics',
      'One-click API deployment',
      'Usage analytics dashboard',
    ],
    challenges: [
      'Managing long-running fine-tuning jobs',
      'Handling API rate limits gracefully',
      'Secure storage of user API keys',
    ],
    learnings: [
      'OpenAI fine-tuning API workflows',
      'Serverless architecture patterns',
      'SaaS product development',
    ],
    github: 'https://github.com/yourusername/custom-llm-builder',
    demo: 'https://custom-llm.vercel.app',
    image: '/projects/llm-builder.png',
    featured: false,
    category: 'Full-Stack',
  },
  {
    id: 'fashion-tech',
    title: 'Fashion Image-to-Animation',
    tagline: 'Client project: AI-powered fashion model animation',
    description: 'Fiverr client work: Convert static fashion images to animated model walks using pose estimation and motion synthesis.',
    longDescription: 'Delivered a custom solution for a fashion e-commerce client to animate static product photos. Used OpenPose for skeleton detection, trained a motion synthesis model on fashion runway videos, and generated smooth walking animations. Client reported 30% increase in product engagement.',
    metrics: [
      { label: 'Client Rating', value: '5.0★' },
      { label: 'Animations Created', value: '200+' },
      { label: 'Engagement Boost', value: '30%' },
      { label: 'Avg Processing', value: '5min' },
    ],
    techStack: ['Python', 'OpenPose', 'PyTorch', 'OpenCV', 'FFmpeg', 'Flask'],
    features: [
      'Automatic pose detection from static images',
      'Motion synthesis using LSTM-based model',
      'Smooth interpolation with optical flow',
      'Batch processing for multiple images',
      'Web interface for client uploads',
    ],
    challenges: [
      'Handling diverse body poses and clothing',
      'Generating realistic motion without artifacts',
      'Optimizing processing time for batch jobs',
    ],
    learnings: [
      'Computer vision techniques for pose estimation',
      'Working with client requirements and deadlines',
      'Deploying CV models for production use',
    ],
    image: '/projects/fashion-tech.png',
    featured: false,
    category: 'Client Work',
  },
  {
    id: 'trading-system',
    title: 'Algorithmic Trading Bot',
    tagline: 'Automated trading with technical indicators',
    description: 'Built a trading bot using RSI, MACD, and Bollinger Bands for cryptocurrency markets with backtesting framework.',
    longDescription: 'Developed an automated trading system for crypto markets using technical analysis indicators. Implemented backtesting framework with historical data, paper trading mode for validation, and live trading via Binance API. Achieved 12% returns in paper trading over 3 months.',
    metrics: [
      { label: 'Paper Returns', value: '12%' },
      { label: 'Win Rate', value: '58%' },
      { label: 'Max Drawdown', value: '8%' },
      { label: 'Sharpe Ratio', value: '1.4' },
    ],
    techStack: ['Python', 'Pandas', 'TA-Lib', 'Binance API', 'SQLite', 'Plotly'],
    features: [
      'Multiple strategy support (RSI, MACD, BB)',
      'Backtesting engine with slippage/fees',
      'Real-time market data streaming',
      'Risk management with stop-loss',
      'Performance analytics dashboard',
    ],
    challenges: [
      'Handling API rate limits and downtime',
      'Optimizing strategy parameters',
      'Managing position sizing and risk',
    ],
    learnings: [
      'Financial market mechanics and trading',
      'Time series analysis and indicators',
      'Risk management strategies',
    ],
    github: 'https://github.com/yourusername/trading-bot',
    image: '/projects/trading.png',
    featured: false,
    category: 'Full-Stack',
  },
]

export const timeline = [
  {
    year: '2023',
    title: 'Started CSE Degree',
    description: 'Began Computer Science Engineering at [University Name], India',
  },
  {
    year: '2023',
    title: 'First Fiverr Gig',
    description: 'Launched freelance career with ML data preprocessing service',
  },
  {
    year: '2024',
    title: 'LeetCode Streak',
    description: 'Maintained 100+ day streak, solved 200+ DSA problems',
  },
  {
    year: '2024',
    title: 'Research Project',
    description: 'Published LLM security research on prompt injection detection',
  },
  {
    year: '2025',
    title: 'Seeking Internships',
    description: 'Looking for AI/ML roles at startups and research labs',
  },
]

export const socials = {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourprofile',
  fiverr: 'https://fiverr.com/yourprofile',
  email: 'your.email@example.com',
  leetcode: 'https://leetcode.com/yourprofile',
}
