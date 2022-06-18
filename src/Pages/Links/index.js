import './links.css'
import {ArrowCircleLeft, Trash, LinkBreak} from 'phosphor-react'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { getLinkSave, deleteLink } from '../../services/savedLink'
import Modal from '../../components/Modal'

export default function Links(){
    //faz a renderização dos dados na tela
    const [myLinks, setMyLinks] =useState([])
    //busca os dados para serem renderizados 
    const [data, setData] =useState({})
    //abre o modal ao clicar sobre a url favorita
    const [openModal, setOpenModal] = useState(false)
    //verifica se tem existencia dou não de links salvos, caso não tenha ele ira renderizar uma imagem 
    const [emptyList, setEmptyList] = useState(false)

    useEffect(() => {
        async function getLinks(){
            //busca os links no local storage para fazer a renderização para tela
            const result = await getLinkSave('@ShortenerFavLink')
            //se a lista estivar vazia
            if(result.length ===0){
                setEmptyList(true)
            }
            setMyLinks(result)
        }
        getLinks()
    }, [])

    //abre o modal para fazer a copia do link
    function handleModal(link){
        setData(link)
        setOpenModal(true)
    }

    //deleta o link dos favoritos
    async function handleDelete(id){
        const result = await deleteLink(myLinks, id)

        //atualização em tempo real na tela caso não tenha link ou todos sejam deletados
        if(result.length ===0){
            setEmptyList(true)
        }
        setMyLinks(result)
    }

    return(
        <div className='container-links'>

            <div className='links-header'>
                <Link className='link' to='/shortenerfavlink'>
                    <ArrowCircleLeft className='icon-arrow' size={32} />
                </Link>
            <h2>Meus Links Favoritos</h2>
            </div>

            {emptyList && (
                <div className='img-list'>
                    <div className='container-img'>
                        <h3>Você ainda não tem nehum link salvo</h3>
                        <p>Comece hoje mesmo a encurtar os links que antes eram infinitos e impossiveis de decorar. </p>
                        <span>Comece a encurtar e favoritar suas url's em um click​ </span>
                        <div className='button-area'>
                            <Link to='/shortenerfavlink/'>
                        <button className='fav-first'> Encurtar e Favoritar</button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            {myLinks.map(link => (
                <div key={link.id} className='links-item'>
                <button className='link-saved' onClick={() => handleModal(link) } >
                    <LinkBreak className='link-icon' size={25}/>
                    {link.long_url}
                </button>
                <button className='link-trash' onClick={() => handleDelete(link.id)}>
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