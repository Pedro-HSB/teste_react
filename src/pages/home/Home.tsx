import { useState } from "react";

interface homeProps {
    titulo: string;
    texto: string;
}

function Home(props: homeProps) {

    const [isLogged, setIsLoggeed] = useState(false);



    return (
        <>
            <div style={{
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexFlow: "row",
            }}>
                <div style={{
                    backgroundColor: "#3874B0",
                    width: "50vw",
                    borderRadius: "10px"
                }}>
                    {/* condicao ? acao verdadeira : acao falsa */}
                    {
                        isLogged ? //isso aqui serve como um if 
                            (
                                <div style={{
                                    textAlign: "center",
                                    justifyContent: "center",
                                    flexFlow: "row"
                                }}>
                                    <h2>{props.titulo}</h2>
                                    <p>{props.texto}</p>
                                    <button onClick={() => setIsLoggeed(false)} style={{
                                        border: "0",
                                        borderRadius: "10px",
                                        fontSize: "20px",
                                        width: "80px",
                                        backgroundColor: "#405870"
                                    }}>logout</button>
                                </div>
                            ) : (// isso aqui serve como else
                                <div style={{
                                    fontFamily: "fantasy",
                                    textAlign: "center",
                                    padding: "10px"
                                }}>
                                    <h2>Login</h2>
                                    <div >
                                        <div style={{
                                            padding: "5px"
                                        }}>
                                            <label htmlFor="" style={{
                                                margin: "7px"
                                            }}>email</label>
                                            <input style={{
                                                borderRadius: "10px"
                                            }} type="email" name="" id="" />
                                        </div>
                                        <div style={{
                                            padding: "5px",
                                            margin: "5px"
                                        }}>
                                            <label htmlFor="" style={{
                                                margin: "5px"
                                            }}>senha</label>
                                            <input style={{
                                                borderRadius: "10px"
                                            }} type="password" name="" id="" />
                                        </div>
                                        <button onClick={() => setIsLoggeed(true)} style={{
                                            border: "0",
                                            borderRadius: "10px",
                                            fontSize: "20px",
                                            width: "80px",
                                            backgroundColor: "#405870"
                                        }}>entrar</button>
                                    </div>
                                </div>
                            )
                    }
                </div>
            </div >
        </>
    )
}

export default Home