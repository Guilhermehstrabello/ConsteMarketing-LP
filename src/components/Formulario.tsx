import axios from 'axios';
import React, { Component } from 'react';

interface FormularioState {
  nome: string;
  email: string;
  telefone: string;
  funcionarios: string;
  faturamento: string;
  enviado: boolean;
  showModal: boolean;
}

export default class Formulario extends Component<{}, FormularioState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      nome: '',
      email: '',
      telefone: '',
      funcionarios: '',
      faturamento: '',
      enviado: false,
      showModal: false
    };
  }

  changeHandler = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value } as Pick<FormularioState, keyof FormularioState>);
  };

  submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await axios.post('https://sheet.best/api/sheets/a15e04dc-7ba3-4b5b-aa38-07b7c2fa08ac', this.state);
      this.setState({ enviado: true, showModal: true });
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    }
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { nome, email, telefone, funcionarios, faturamento, enviado, showModal } = this.state;
    return (
      <>
        <h1 className='text-laranja text-5xl font-bold text-center mt-16 mb-24'>Mantenha Constancia no Seu <br /> Crescimento Conosco</h1>
        <form onSubmit={this.submitHandler} className="max-w-full w-screen gap-4 flex flex-col items-center m-auto mt-8">
          <div className="mb-4 w-72">
            <input type="text" name="nome" value={nome} onChange={this.changeHandler} className="form-input mt-1 block w-full rounded border-gray-400 focus:border-laranja focus:ring-laranja focus:outline-none p-3 text-lg" required placeholder='Nome da Empresa' />
          </div>
          <div className="mb-4 w-72">
            <input type="tel" name="telefone" value={telefone} onChange={this.changeHandler} className="form-input mt-1 block w-full rounded border-gray-400 focus:border-laranja focus:ring-laranja focus:outline-none p-3 text-lg" required placeholder='Telefone' />
          </div>
          <div className="mb-4 w-72">
            <input type="email" name="email" value={email} onChange={this.changeHandler} className="form-input mt-1 block w-full rounded border-gray-400 focus:border-laranja focus:ring-laranja focus:outline-none p-3 text-lg" required placeholder='Email' />
          </div>
          <div className="mb-4 w-72">
            <select name="funcionarios" value={funcionarios} onChange={this.changeHandler} className="form-select mt-1 block w-full rounded border-gray-400 focus:border-laranja focus:ring-laranja focus:outline-none p-3 text-lg" style={{ backgroundColor: 'white', color: 'gray'}} required>
              <option value="">Número de Funcionários</option>
              <option value="Entre 1-10 Funcionários">Entre 1-10 Funcionários</option>
              <option value="Entre 11-20 Funcionários">Entre 11-20 Funcionários</option>
              <option value="Entre 21-30 Funcionários">Entre 21-30 Funcionários</option>
              <option value="Mais de 100 Funcionários">Mais de 100 Funcionários</option>
            </select>
          </div>
          <div className="mb-4 w-72">
            <select name="faturamento" value={faturamento} onChange={this.changeHandler} className="form-select mt-1 block w-full rounded border-gray-400 focus:border-laranja focus:ring-laranja focus:outline-none p-3 text-lg" style={{ backgroundColor: 'white', color: 'gray'}} required>
              <option value="">Faturamento Mensal</option>
              <option value="Entre R$ 10.000 - R$ 100.000">Entre R$ 10.000 - R$ 100.000</option>
              <option value="Entre R$ 100.000 - R$ 500.000">Entre R$ 100.000 - R$ 500.000</option>
              <option value="Mais de R$ 500.000">Mais de R$ 500.000</option>
            </select>
          </div>
          <button type="submit" className="bg-laranja hover:bg-gray-700 duration-300 my-auto text-white font-bold py-2 px-4 rounded w-36 mb-24">Enviar</button>
        </form>
        {showModal && (
          <div className="fixed inset-0 z-10 overflow-y-auto flex justify-center items-center">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white rounded-lg p-8 max-w-md">
              <p className="text-center">Entraremos em contato em breve!</p>
              <button onClick={this.closeModal} className="bg-laranja hover:bg-gray-700 duration-300 my-auto text-white font-bold py-2 px-4 rounded mt-4">Fechar</button>
            </div>
          </div>
        )}
      </>
    );
  }
}
