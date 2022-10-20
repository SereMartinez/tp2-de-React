import Button from "../Components/boton.js"
import {useNavigate} from "react-router-dom"

function Home (){
    const navigate=useNavigate();
    const onClickButton=(url) => {
        navigate(url);
    }
    return (
<Button onclick={()=>onClickButton("/game")} text="Haz click para iniciar el juego"/>
)
}

export default Home;