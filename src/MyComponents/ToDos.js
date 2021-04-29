import React from 'react';
import { Task } from './Task';

    export const ToDos = (props) => {
        let myStyle = {
            minHeight: "70vh",
            margin: "35px auto",
            // backgroundColor: "#fad0c3"
        }
    return (
        <div className = "container" style = {myStyle}>
                   <h3 className = "text-center"> TO-DOs LIST </h3>
            {props.todoData.length === 0 ? "No ToDos to display!" :
                props.todoData.map((ele) => {
                    return (
                        <div>
                            <Task todos={ele} onDelete={props.onDelete} /><hr />
                        </div>
                        
                    )
                    
                })}
           
        </div>



    )

}