import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Rotas} from "./routes";
import {Header} from "./componentes/Header";
import "./assets/css/styles.scss"

// Redux
import {Provider} from "react-redux"
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="container">
                    <Header/>
                    <Rotas/>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
