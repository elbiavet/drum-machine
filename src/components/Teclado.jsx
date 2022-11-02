
import { useEffect } from "react";
import "../estilos/Teclado.css"


export const Teclado = ({data, setDisplay}) => {

    // hago un array con todos los elemenos <audio>
    let audio = document.getElementsByTagName("audio");
    
    //  para manejar eventos del teclado uso un escuchador dentro del hook useEffect
    useEffect(() => {
        document.addEventListener('keydown', (e)=> {presionarTecla(e.key)}
           )
      }, [])

        function presionarTecla (letra){
            
            data.map(({key}, i) => 
            { if(key === letra){
                document.getElementById(key).play()
                setDisplay(data[i].id)
             }}
            )
        }
        
      return(
        
        <div className="teclado-container">
            
            {/* estoy desestructurando "item" al pasarlo como argumento de map */}
            {data.map(({id, url, key}, i) => (
                
                <button className = "drum-pad" 
                        id = {`drum${key}`} 
                        key = {key}
                        onClick = {()=>{
                            audio[i].play()
                            setDisplay(data[i].id)
                        }}
                >{(key.toUpperCase())}
                    <audio src={url} className="clip" id={key.toUpperCase()}></audio>
                </button>)
        
            )}
        </div>
        )
    }
