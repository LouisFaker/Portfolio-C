
export default function Texto(props){
    return(
        <>
        <h1>Meu primeiro componente</h1>
        <h2>Meu nome e {props.nome}</h2>
        <h3>Possuo {props.idade} anos</h3>
        </>
    )
}