import { useState } from "react"


function Contador() {

    const [valor, setValor] = useState(0);

    function add(){
        setValor(valor + 1);
    }
    function sub() {
        setValor(valor - 1);
    }

  return (
    <>
          <div style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexFlow: "row",
              margin:"10px"
          }}>
              <div style={{
                  backgroundColor: "#3874B0",
                  width: "50vw",
                  borderRadius: "10px",
                  textAlign:"center",
                  padding: "10px",
              }}>
                  <h2>Contador</h2>
                  <div>
                      <p>valor atual :{valor}</p>
                  </div>
                  <button onClick={add} style={{
                      border: "0",
                      borderRadius: "10px",
                      fontSize: "20px",
                      width: "150px",
                      backgroundColor: "#405870",
                      margin: "5px"
                  }}>adicionar + 1</button>
                  <button onClick={sub} style={{
                      border: "0",
                      borderRadius: "10px",
                      fontSize: "20px",
                      width: "150px",
                      backgroundColor: "#405870",
                      margin: "5px"
                  }}>diminuir - 1</button>
              </div>
          </div>
    </>
  )
}

export default Contador