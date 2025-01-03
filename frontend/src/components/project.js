const Project = ({pData}) => {
    return (
        <div className="max-w-fit hover:bg-white m-auto">
            <h1>{pData.Title}</h1>
            <img src={pData.Image} width="300" height="250" alt="img" />
            <br></br>
            <a href={pData.Github}>Github</a>
        </div>
    )
}

export default Project