import React, {useState} from 'react';

export const AddToDo = ({addToDo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert('Title or description cannot be blank!')
        }
        else {
            addToDo(title, desc)
            setTitle("")
            setDesc("")
        }
    }
    let FormStyle = {

        color: "black",
        padding: "10px",
        width : "100%",
        fontFamily: "Arial",
        textalign: "center"
    }

            return (

                <div className="container my-4" onSubmit = {submit} >
                    <h3  style = {FormStyle}>
                        Add a To-Do
                    </h3>
                        <form>
                 <div className="mb-3">
                 <label htmlFor="title" className="form-label">To-Do Title</label>
                     <input type="text" value = {title} onChange={(e)=> {setTitle(e.target.value)}} className="form-control" id="title" aria-describedby = 'emailHelp'/>
                <div className="mb-3">
                        <label htmlFor="desc" className="desc">Description</label>
                  <input type="text" value = {desc} onChange={(e)=> {setDesc(e.target.value)}} className="form-control" id="desc" />
                      </div>             
                     <button type="submit" className="btn btn-sm btn-success">Add To-Do</button>
                        </div>
                    </form>

                    </div>
            )


}