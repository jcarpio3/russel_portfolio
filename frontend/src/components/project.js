const Project = ({pData}) => {
    return (
        <div className="justify-center">
            <div className="group [perspective:1000px] justify-center">
                <div className="relative m-auto mb-10 md:h-[200px] md:w-[400px] h-[200px] w-[300px] rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0 h-full w-full text-white [backface-visibility:hidden]">
                        <h1>{pData.Title}</h1>
                        <img className="h-full w-full object-cover" src={pData.Image} alt={pData.Alt}/>
                    </div>
                    <a className="absolute inset-0 h-full w-full bg-black px-12 text-center text-slate-50 [transform:rotateY(180deg)] [backface-visibility:hidden] " href={pData.Github}>
                        <h1>back</h1>
                        <img src="https://i.redd.it/0z4z5l468dsa1.jpg"></img>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project