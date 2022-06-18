import './modal.css'
import {X, CopySimple} from 'phosphor-react'

export default function Modal({closeModal, content}){

    //faz a copia da url encurtada para o usuario pode fazer a cola onde quiser
    async function copyLink(){
        await navigator.clipboard.writeText(content.link)
        alert('Sua URL foi encurtada com sucesso, ela se encontra na aba favoritos no canto superior direito da página principal ​🥳')
    }
    return(
    <div className='container'>
        <div className='container-modal'>
            <div className='modal-header'>
                <h2>Link Encurtado</h2>
                <button 
                onClick={closeModal}
                className='shortener-link'>
                    <X 
                    size={30} 
                    color="#f5af19" 
                    className='close-modal'/>
                </button>
            </div>

            <span className='span-modal'>
                {content.long_url}
            </span>

            <button className='copy-btn' onClick={copyLink} >
                {content.link}
                <CopySimple size={25} color="#f5af19"/>
            </button>
        </div>
    </div>
    )
}