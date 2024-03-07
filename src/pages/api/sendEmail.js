// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { companyName, phone, email, numberOfEmployees, monthlyRevenue } = req.body;

    // Configure o transporte do email
    const transporter = nodemailer.createTransport({
      // Configuração do transporte de email (por exemplo, SMTP)
    });

    // Configuração do email
    const mailOptions = {
      from: 'seuemail@example.com', // Seu endereço de email
      to: 'gui.strabehonorio@outlook.com', // Endereço de email do destinatário
      subject: 'Novo formulário de contato recebido',
      html: `
        <p><strong>Nome da Empresa:</strong> ${companyName}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Número de Funcionários:</strong> ${numberOfEmployees}</p>
        <p><strong>Faturamento Mensal:</strong> ${monthlyRevenue}</p>
      `
    };

    try {
      // Enviar o email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email enviado com sucesso!' });
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      res.status(500).json({ message: 'Ocorreu um erro ao enviar o email.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Método não permitido');
  }
}
