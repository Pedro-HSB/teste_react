import './App.css'
import Home from './pages/home/Home'
import Contador from './pages/contador/Contador'
import Tarefa from './pages/tarefa/Tarefa'
function App() {
  return (
    <>
      <div style={{
        fontFamily: "fantasy",
        padding: "10px",
        backgroundColor: "#1080F0"
      }}>
        <Home
          titulo="seja bem vind"
          texto="usuario : cleito"
        />
        <Contador />
        <Tarefa />
    </div>
    </>
  )
}

export default App
