import { useState } from "react";
import { useNavigate } from "react-router";
import Nav from "../compontents/Nav";
import axios from "axios";
import './styles/pages.css'

function CreateCard() {
    const navigate = useNavigate();
    const path = 'username'

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [bio, setBio] = useState('')
    const [emoticon, setEmoticon] = useState('')
    const [instagram, setInstagram] = useState('')
    const [twitter, setTwitter] = useState('')
    const [youtube, setYoutube] = useState('')
    const [tiktok, setTiktok] = useState('')
    const [spotify, setSpotify] = useState('')
    const [appleMusic, setAppleMusic] = useState('')
    const [cardColour, setColour] = useState('')

    const checkUsernameStatus = async () => {
        //get username if !err username is unique else "username is taken"
    }
    const createCardHandler = async () => {
        try {
            const res = await axios.post("http://localhost:8080/api/user/card", {
                username: username,
                password: password,
                bio: bio,
                emoticon: emoticon,
                instagram: instagram,
                twitter: twitter, 
                youtube: youtube,
                tiktok: tiktok,
                spotify: spotify,
                appleMusic: appleMusic,
                cardColour: cardColour,
            });
            } catch (err) {
                console.log(err.response.data)
            }
    }

    return(
        <div className='page'>
            <Nav />
        <div className='create-card'>
            <h2>Create Card</h2>
            <form onSubmit={((e) => {
                e.preventDefault();
                createCardHandler()
                .then(
                     navigate(`/${username}`)
                )
            })}>
            <label>Username:</label>
            <input value={username} 
            onChange={(e) => {
                setUsername(e.target.value);
                checkUsernameStatus();
            }} type='text'></input>
            <label>Password:</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type='password'></input>
            <label>Your Song:</label>
            <button>Pick a Song</button>
            <label>Bio:</label>
            <textarea value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
            <label>Emoticon:</label>
            <select className='emoticon'   value={emoticon}
            name="media"
            onChange={(e) => {
              setEmoticon(e.target.value);
            }}>
                <option>Select an Emotion</option>
                <option value="happy">Happy</option>
                <option value="sad">Sad</option>
                <option value="angry">Angry</option>
                <option value="cool">Cool</option>
            </select>
            <label>Instagram:</label>
            <input value={instagram} onChange={(e) => setInstagram(e.target.value)} type='text'></input>
            <label>YouTube:</label>
            <input value={youtube} onChange={(e) => setYoutube(e.target.value)} type='text'></input>
            <label>Twitter:</label>
            <input value={twitter} onChange={(e) => setTwitter(e.target.value)} type='text'></input>
            <label>TikTok:</label>
            <input value={tiktok} onChange={(e) => setTiktok(e.target.value)} type='text'></input>
            <label>Spotify:</label>
            <input value={spotify} onChange={(e) => setSpotify(e.target.value)} type='text'></input>
            <label>Apple Music:</label>
            <input value={appleMusic} onChange={(e) => setAppleMusic(e.target.value)} type='text'></input>
            <label>Card Color:</label>
            <input value={cardColour} onChange={(e) => setColour(e.target.value)} className='colour-selector' type='color'></input>
            <input type='submit' value='Create Card'></input>
            </form>
        </div>
        </div>
    )
}

export default CreateCard;