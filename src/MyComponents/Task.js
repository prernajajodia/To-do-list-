import React from 'react'

export const Task = ({ todos, onDelete }) => {
    let style = {

        color: "#ffff",
        background: "#70c299",
        border: "2px",
        boxShadow: "none"
    
    }

    return (

        <div>
                 <h4>
                       {todos.title}
                        <p>
                            {todos.desc}
                        </p>
                        <button className = 'btn btn-sm btn-danger'  style = {style} key = {todos.sno} onClick = {() => {onDelete(todos)}}>Delete</button>
                    </h4>
            
        </div>


    )



}