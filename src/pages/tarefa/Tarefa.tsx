import { useEffect, useState } from "react"

function Tarefa() {

  const [completed, setCompleted] = useState(false);

  const [tarefa, setTarefa] = useState("");

  useEffect(() => {
    if (completed) {
      setTarefa("parabens voce concluiu a tarefa");
    }
    else {
      setTarefa("tarefa nao concluida");
    }
  }, [completed]);

  return (
    <div style={{
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      flexFlow: "row",
      margin: "10"
    }}>
      <div style={{
        backgroundColor: "#3874B0",
        width: "50vw",
        borderRadius: "10px",
        padding: "10px"
      }}>
        <h2>Tarefa</h2>
        <h3>{tarefa}</h3>
        <p>conclua a Tarefa</p>
        <button onClick={() => setCompleted(true)} style={{
          border: "0",
          borderRadius: "10px",
          fontSize: "20px",
          width: "150px",
          backgroundColor: "#405870",
          margin: "5px"
        }}>terminou ?</button>

        <button onClick={() => setCompleted(false)} style={{
          border: "0",
          borderRadius: "10px",
          fontSize: "20px",
          width: "150px",
          backgroundColor: "#405870",
          margin: "5px"
        }}>nao finalizou ?</button>
      </div>
    </div>
  )
}

export default Tarefa