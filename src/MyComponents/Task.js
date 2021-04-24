import React from 'react'

export const Task = ({todos}) => {

    return (

        <div>
                 <h4>
                       {todos.title}
                        <p>
                            {todos.desc}
                        </p>
                        <button className = 'btn btn-sm btn-danger'>Delete</button>
                    </h4>
            
        </div>


    )



}