import "./Avatar.css"

function Avatar(props){
    
  const letra = props.nome[0];
  return <div className="Avatar_root">{letra}</div>
}

export default Avatar;