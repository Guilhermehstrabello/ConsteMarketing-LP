import { useState } from 'react';

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'});
    }
  };

  return (
    <nav className="bg-black lg:h-24 lg:flex lg:items-center">
      <div className="max-w-10xl mx-auto px-6 sm:px-8 lg:px-4">
        <div className="flex items-center justify-center gap-44 h-16">
          <div className="flex items-center">
              <a className="text-white cursor-pointer" onClick={() => window.location.reload()}>
                <img src="/images/LogoConste.png" alt="Logo Conste Marketing" width={125} height={50} />
              </a>
          </div>
          <div className="hidden md:hidden lg:block font-medium">
            <div className="flex items-center justify-center xl:space-x-32 lg:space-x-10 md:space-x-2 xl:text-base">
              <a
                href="#divisoes"
                className="text-white hover:text-laranja duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('divisoes');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Divisões
              </a>
              <a
                href="#porque"
                className="text-white hover:text-laranja duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('porque');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Porque Nós?
              </a>
              <a
                href="#depoimentos"
                className="text-white hover:text-laranja duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('depoimentos');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Depoimentos
              </a>
              <a
                href="#clientes"
                className="text-white hover:text-laranja duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('clientes');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Clientes
              </a>
              <a href="/newsletter" className="text-white hover:text-laranja duration-300">
                Newsletter
              </a>
              <a
                href="#form"
                className="text-white bg-laranja font-semibold rounded-lg p-3 duration-300 hover:text-laranja hover:bg-white"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('form');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Contato
              </a>
            </div>
          </div>
          <div className="lg:hidden flex items-center">
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
        {isClick && (
          <div className="lg:hidden flex justify-center md:flex md:justify-center">
            <div className="px-4 pt-2 pb-3 space-y-2">
              <a href="#divisoes" className="text-white block py-2 hover:text-laranja duration-300" onClick={(e) => { e.preventDefault(); scrollToSection('divisoes'); }}>
                Divisões
              </a>
              <a href="#porque" className="text-white block py-2 hover:text-laranja duration-300" onClick={(e) => { e.preventDefault(); scrollToSection('porque'); }}>
                Porque Nós?
              </a>
              <a href="#depoimentos" className="text-white block py-2 hover:text-laranja duration-300" onClick={(e) => { e.preventDefault(); scrollToSection('depoimentos'); }}>
                Depoimentos
              </a>
              <a href="#clientes" className="text-white block py-2 hover:text-laranja duration-300" onClick={(e) => { e.preventDefault(); scrollToSection('clientes'); }}>
                Clientes
              </a>
              <a href="/newsletter" className="text-white block py-2 hover:text-laranja duration-300">
                Newsletter
              </a>
              <a href="#contato" className="text-white block py-2 bg-laranja font-semibold rounded-lg px-1 text-center duration-300 hover:text-laranja hover:bg-white" onClick={(e) => { e.preventDefault(); scrollToSection('contato'); }}>
                Contato
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
