import style from "./Card.module.css";
export default function Card(props){

    return(
        <div className={`${style.card} ${props.Image === "Sun" ? style.sun : style.moon}`}>
            <p>{props.data}</p>
            <h3>{props.titulo}</h3>
            <p>{props.empresa}</p>
            <p>{props.descricao}</p>
        </div>
    )
}