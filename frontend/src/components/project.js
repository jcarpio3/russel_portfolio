const Project = ({pData}) => {
    return (
        <a className="justify-center m-auto" href={pData.Github}>
            <div className="group [perspective:1000px] justify-center ">
                <div className="relative mb-10 md:h-[200px] md:w-[400px] h-[200px] w-[300px] transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0 h-full w-full text-white text-center [backface-visibility:hidden]">
                        <img className="pfImage" src={pData.Image} alt={pData.Alt}/>
                        <h2 className="pTitle">{pData.Title}</h2>
                    </div>
                    <div className="absolute inset-0 h-full w-full text-white text-center [transform:rotateY(180deg)] [backface-visibility:hidden]" href={pData.Github}>
                        <img className="pbImage" src={pData.Image} alt={pData.Alt}/>
                        <h2 className="pTitle">{pData.Title}</h2>
                        <br></br>
                        <p className="text-xs">{pData.Desc}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default Project