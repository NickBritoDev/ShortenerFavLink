import './modal.css'
import {X, CopySimple} from 'phosphor-react'

export default function Modal({closeModal}){
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
                https://youtube.com/rocketseats
            </span>

            <button className='copy-btn'>
                https://bit.ly/0098
                <CopySimple size={25} color="#f5af19"/>
            </button>
        </div>
    </div>
    )
}