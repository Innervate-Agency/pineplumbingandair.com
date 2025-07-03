#!/bin/bash

# Pine Plumbing & Air - Foundation Setup (The One That Actually Works)
# Because second attempts are for champions, not quitters

echo "🔧 Pine Plumbing & Air - Foundation Setup (Take 2: The Good One)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Step 1: Create the Next.js foundation (the RIGHT way)
echo "→ Creating Next.js application..."
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --yes

# Step 2: Install our power packages
echo "→ Installing the dream team..."
npm install framer-motion lucide-react @headlessui/react clsx tailwind-merge

# Step 3: Dev dependencies for the pros
echo "→ Adding development tools..."
npm install -D prettier prettier-plugin-tailwindcss

# Step 4: Create our architecture
echo "→ Building professional structure..."
mkdir -p src/components/{ui,layout,sections}
mkdir -p src/lib/{utils,constants}
mkdir -p src/app/{about,services,contact,gallery}
mkdir -p public/{images,icons}

# Step 5: Create utilities that don't suck
echo "→ Setting up utilities..."

# The legendary cn utility
cat > src/lib/utils.ts << 'EOF'
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
EOF

# Constants that make sense
cat > src/lib/constants.ts << 'EOF'
export const SITE_CONFIG = {
  name: "Pine Plumbing & Air",
  description: "Family-owned HVAC and plumbing services serving our community with trust, expertise, and genuine care.",
  url: "https://pineplumbingandair.com",
  phone: "(555) 123-4567",
  email: "info@pineplumbingandair.com",
  address: {
    street: "123 Main Street",
    city: "Your City", 
    state: "State",
    zip: "12345"
  },
  hours: {
    emergency: "24/7 Emergency Service",
    regular: "Monday - Friday: 8AM - 6PM"
  }
}

export const SERVICES = [
  {
    title: "Heating Services",
    description: "Expert furnace repair, installation, and maintenance",
    icon: "flame"
  },
  {
    title: "Air Conditioning", 
    description: "Complete AC solutions for year-round comfort",
    icon: "snowflake"
  },
  {
    title: "Plumbing",
    description: "Professional plumbing repairs and installations", 
    icon: "wrench"
  },
  {
    title: "Emergency Service",
    description: "24/7 emergency repairs when you need us most",
    icon: "phone"
  }
]
EOF

# Enhanced Tailwind that doesn't fuck around
cat > tailwind.config.ts << 'EOF'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe', 
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        warm: {
          50: '#fefdf8',
          100: '#fdf9ed',
          200: '#faf1d4', 
          300: '#f6e4ab',
          400: '#f0d180',
          500: '#eab959',
          600: '#dc9f3a',
          700: '#b8822f',
          800: '#94672b',
          900: '#785427',
          950: '#422b12',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
EOF

# Prettier config for beautiful code
cat > .prettierrc << 'EOF'
{
  "semi": false,
  "trailingComma": "es5", 
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false,
  "printWidth": 80,
  "plugins": ["prettier-plugin-tailwindcss"]
}
EOF

# Header component that actually works
cat > src/components/layout/Header.tsx << 'EOF'
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Menu, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-primary-600">
              Pine Plumbing & Air
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors flex items-center space-x-2"
            >
              <Phone className="h-4 w-4" />
              <span>Emergency Service</span>
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-primary-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="bg-primary-600 text-white block px-3 py-2 text-base font-medium text-center rounded-lg mt-4"
              >
                Emergency Service
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
EOF

# Update the main layout to use our header
cat > src/app/layout.tsx << 'EOF'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import { SITE_CONFIG } from '@/lib/constants'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins' 
})

export const metadata: Metadata = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
EOF

# Simple home page to get started
cat > src/app/page.tsx << 'EOF'
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
            Welcome to Pine Plumbing & Air
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Family-owned HVAC and plumbing services serving our community with trust, expertise, and genuine care.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Get Started
            </a>
            <a href="/services" className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
EOF

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Foundation complete and bulletproof!"
echo ""
echo "🚀 Fire it up:"
echo "   npm run dev"
echo ""
echo "Then open http://localhost:3000 and watch the magic happen."
echo "Time to build something that makes the competition weep."