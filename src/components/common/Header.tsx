'use client';
import Link from 'next/link';
import Hamburger from '@/components/common/Hamburger';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="bg-zinc-900 relative z-10">
      {isOpen && (
        <div className="flex flex-col gap-10 justify-center items-center h-screen w-screen fixed bg-zinc-900 transition ease-in-out">
          <Link onClick={() => setIsOpen(false)} href="/">
            <h1>Főoldal</h1>
          </Link>
          <Link onClick={() => setIsOpen(false)} href="/departments/athletics">
            <h1>Atlétika</h1>
          </Link>
          <Link onClick={() => setIsOpen(false)} href="/departments/fighting">
            <h1>Küzdősport</h1>
          </Link>
        </div>
      )}
      <div className="fixed top-6 right-6">
        <Hamburger isOpen={isOpen} onClick={toggleMenu}></Hamburger>
      </div>
    </header>
  );
}
