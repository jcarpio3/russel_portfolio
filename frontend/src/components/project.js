import React from 'react'

const Project = ({pData}) => {
    return (
        <div className="bg-black">
            <h1>{pData.Title}</h1>
            <img src={pData.Image} alt="img" />
            <br></br>
            <a href={pData.Github}>Github</a>
        </div>
    )
}

export default Project