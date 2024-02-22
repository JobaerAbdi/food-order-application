import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <>
      <header className="flex justify-between items-center">
        <Link href="" className="font-semibold text-2xl text-primary">FOOD COURT</Link>
        <nav className="flex items-center gap-8 text-gray-500 font-semibold">
          <Link href="">Home</Link>
          <Link href="">Menu</Link>
          <Link href="">About</Link>
          <Link href="">Contact</Link>
          <Link href="" className="bg-primary px-6 py-2 text-white rounded-full">Login</Link>
        </nav>
      </header>
    </>
  )
}
