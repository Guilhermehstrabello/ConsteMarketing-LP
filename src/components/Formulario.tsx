import React, { useEffect, useState } from "react";

export default function Formulario() {

  const [userData, setUserData] = useState({
    nome: "",
    telefone: "",
    email: ""
  });

  const [selection1, setSelection1] = useState("");
  const [selection2, setSelection2] = useState("");

  const formatarTelefone = (value: string) => {
    const cleanedValue = value.replace(/\D/g, "");

    if (cleanedValue.length <= 2) {
      return `(${cleanedValue}`;
    }

    if (cleanedValue.length <= 7) {
      return `(${cleanedValue.slice(0, 2)}) ${cleanedValue.slice(2)}`;
    }

    return `(${cleanedValue.slice(0, 2)}) ${cleanedValue.slice(2, 7)}-${cleanedValue.slice(7, 11)}`;
  };

  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatarTelefone(e.target.value);
    setUserData({ ...userData, telefone: formattedValue });
  };

  const data = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSelection1Change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelection1(e.target.value);
  };

  const handleSelection2Change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelection2(e.target.value);
  };

  const send = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    const { nome, telefone, email } = userData;
    const option = {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        nome,
        telefone,
        email,
        selection1,
        selection2
      })
    };
    const res = await fetch("https://formulario-conste-default-rtdb.firebaseio.com/Mensagens.json", option);
    console.log(res);

    if (res.ok) {
      window.location.href = '/agradecimento';
    }
  };

  return (
    <>
      <h1 className='text-laranja lg:text-4xl text-3xl font-bold text-center mt-10 mb-16'>Mantenha Constancia no Seu <br /> Crescimento Conosco</h1>
      <form className="max-w-full w-screen gap-4 flex flex-col items-center m-auto mt-0" onSubmit={send}>
        <div className="mb-4 w-72">
          <input
            className="form-input mt-1 mb-4 block w-full rounded border-gray-400 focus:border-laranja focus:ring-laranja focus:outline-none p-3 text-lg"
            type="text"
            id="nome"
            name="nome"  // Corrigido o nome do campo para "nome"
            onChange={data}
            value={userData.nome}
            required
            placeholder="Nome da Empresa"
          />
        </div>
        <div className="mb-4 w-72">
          <input
            className="form-input mt-1 block w-full rounded border-gray-400 focus:border-laranja focus:ring-laranja focus:outline-none p-3 text-lg"
            type="tel"  // Alterado para type="tel"
            id="telefone"
            name="telefone"
            onChange={handleTelefoneChange}
            value={userData.telefone}
            required
            placeholder="(XX)XXXXX-XXXX"
          />
        </div>
        <div className="mb-4 w-72">
          <input
            className="form-input mt-1 block w-full rounded border-gray-400 focus:border-laranja focus:ring-laranja focus:outline-none p-3 text-lg"
            type="email"
            id="email"
            name="email"  // Corrigido o nome do campo para "email"
            onChange={data}
            value={userData.email}
            required
            placeholder="email@hotmail.com"
          />
        </div>
        <div className="mb-4 w-72">
          <select value={selection1} onChange={handleSelection1Change} className="form-select mt-1 block w-full rounded border-gray-400 focus:border-laranja focus:ring-laranja focus:outline-none p-3 text-lg" style={{ backgroundColor: 'white', color: 'gray' }}>
            <option value="">Número de Funcionários</option>
            <option value="1 - 10 Funcionários">1 - 10 Funcionários</option>
            <option value="11 - 20 Funcionários">11 - 20 Funcionários</option>  // Corrigido o valor da opção
            <option value="21 - 30 Funcionários">21 - 30 Funcionários</option>  // Corrigido o valor da opção
            <option value="Mais de 30 Funcionários">Mais de 30 Funcionários</option>  // Corrigido o valor da opção
          </select>
        </div>
        <div className="mb-4 w-72">
          <select value={selection2} onChange={handleSelection2Change} className="form-select mt-1 block w-full rounded border-gray-400 focus:border-laranja focus:ring-laranja focus:outline-none p-3 text-lg" style={{ backgroundColor: 'white', color: 'gray' }}>
            <option value="">Faturamento Mensal</option>
            <option value="Entre R$ 10.000 - R$ 100.000">Entre R$ 10.000 - R$ 100.000</option>
            <option value="Entre R$ 100.000 - R$ 250.000">Entre R$ 100.000 - R$ 250.000</option>
            <option value="Entre R$ 250.000 - R$ 500.000">Entre R$ 250.000 - R$ 500.000</option>
            <option value="Mais de R$ 500.000">Mais de R$ 500.000</option>
          </select>
        </div>
        <button type="submit" className="bg-laranja hover:bg-gray-700 duration-300 my-8 text-white font-bold py-2 px-4 rounded w-36 mb-16 hover:scale-110">Enviar</button>
      </form>
    </>
  );
}
