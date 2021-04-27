import React from 'react';
import { Task } from './Task';

    export const ToDos = (props) => {
        let myStyle = {

            minHeight: "70vh",
            margin : "35px auto"
        }
    return (
        <div className = 'container' style = {myStyle}>
                   <h3 className = "text-center my-3 "> TO-DOs LIST </h3>
                {/* {console.log(props.todoData)} */}
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