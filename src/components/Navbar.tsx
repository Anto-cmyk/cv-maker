import { FileText, Menu, X } from 'lucide-react'
import { useState } from 'react'

import Button from './Button'

interface NavbarProps {
  onCreateResume: () => void
}

function Navbar({ onCreateResume }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">

      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}

        <button
          onClick={() => window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })}
          className="flex items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
            <FileText size={19} />
          </div>

          <span className="text-lg font-bold tracking-tight text-slate-900">
            Resume<span className="text-blue-600">Builder</span>
          </span>
        </button>

        {/* Desktop navigation */}

        <nav className="hidden items-center gap-8 md:flex">

          <a
            href="#templates"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            Templates
          </a>

          <a
            href="#features"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            How it works
          </a>

        </nav>

        {/* Desktop CTA */}

        <div className="hidden md:block">
          <Button
            size="sm"
            onClick={onCreateResume}
          >
            Create Resume
          </Button>
        </div>

        {/* Mobile menu button */}

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X size={23} />
          ) : (
            <Menu size={23} />
          )}
        </button>

      </div>

      {/* Mobile menu */}

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 md:hidden">

          <nav className="flex flex-col gap-4">

            <a
              href="#templates"
              onClick={() => setMobileOpen(false)}
              className="py-2 text-sm font-medium text-slate-700"
            >
              Templates
            </a>

            <a
              href="#features"
              onClick={() => setMobileOpen(false)}
              className="py-2 text-sm font-medium text-slate-700"
            >
              Features
            </a>

            <a
              href="#how-it-works"
              onClick={() => setMobileOpen(false)}
              className="py-2 text-sm font-medium text-slate-700"
            >
              How it works
            </a>

            <Button
              onClick={() => {
                setMobileOpen(false)
                onCreateResume()
              }}
            >
              Create Resume
            </Button>

          </nav>

        </div>
      )}

    </header>
  )
}

export default Navbar