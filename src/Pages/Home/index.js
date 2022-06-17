import './home.css'
import { LinkBreak, LinkSimple } from 'phosphor-react'
import HomeButton from '../../components/HomeButton'

export default function Home() {
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
                placeholder="Cole aqui seu link..."/>
                </div>
                <button
                className='btn'>Encurtar e Favoritar Link</button>
            </div>
            <HomeButton/>
        </div>
    )
}