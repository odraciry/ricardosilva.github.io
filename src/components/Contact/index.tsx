import { ContainerContact } from "./style";
import github from "../../assets/github.png"
import instagram from "../../assets/instagram.png"
import linkedin from "../../assets/linkedin.png"
import emailImg from "../../assets/o-email.png"
import emailjs from "@emailjs/browser"
import { useState } from "react";
import { toast } from "react-toastify";

export function Conatact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (email === '' || name === '' || message === '') {
            console.log('ta vazio man')
            toast.error('Preencha todos os campos!!');
            return;
        }

        const templateParams = {
            from_name: name,
            email: email,
            message: message
        }

        emailjs.send('gmail_service', 'template_daj7juo', templateParams, 'aA-AtutuZZGuF369u')
            .then((response) => {
                toast.success('Mensagem enviada');
                setEmail('');
                setName('');
                setMessage('');
                console.log(response.status, response.text);
            }, (err) => {
                toast.error('Mensagem nao enviada');
                console.log("ERRO: ", err);
            })

    };


    return (
        <ContainerContact id="contact">
            <h1>Contato</h1>
            <div className="box">
                <div className="form">
                    <h3>Entrar em contato</h3>
                    <form onSubmit={sendEmail}>
                        <input type="text" name="name" className="nome" placeholder="Nome"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input type="email" name="email" className="email" placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input type="text" name="message" className="mensagem" maxLength={400} placeholder="Mensagem"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button
                            type="submit"
                        // onClick={() => handleEmail(mensagem)}
                        >
                            Enviar
                        </button>
                    </form>
                </div>
                <div className="links">
                    <a href="https://www.instagram.com/ricardosilva.ofc/">
                        <img src={instagram} />
                    </a>
                    <a href="https://www.linkedin.com/in/odracir-silva/">
                        <img src={linkedin} />
                    </a>
                    <a href="mailto:ricSilva2006@gmail.com">
                        <img src={emailImg} />
                    </a>
                    <a href="https://github.com/odraciry">
                        <img src={github} />
                    </a>
                </div>
            </div>
            <div className="direitos">
                <h1>© Ricardo Silva :)</h1>
            </div>
        </ContainerContact>
    )
}