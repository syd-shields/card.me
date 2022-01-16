import { useNavigate } from "react-router";
import Nav from "../compontents/Nav";
import './styles/pages.css'

function CreateCard() {
    const navigate = useNavigate();

    return(
        <div className='page'>
            <Nav />
        <div className='create-card'>
            <h2>Create Card</h2>
            <form>
            <label>Link Spotify:</label>
            <button onClick={((e) => {
                e.preventDefault()
            })}>Link Spotify</button>
            <label>Bio:</label>
            <textarea></textarea>
            <label>Emoticon:</label>
            <div className='emoticons'></div>
            <label>Instagram:</label>
            <input type='text'></input>
            <label>YouTube:</label>
            <input type='text'></input>
            <label>Twitter:</label>
            <input type='text'></input>
            <label>TikTok:</label>
            <input type='text'></input>
            <label>Spotify:</label>
            <input type='text'></input>
            <label>Apple Music:</label>
            <input type='text'></input>
            <label>Card Color:</label>
            <input type='color'></input>
            <input type='submit' value='Create Card'></input>
            </form>
        </div>
        </div>
    )
}

export default CreateCard;