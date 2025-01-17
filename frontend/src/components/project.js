const Project = ({pData}) => {
    return (
        <a className="max-w-fit object-scale-down hover:bg-white m-auto" href={pData.Github}>
            <h1>{pData.Title}</h1>
            <img src={pData.Image} width="300" height="250" alt="img" />
            <br></br>
            <a href={pData.Github}>Github</a>
        </a>
    )
}

export default Project