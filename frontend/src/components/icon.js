const Icon = ({iData}) => {
    return (
        <div className="md:w-20 md:h-20 m-auto hover:animate-Ascend">
            <img className="object-scale-down md:h-10 md:w-10 md:m-auto m-2 w-8 h-8"src={iData.icon} alt={iData.alt}></img>
            <h1 className="text-center elative z-30 md:text-base text-xs/tight">{iData.skill}</h1>
        </div>
    )
}

export default Icon