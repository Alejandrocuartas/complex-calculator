import React, { useState } from "react";

import polarOperator from "./operations logic/Polar";

const Polar = () => {
    const [state, setState] = useState({A: 1, B: 1, C: 1, D: 1});
    
    const handleClickPlus = () => {
        const polar = polarOperator(state.A, state.B, state.C, state.D, '+');
        alert(`La suma de los vectores ingresados es ${polar.x} + (${polar.y})i`)
        location.reload()
    }
    
    const handleClickSubstraction = () => {
        const polar = polarOperator(state.A, state.B, state.C, state.D, '-');
        alert(`La resta de los vectores ingresados es ${polar.x} + (${polar.y})i`)
    }

    return(
        <div>
            <div className="container">
                <div className="Title col-lg-4 offset-lg-4 col-md-4 offset-md-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Polar Operator</h1> 
                                <h3>Enter the polar coordenate and select the operation</h3>
                            </div>
                        </div>
                        <div className="row">
                            <input onChange={(e) => setState({...state, A: Number(e.target.value)})} className="mb-3 col-2" placeholder="A" />
                            <input onChange={(e) => setState({...state, B: Number(e.target.value)})} className="mb-3 col-2" placeholder="B" />
                            <div className="col-4 alert alert-primary" role="alert">
                                <small>A + Bi y C + Di</small>
                            </div>
                            <input onChange={(e) => setState({...state, C: Number(e.target.value)})} className="mb-3 col-2" placeholder='C' />
                            <input onChange={(e) => setState({...state, D: Number(e.target.value)})} className="mb-3 col-2" placeholder='D' />
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="mb-1 d-grid gap-2 mx-auto">
                                    <button onClick={handleClickPlus}  className="btn btn-primary" type="button">+</button>
                                </div>
                                <div className="mb-2 d-grid gap-2 mx-auto">
                                    <button onClick={handleClickSubstraction}  className="btn btn-primary" type="button">-</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Polar;