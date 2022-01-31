import { useNavigate } from "react-router";
import Nav from "../compontents/Nav";
import './styles/pages.css'

function Landing() {
    const navigate = useNavigate();

    const searchHandler = () => {
       
    }

    return(
        <div className='page'>
            <Nav />
        <div className='landing'>
            <div className='search'>
            <h2>Find your card...</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                searchHandler();
            }}>
                <input type='text' placeholder='username'></input>
                <button type='submit' >Search</button>
            </form>
            </div>
            <div className='new'>
            <h2>Or make a new one...</h2>
            <button onClick={() => {
                navigate('/create-card')
            }}>create new card</button>
            </div>
        </div>
        </div>
    )
}

export default Landing;