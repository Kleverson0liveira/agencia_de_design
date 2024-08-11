import style from "./experiencia.module.css";
import Card from "../Card";
export default function ExperienciaDeTrabalho(props){
    return(
        <section className={`${style.apresentacao} ${props.Image === "Sun" ? style.sun : style.moon}`}>
            <div className={style.limitesecao}>
            <h2>Experiências De Trabalho</h2>
            <div className={style.tracoLaranja}></div>
            <p className={style.experiencia}>
                Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
                Sites e Marketing <br/>Digital, nos empenhamos diariamente para entregar
                resultados que tragam impacto aos <br/>nossos clientes.
            </p>
            <div className={style.cards}>
                <Card
                data="JUNHO 2012 - 2016"
                titulo="Web Designer"
                empresa="Pied Piper StartUp."
                descricao="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
                Image={props.Image}
                />
                <Card
                data="AGOSTO 2016 - 2019"
                titulo="Product Designer"
                empresa="E Corp."
                descricao="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
                Image={props.Image}
                />
                <Card
                data="FEVEREIRO 2019 - 2021"
                titulo="Digital Consulting"
                empresa="Arasaka Inc."
                descricao="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
                Image={props.Image}
                />
            </div>
            </div>
        </section>
    );
}