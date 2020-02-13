import React from 'react';
import {Todo} from './Todo'


export class TodoList extends React.Component {


    render() {
        const todoList = this.props.todoList.map((todo, i) => {
            return (
                <div key={i}>
                    <Todo description={todo.description} dueDate={todo.dueDate} status={todo.status} responsible={todo.responsible}/>
                </div>
                
            );
        });

        return (
            <div className="cardContainer">
                {todoList}
            </div>  
        );
    }   
}