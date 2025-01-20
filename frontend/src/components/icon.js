const Icon = ({iData}) => {
    return (
        <div className="w-20 h-20">
            <img className="object-cover"src={iData.icon} alt={iData.alt}></img>
            <h1 className="text-center text-white relative z-30 -inset-y-1/4">{iData.skill}</h1>
        </div>
    )
}

export default Icon