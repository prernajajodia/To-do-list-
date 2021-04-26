import React from 'react'

export const Task = ({todos,onDelete}) => {

    return (

        <div>
                 <h4>
                       {todos.title}
                        <p>
                            {todos.desc}
                        </p>
                        <button className = 'btn btn-sm btn-danger' key = {todos.sno} onClick = {() => {onDelete(todos)}}>Delete</button>
                    </h4>
            
        </div>


    )



}