const Icon = ({iData}) => {
    return (
        <div className="md:w-20 md:h-20 m-auto">
            <img className="object-scale-down md:h-10 md:w-10 m-auto w-5 h-5"src={iData.icon} alt={iData.alt}></img>
            <h1 className="text-center text-white relative z-30 ">{iData.skill}</h1>
        </div>
    )
}

export default Icon