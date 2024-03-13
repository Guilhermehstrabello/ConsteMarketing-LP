import axios from 'axios';
import React, { Component } from 'react'

interface FormularioState {
  nome: string;
  email: string;
  telefone: string;
  funcionarios: string;
  faturamento: string;
}

export default class Formulario extends Component<{}, FormularioState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      nome: '',
      email: '',
      telefone: '',
      funcionarios: '',
      faturamento: ''
    };
  }

  changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value } as Pick<FormularioState, keyof FormularioState>);
  };

  submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(this.state);

    axios.post('https://sheet.best/api/sheets/a15e04dc-7ba3-4b5b-aa38-07b7c2fa08ac', this.state)
    .then(response => {
      console.log(response);
    })
  };


  render() {
    const { nome, email, telefone, funcionarios, faturamento } = this.state;
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
            <input type="text" name="funcionarios" value={funcionarios} onChange={this.changeHandler} className="form-input mt-1 block w-full rounded border-gray-400 focus:border-laranja focus:ring-laranja focus:outline-none p-3 text-lg" required placeholder='Número de Funcionários' />
          </div>
          <div className="mb-4 w-72">
            <input type="text" name="faturamento" value={faturamento} onChange={this.changeHandler} className="form-input mt-1 block w-full rounded border-gray-400 focus:border-laranja focus:ring-laranja focus:outline-none p-3 text-lg" required placeholder='Faturamento Mensal' />
          </div>
          <button type="submit" className="bg-laranja hover:bg-gray-700 duration-300 my-auto text-white font-bold py-2 px-4 rounded w-36 mb-24">Enviar</button>
        </form>
      </>
    )
  }
}