import React from 'react';
import ToDoList from './ToDoList/toDoListContainer';
import Comments from './Comments/commentsContainer';
import '../style/app.css';
import '../style/to-do-list.css';
import '../style/comments.css';

export const App = () =>(
    <div className="app-wrapper">
        <aside className="left-side">
            <h3>DAIRY APP</h3>
            <p>Comment with no sense</p>
        </aside>
        <ToDoList/>
        <Comments/>
    </div>
);