import React from "react";
import { useState } from "react";

import {converter, converter0} from "./operations logic/Converter";



const Converter = () => {
    const[ state, setState ] = useState({A: 1, B: 1});
    const [ conv, setConv ] = useState(1);
    const setA = (e) => {
        setState({
            A: e.target.value
        })
    }
    const setB = (e) => {
        setState({
            ...state,
            B: e.target.value
        })
    }
    const handleClick = () => {
        if(conv==1){
            const phasor = converter(state.A, state.B);
            alert(`El módulo del fasor resultante es ${phasor.module} y la dirección es ${phasor.dir} grados.`)
        }else{
            const phasor = converter0(state.A, state.B);
            alert(`Las coordenadas polares del fasor ingresado son ${phasor.X} + (${phasor.Y})i`)
        }    
    }
    return(
        <div>
            <div className="container">
                <div className="Title col-lg-4 offset-lg-4 col-md-4 offset-md-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>{conv==1 ? "Polar to Phasorial" : "Phasor to Polar"}</h1> 
                                <h3>{conv==1 ? "A + Bi" : "A/θ"}</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-1 offset-lg-3 mb-2">
                                <input onChange={setA} placeholder="Enter 'A'" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-1 offset-lg-3 mb-2">
                                <input onChange={setB} placeholder={conv==1 ? "Enter 'B'" : "Enter θ"} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 offset-lg-4 mb-2">
                                <div className="d-grid gap-2 col-6 mx-auto">
                                    <button onClick={handleClick} className="btn btn-primary" type="button">=</button>
                                    <button onClick={() => conv == 1 ? setConv(0) : setConv(1)} className="btn btn-outline-success me-2">Press</button>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Converter;