import React from 'react';
import { Task } from './Task';

export const ToDos = (props) => {

    return (
        <div className = 'container'>
                   <h3 className = "text-center my-3"> TO-DOs LIST </h3>
                {/* {console.log(props.todoData)} */}

                {props.todoData.map((ele) => {
                            return   <Task todos = {ele} />

                })}
            
        </div>



    )

}