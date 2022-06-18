import './home.css'
import { useState } from 'react'
import { LinkBreak, LinkSimple } from 'phosphor-react'
import HomeButton from '../../components/HomeButton'
import Modal from '../../components/Modal'

export default function Home() {
    //faz a captura do que foi escrito pelo usuario no campo input
    const [link, setLink] = useState('')
    //controla a renderização condicional do modalTrigger
    const [openModal, setOpenModal] = useState(false)

    //acionador do modal com o link encurtado
    function modalTrigger() {
        setOpenModal(true)
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
                closeModal={() => setOpenModal(false)}/>
            )}
        </div>
    )
}