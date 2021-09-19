import React, { useState } from "react";

import phasorOperator from "./operations logic/Phasor";

const Phasor = () => {
    const [state, setState] = useState({A: '', B: '', alpha: '', teta: ''});
    
    /*const handleClickPlus = () => {
        const phasor = phasorOperator(state.A, state.teta, state.B, state.alpha, '+');
        alert(`La suma de los vectores ingresados es ${phasor.mod+"׆"+phasor.ang}`)
        location.reload()
    }*/
    
    const handleClickTimes = () => {
        const phasor = phasorOperator(state.A, state.teta, state.B, state.alpha, '*');
        alert(`La multiplicación de los vectores ingresados es ${phasor.mod} y el ángulo es ${phasor.ang} grados.`)
    }

    const handleClickDivision = () => {
        const phasor = phasorOperator(state.A, state.teta, state.B, state.alpha, '/');
        alert(`La división de los vectores ingresados es ${phasor.mod} y el ángulo es ${phasor.ang} grados.`)
    }
    return(
        <div>
            <div className="container">
                <div className="Title col-lg-4 offset-lg-4 col-md-4 offset-md-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Phasor Operator</h1> 
                                <h3>Enter the phasors and select the operation</h3>
                            </div>
                        </div>
                        <div className="row">
                            <input onChange={(e) => setState({...state, A: Number(e.target.value)})} className="mb-3 col-2" placeholder="A" />
                            <input onChange={(e) => setState({...state, teta: Number(e.target.value)})} className="mb-3 col-2" placeholder="θ" />
                            <div className="col-4 alert alert-primary" role="alert">
                                <small>A׆θ y B׆α</small>
                            </div>
                            <input onChange={(e) => setState({...state, B: Number(e.target.value)})} className="mb-3 col-2" placeholder='B' />
                            <input onChange={(e) => setState({...state, alpha: Number(e.target.value)})} className="mb-3 col-2" placeholder='α' />
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="mb-1 d-grid gap-2 mx-auto">
                                    <button onClick={handleClickTimes}  className="btn btn-primary" type="button">*</button>
                                </div>
                                <div className="mb-2 d-grid gap-2 mx-auto">
                                    <button onClick={handleClickDivision}  className="btn btn-primary" type="button">/</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Phasor;