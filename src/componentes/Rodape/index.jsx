import Image from "next/image";
import logo from "@/assets/logo.png";
import facebook from "@/assets/facebook.png";
import twitter from "@/assets/twitter.png";
import dribble from "@/assets/dribble.png";
import behance from "@/assets/behance.png";
import googlePlus from "@/assets/google-plus.png";
import linkedin from "@/assets/linkedin.png";

import style from "./Rodape.module.css"




export default function Rodape(props){

        return(
            <footer className={`${style.rodape} ${props.Image === "Sun" ? style.sun : style.moon}`}>
                <Image src={logo} alt="logo"/>
                <p>Ajudamos a criar uma personalidade digital construindo sua <br/> marca no ambiente online utilizando estratégias,
                ferramentas <br/>  e tecnologias personalizadas.</p>
                <div className={style.icones}>
                <Image src={facebook} alt="facebook"/>
                <Image src={twitter} alt="twitter"/>
                <Image src={linkedin} alt="linkedin"/>
                <Image src={dribble} alt="dribble"/>
                <Image src={behance} alt="behance"/>
                <Image src={googlePlus} alt="google-plus"/>
                </div>
                <p className={style.altoral}>
                    Copyright 2022 © <span>Kleverson Oliveira</span>
                </p>
            </footer>
        );
}