import style from "./Baner.module.css";
import Image from "next/image";
import banner from "@/assets/banner.png";

export default function Baner(props){

    return(
        <section className={`${style.secaoBanner} ${props.Image === "Sun" ? style.sun : style.moon}`}>

            <div className={`${style.secaoBannerImagem} ${props.Image === "Sun" ? style.sun : style.moon} ${style.limitasecao}`}>
                <Image src={banner} alt="Banner" />
            </div>

            <div className={`${style.secaoBannerConteudo} ${style.limitasecao}`}>
            <p>BRANDING / UI / UX / TECNOLOGIA</p>

            <h2>
                Agência de Branding
                <br/>
                <span>e design digital</span>
            </h2>
            
            </div>

        </section>
    )
}