import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Guide from "./Pages/Guide";
import Converter from "./Pages/Converter";
import Phasor from "./Pages/Phasor";
import Polar from "./Pages/Polar";


const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/complex-calculator/complexoperator" component={Polar}/>
                    <Route exact path="/complex-calculator/phasoroperator" component={Phasor}/>
                    <Route exact path="/complex-calculator/converter" component={Converter}/>
                    <Route exact path="/complex-calculator/" component={Guide}></Route>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;