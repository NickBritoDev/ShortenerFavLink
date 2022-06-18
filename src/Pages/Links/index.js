import './links.css'
import {ArrowCircleLeft, Trash, LinkBreak } from 'phosphor-react'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { getLinkSave } from '../../services/savedLink'
import Modal from '../../components/Modal'

export default function Links(){
    //faz a renderização dos dados na tela
    const [myLinks, setMyLinks] =useState([])
    //busca os dados para serem renderizados 
    const [data, setData] =useState({})
    //abre o modal ao clicar sobre a url favorita
    const [openModal, setOpenModal] = useState(false)
    useEffect(() => {
        async function getLinks(){
            //busca os links no local storage para fazer a renderização para tela
            const result = await getLinkSave('@ShortenerFavLink')
            //se a lista estivar vazia
            if(result.length ===0){
                console.log('lista vazia')
            }
            setMyLinks(result)
        }
        getLinks()
    }, [])

    function handleModal(link){
        setData(link)
        setOpenModal(true)
    }
    return(
        <div className='container-links'>

            <div className='links-header'>
                <Link className='link' to='/shortenerfavlink'>
                    <ArrowCircleLeft className='icon-arrow' size={32} />
                </Link>
            <h2>Meus Links Favoritos</h2>
            </div>

            {myLinks.map(link => (
                <div key={link.id} className='links-item'>
                <button className='link-saved' onClick={() => handleModal(link) } >
                    <LinkBreak className='link-icon' size={25}/>
                    {link.long_url}
                </button>
                <button className='link-trash'>
                    <Trash size={25}/>
                </button>
            </div>
            ))}

            { openModal && (
                <Modal
                closeModal={() => setOpenModal(false)}
                content={data}/>
            )}
        </div>
    )
}