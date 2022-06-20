import './home.css'
import { useState } from 'react'
import { LinkBreak, LinkSimple } from 'phosphor-react'
import HomeButton from '../../components/HomeButton'
import Modal from '../../components/Modal'
import api from '../../services/api'
import { saveLink } from '../../services/savedLink'

export default function Home() {
    //faz a captura do que foi escrito pelo usuario no campo input
    const [link, setLink] = useState('')
    //controla a renderização condicional do modalTrigger
    const [openModal, setOpenModal] = useState(false)
    //faz a caputura dos dados retornados pela api (id, link, long_url)
    const [data, setData] = useState({})

    //acionador do modal com o link encurtado
    async function modalTrigger() {
        //onde esta sendo efetuado a requisição
        try {
            //faz a requisição do que foi escrito pelo usuario e pega o long link
            const response = await api.post('/shorten', {long_url: link})
            setLink('')
            //pegar os dados referente ao data da api 
            setData(response.data)
            //apresenta o modal aberto com os dados capturados pela api
            setOpenModal(true)
            //salva os links digitados pelo usuario
            saveLink('@ShortenerFavLink', response.data)
        } 
        //responde caso algo der errado 
        catch {
            alert("Algo deu errado 🚨​ Não se preocupe, tente novamente 😅​")
            setLink('')
        }
    }
    return (
        <div className='container-home'>

            <div className='logo'>
            <div className='rotate-logo'>
            <LinkBreak className='logo-icon'/>
            </div>
            <h1>Shortener and Favorite Link</h1>
            <span>Cole o link no espaço abaixo 👇🏻​</span>
            </div>

            <div className='container-input'>
                <div>
                <LinkSimple className='link-simple-icon' size={28} />
                <input
                //onde esta armazenado o que foi escrito pelo usuario
                value={link}
                //pega o que esta sendo escrito pelo usuario e manda para o link armazenar
                onChange={(e) => setLink(e.target.value)}
                placeholder="Cole aqui seu link..."/>
                </div>
                <button
                //aciona o modal para ser exibido 
                onClick={modalTrigger}
                className='btn'>Encurtar e Favoritar Link</button>
            </div>
            <HomeButton/>
            
            {openModal && (
                //renderização condicional sobe a condilçao do click do modaltrigger
                <Modal
                //fecha o botão
                closeModal={() => setOpenModal(false)}
                //passa a propriedade data ode esta os dados da api para fazer a requisição no modal
                content={data}/>
            )}
        </div>
    )
}