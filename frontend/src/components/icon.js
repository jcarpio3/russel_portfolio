const Icon = ({iData}) => {
    return (
        <div className="md:w-20 md:h-20 m-auto">
            <img className="object-scale-down md:h-12 md:w-12 m-auto w-10 h-10"src={iData.icon} alt={iData.alt}></img>
            <h1 className="text-center text-white relative z-30 ">{iData.skill}</h1>
        </div>
    )
}

export default Icon