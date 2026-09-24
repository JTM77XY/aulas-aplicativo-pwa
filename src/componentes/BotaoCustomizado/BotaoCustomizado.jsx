import "./BotaoCustomizado.css";

function BotaoCustomizado(props){
    return <button className="BotaoCustomizado_root" onClick={props.aoClicar}>{props.children}</button>;
}

export default BotaoCustomizado;