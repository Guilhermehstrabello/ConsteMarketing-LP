"use client"
import { useState } from "react"
import React from "react";
import ReactTooltip from 'react-tooltip';

const Navbar = () => {

  const [isClick, setisClick] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick)
  }
  return (
    <>
      <nav className="bg-black ">
        <div className="max-w-10xl mx-auto px-6 sm:px-8 lg:px-4">
          <div className="flex items-center justify-evenly h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="https://www.constemarketing.com.br" className="text-white">
                  <img src="/images/LogoConste.png" alt="Logo Conste Marketing" width={125} height={50} />
                </a>
              </div>
            </div>
            <div className="hidden md:block font-Montserrat text-base">
              <div className="flex items-center space-x-32 text-base">
                <a href="/" className="text-white hover:text-laranja duration-300">
                  Início
                </a>
                <a href="/" className="text-white hover:text-laranja duration-300">
                  Divisões
                </a>
                <a href="/" className="text-white hover:text-laranja duration-300">
                  Porque Nós?
                </a>
                <a href="/" className="text-white hover:text-laranja duration-300">
                  Depoimentos
                </a>
                <a href="/" className="text-white hover:text-laranja duration-300">
                  Clientes
                </a>
                <a href="/newsletter" className="text-white pointer-events-none">
                  Newsletter
                </a>
                <a href="/" className="text-white bg-laranja font-semibold rounded-lg p-2 duration-300 hover:text-laranja hover:bg-white ">
                  Contato
                </a>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button className="inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white
              focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor" >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="/" className="text-white block py-2 hover:text-laranja duration-300">
                Início
              </a>
              <a href="/" className="text-white block py-2 hover:text-laranja duration-300">
                Divisões
              </a>
              <a href="/" className="text-white block py-2 hover:text-laranja duration-300">
                Porque Nós?
              </a>
              <a href="/" className="text-white block py-2 hover:text-laranja duration-300">
                Depoimentos
              </a>
              <a href="/" className="text-white block py-2 hover:text-laranja duration-300">
                Clientes
              </a>
              <a href="/" className="text-white block py-2 bg-laranja font-semibold rounded-lg px-1 text-center duration-300 hover:text-laranja hover:bg-white">
                Contato
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
export default Navbar;