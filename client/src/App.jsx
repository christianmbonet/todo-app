import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ShowTodoList from "./components/ShowTodoList";
import "./App.scss";

function App() {
    return (
        <div className="app-contents">
            <BrowserRouter>
                <ShowTodoList/>
            </BrowserRouter>
        </div>
    );
}

export default App;