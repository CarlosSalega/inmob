"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-18 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-inmob-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">IB</span>
          </div>
          <div>
            <span className="text-xl font-bold text-inmob-primary">Inmo</span>
            <span className="text-xl font-bold text-inmob-accent">Bel</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/propiedades"
            className="text-sm font-medium text-gray-600 hover:text-inmob-primary transition-colors"
          >
            Propiedades
          </Link>
          <a
            href="#nosotros"
            className="text-sm font-medium text-gray-600 hover:text-inmob-primary transition-colors"
          >
            Nosotros
          </a>
          <a
            href="#contacto"
            className="text-sm font-medium text-gray-600 hover:text-inmob-primary transition-colors"
          >
            Contacto
          </a>
          <a
            href="https://wa.me/5491157942604"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm py-2.5 px-5"
          >
            <Phone size={16} />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4">
          <Link
            href="/propiedades"
            className="block text-sm font-medium text-gray-600 hover:text-inmob-primary"
            onClick={() => setMenuOpen(false)}
          >
            Propiedades
          </Link>
          <a
            href="#nosotros"
            className="block text-sm font-medium text-gray-600 hover:text-inmob-primary"
            onClick={() => setMenuOpen(false)}
          >
            Nosotros
          </a>
          <a
            href="#contacto"
            className="block text-sm font-medium text-gray-600 hover:text-inmob-primary"
            onClick={() => setMenuOpen(false)}
          >
            Contacto
          </a>
          <a
            href="https://wa.me/5491157942604"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm py-2.5 px-5 inline-block"
            onClick={() => setMenuOpen(false)}
          >
            <Phone size={16} />
          </a>
        </div>
      )}
    </header>
  );
}
