import { Link } from 'react-router-dom'

import './styles/components.css'


function Nav() {
    return(
        <div className='nav'>
            <Link className='link' to={'/'}><h1>card.me</h1></Link>
        </div>
    )
}

export default Nav;