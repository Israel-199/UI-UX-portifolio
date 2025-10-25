import Link from 'next/link'
import { FaBehance, FaTelegramPlane, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-primary">
              Israel
            </Link>
            <p className="text-sm text-secondary mt-2">
              © {new Date().getFullYear()} Israel Portfolio. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://www.behance.net/Designer_Israel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaBehance className="h-6 w-6" />
            </a>
            <a
              href="https://t.me/DesignerIsru"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaTelegramPlane className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/israel-assefa-b6b976358"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 