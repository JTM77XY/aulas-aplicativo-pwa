import Principal from "../../componentes/principal/principal";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";

function Paginainicial() {
  return (
    <Principal>
      conteúdo principal
      <br />
      <BotaoCustomizado
        tipo="primario"
        aoClicar={() => alert("salvar clicado!")}
      >
        salvar
      </BotaoCustomizado>
      <BotaoCustomizado
        tipo="secundario"
        aoClicar={() => alert("cancelar clicado!")}
      >
        cancelar
      </BotaoCustomizado>
      <BotaoCustomizado aoClicar={() => alert("enviar clicado!")}>
        enviar
      </BotaoCustomizado>
    </Principal>
  );
}

export default Paginainicial;
