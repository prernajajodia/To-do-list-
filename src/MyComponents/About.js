import React from 'react'

export const About = () => {

    let Style = {

        backgroundColor: "#F1F4FFFF",
        minHeight: "90vh",
        fontfamily : "Comic Sans MS",
        height : "100%"
    }
    return (
            
        <div     style = {Style}>
            <div className="my-5 margin container" >
                <h4>About the web-app</h4>
                <p> - This web app is created by Prerna Jajodia using React Js framework with Bootstrap library.
                 <p> -  Hope you enjoy using it.</p>
              
               </p>
              </div>
            </div>



        )


}