export default function Obrigado() {
    return (
        <div className="flex lg:flex-col flex-row items-center justify-center h-screen bg-gradient-to-r from-laranja to-laranja/50">
            <div className="bg-white lg:p-14 p-10 lg:w-auto w-96 lg:space-y-8 space-y-2 rounded-3xl">
                <h1 className="font-bold lg:text-2xl text-xl text-center text-laranja">
                    Seu formulário foi enviado com sucesso.
                </h1>
                <h3 className="font-medium lg:text-lg text-base text-center text-laranja">
                    O E-Book 📚 foi enviado no seu e-mail, olhe na sua caixa de entrada ou spam. 📧 <br />
                    Já iremos entrar em contato para falar sobre como podemos te ajudar com seu négocio.😊
                </h3>
            </div>
        </div>
    )
}