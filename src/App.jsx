import './App.css';

function App() {
  let nome = <p>Olá Visitante</p>
  return (
    <div className="App">
      <header className="App-header">
        <img src="imagem.png" alt="Música" />
        <p>Conteúdo {nome}</p>
        <textarea> rows={3}</textarea>
      </header>
    </div>
  );
}

export default App;
