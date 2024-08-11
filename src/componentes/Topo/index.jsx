import Image from "next/image";
import Logo from "@/assets/logo.png";
import Sun from "@/assets/sun.png";
import Moon from "@/assets/moon.png";
import style from "./Topo.module.css"
export default function Topo(props){

        return(
            <header className={`${style.topo} ${props.Image === "Sun" ? style.sun : style.moon}`}>

                <Image src={Logo} alt="Logo" />
                <button onClick={props.trocaCor} className={style.botao}>
                    <Image 
                    src={props.Image === "Sun" ? Moon : Sun} 
                    alt={props.Image}
                    className={style.iconeTema}
                    />
                </button>
            </header>
        );
}