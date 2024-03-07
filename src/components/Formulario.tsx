import React, { useState } from 'react';

const Formulario = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    phone: '',
    email: '',
    numberOfEmployees: '',
    monthlyRevenue: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Lógica de envio do formulário
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    }
  };

  return (
    <>
      <h1 className='text-orange-500 text-5xl font-bold text-center mt-16 mb-10'>Mantenha Constancia no Seu <br /> Crescimento Conosco</h1>
      <form onSubmit={handleSubmit} className="max-w-md gap-4 flex flex-col items-center m-auto mt-8">
      <div className="mb-4">
        <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} className="form-input mt-1 block w-full rounded border-gray-400 p-3 text-lg" required placeholder='Nome da Empresa' />
      </div>
      <div className="mb-4">
        <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="form-input mt-1 block w-full rounded border-gray-400 p-3 text-lg" required placeholder='Telefone' />
      </div>
      <div className="mb-4">
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-input mt-1 block w-full rounded border-gray-400 p-3 text-lg" required placeholder='Email' />
      </div>
      <div className="mb-4">
        <input type="number" id="numberOfEmployees" name="numberOfEmployees" value={formData.numberOfEmployees} onChange={handleChange} className="form-input mt-1 block w-full rounded border-gray-400 p-3 text-lg" required placeholder='Número de Funcionários' />
      </div>
      <div className="mb-4">
        <input type="number" id="monthlyRevenue" name="monthlyRevenue" value={formData.monthlyRevenue} onChange={handleChange} className="form-input mt-1 block w-full rounded border-gray-400 p-3 text-lg" required placeholder='Faturamento Mensal' />
      </div>
      <button type="submit" className="bg-orange-500 hover:bg-gray-700 duration-300 my-auto text-white font-bold py-2 px-4 rounded w-36 mb-10">Enviar</button>
    </form>
    </>
  );
};

export default Formulario;
