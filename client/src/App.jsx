import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowTodoList from "./components/ShowTodoList";
import CreateTodo from "./components/CreateTodo";
import "./App.scss";

function App() {
    return (
        <div className="app-contents">
            <Router>
                <Routes>
                    <Route exact path="/" element={<ShowTodoList/>}/>
                    <Route exact path="/create-todo" element={<CreateTodo/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;