import Button from "../Components/boton.js";
import {useNavigate} from "react-router-dom";
import background from "../../src/assets/background.jpg";


function Home (){
    const navigate=useNavigate();

    const onClickButton=(url) => {
        navigate(url);
    }
    return (
        <section className='hero is-medium is-fullheight' style={{backgroundImage:'url(${background})',
        backgroundSize:"cover"}}>;
            <div className="hero-body">
                <div className="container has-text-centered">
                  <Button onClick={()=>onClickButton("/game")} text="texto"/>
                </div>   
            </div>
        </section>
    )
}

export default Home;
