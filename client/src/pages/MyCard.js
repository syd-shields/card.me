import { useEffect, useState } from "react";
import { useLocation } from 'react-router'
import Nav from "../compontents/Nav";
import axios from "axios";
import "./styles/pages.css";

function MyCard() {
  const location = useLocation();
  const path = location.pathname.split('/')[1]

  const [card, setCard] = useState()

  const getCard = async () => {
    try {
        const res = await axios.get("http://localhost:8080/api/user/card/" + path);
        setCard(res.data)
        console.log(res.data)
        } catch (err) {
            console.log(err.response.data)
        }
}

useEffect(() => {
  getCard()
}
, [])

console.log()

  return (
    <div className="page">
      <Nav />
      <div className='card'>
      </div>
    </div>
  );
}

export default MyCard;
