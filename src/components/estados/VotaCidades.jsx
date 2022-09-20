import React, {useState} from "react";


const VotaCidades = () => {

    const [counterQui, setCounterQui] = useState(0);
    const [counterLim, setCounterLim] = useState(0);
    const [counterCra, setCounterCra] = useState(0);

    function votaQui(){
        setCounterQui(counterQui + 1);
    }
    function votaLim(){
        setCounterLim(counterLim + 1);
    }
    function votaCra(){
        setCounterCra(counterCra + 1);
    }
    function alerta(){
      alert(`Quixadá: ${counterQui} \n Limoeiro do norte: ${counterLim} \n Crateús: ${counterCra}` )
    }

    return (
        <div>
            <div>
                <h2>Quixadá: </h2>
                <button onClick={votaQui}>Votar Quixadá</button>
            </div>
 
            <div>
                <h2>Limoeiro do Norte: </h2>
                <button onClick={votaLim}>Votar Limoeiro do Norte</button>
            </div>
            <div>
                <h2>Crateús: </h2>
                <button onClick={votaCra}>Votar Crateús</button>
            </div>
            <br/>
            <br/>
            <div>
                <button onClick={alerta}>Mostrar votação</button>
            </div>
        </div>      
    )
    

}

export default VotaCidades