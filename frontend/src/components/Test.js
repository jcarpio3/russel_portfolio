import React from 'react'

const Test = ({tProp}) => {
    return (
        <div className="project">
            <h1>{tProp.Title}</h1>
            <img src={tProp.Image} alt="img" />
            <br></br>
            <a href={tProp.Github}>Github</a>
        </div>
    )
}

export default Test