"use client"
import React, { useState, useEffect } from 'react';

export default function Newsletter() {
    const [text, setText] = useState('Em Breve...');

    useEffect(() => {
        const timer = setTimeout(() => {
            setText('Estamos desenvolvendo os conteúdos e as funções da nossa Newsletter, fiquem atentos.');
        }, 4000); // Troca o texto após 3 segundos

        // Limpa o timer para evitar vazamentos de memória
        return () => clearTimeout(timer);
    }, []);

    return (
        <div 
            className="flex h-screen w-screen items-center justify-center" 
            style={{ cursor: "url('data:image/svg+xml,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ccircle%20cx%3D%2216%22%20cy%3D%2216%22%20r%3D%2210%22%20fill%3D%22%23FF8500%22%2F%3E%3C%2Fsvg%3E') 16 16, auto" }}
        >
            <button 
                type="button" 
                className="flex flex-col lg:flex-row items-center rounded-lg bg-white px-4 py-2 text-laranja" 
                disabled 
                style={{ cursor: "url('data:image/svg+xml,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ccircle%20cx%3D%2216%22%20cy%3D%2216%22%20r%3D%2210%22%20fill%3D%22%23FF8500%22%2F%3E%3C%2Fsvg%3E') 16 16, auto" }}
            >
                <span className="font-medium lg:text-3xl text-2xl p-4">{text}</span>
                <svg className="mr-3 h-10 w-10 animate-spin text-laranja" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            </button>
        </div>
    )
}
