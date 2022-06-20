import './homebutton.css'
import {LinkedinLogo, GithubLogo, Star} from 'phosphor-react'
import {Link} from 'react-router-dom'

export default function HomeButton() {
    return(
        <div className='container-homeButton'>
            <a href="https://www.linkedin.com/in/nicolas-brito-da-cruz-09b30a237/"><LinkedinLogo size={32} /></a>
            <a href="https://github.com/NickBritoDev"><GithubLogo size={32} /></a>
            <Link className='fav-button' to='/Links'>
                <h2> <Star size={32} className='star-icon' /> Favoritos </h2>
            </Link>
        </div>
    )
}