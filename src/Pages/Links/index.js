import './links.css'
import {ArrowCircleLeft, Trash, LinkBreak } from 'phosphor-react'
import {Link} from 'react-router-dom'

export default function Links(){
    return(
        <div className='container-links'>

            <div className='links-header'>
                <Link className='link' to='/shortenerfavlink'>
                    <ArrowCircleLeft className='icon-arrow' size={32} />
                </Link>
            <h2>Meus Links Favoritos</h2>
            </div>

            <div className='links-item'>
                <button className='link-saved'>
                    <LinkBreak className='link-icon' size={25}/>
                    https://www.youtube.com...............................................................................
                </button>
                <button className='link-trash'>
                    <Trash size={25}/>
                </button>
            </div>

            <div className='links-item'>
                <button className='link-saved'>
                    <LinkBreak className='link-icon' size={25}/>
                    https://www.google.com
                </button>
                <button className='link-trash'>
                    <Trash size={25}/>
                </button>
            </div>

            <div className='links-item'>
                <button className='link-saved'>
                    <LinkBreak className='link-icon' size={25}/>
                    https://www.globo.com
                </button>
                <button className='link-trash'>
                    <Trash size={25}/>
                </button>
            </div>
        </div>
    )
}