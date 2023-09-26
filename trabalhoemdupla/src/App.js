import Produto from './components/Jogos.js'
import './App.css';

function App() {
  return (
    <div className="Container">
    <Produto
        titulo="Lost Ark"
        preco="R$ De graça"
        descricao="Lost Ark é um jogo 2.5D action RPG multijogador massivo de fantasia com visão isométrica. É co-desenvolvido pela Tripod Studio e pela Smilegate RPG, 
        subsidiária de desenvolvimento de jogos da Smilegate. Foi totalmente lançado na região sul-coreana em 4 de dezembro de 2019."
        categoria="Categoria: Jogos de PC"
      />
      <Produto
        titulo="Sekiro: Shadows Die Twice"
        preco="R$314.00"
        descricao="Usuários do Google
        Sekiro: Shadows Die Twice é um jogo eletrônico de ação-aventura desenvolvido pela FromSoftware e publicado pela Activision.
         Foi lançado em 22 de março de 2019 para Microsoft Windows, PlayStation 4 e Xbox One, e em 28 de outubro de 2020 para Google Stadia."
        categoria="Categoria: Jogos de PC"
      />
    </div>
  );
}

export default App;
