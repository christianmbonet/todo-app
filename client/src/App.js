import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { ShowTodoList } from "./components/showTodoList";
import { CreateTodo } from "./components/createTodo";
import "./App.scss";

export function App() {
    return (
        <div className="app-contents">
            <Router>
                <Route exact path="/" component={ShowTodoList} />
                <Route path="/create-todo" component={CreateTodo} />
            </Router>
        </div>
    );
}

export default App;