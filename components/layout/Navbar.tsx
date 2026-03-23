'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 flex flex-col md:flex-row items-stretch justify-center bg-[var(--green)] shadow-md">

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between px-4 py-3 text-white md:hidden focus:outline-none"
                aria-expanded={isOpen}
            >
                <span className="font-medium">Minden ami öntözés</span>
                <span className={`text-2xl transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}>
                    {isOpen ? '✕' : '☰'}
                </span>
            </button>

            <div className={`
                grid transition-[grid-template-rows] duration-300 ease-in-out
                ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} 
                md:flex md:grid-rows-none w-full md:w-auto
            `}>
                <div className="overflow-hidden flex flex-col md:flex md:flex-row md:overflow-visible items-center">
                    <NavLink href="/ontozorendszer">Öntözőrendszer</NavLink>
                    <NavLink href="/kertkarbantartas">Kertkarbantartás</NavLink>
                    <NavLink href="/zoldfal">Zöldfal</NavLink>
                    <NavLink href="/mezogazdasagi-ontozes">Mezőgazdasági öntözőrendszer</NavLink>
                    <NavLink href="#idopont">Időpontfoglalás</NavLink>
                    <NavLink href="#kapcsolat">Kapcsolat</NavLink>
                </div>
            </div>
        </nav>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="w-full text-center md:w-auto px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-black/10 md:py-4"
        >
            {children}
        </Link>
    );
}
