import Project from "./project"
import Icon from "./icon"

//This was just used to test components but its the base outline for how projects will be shown
// const TestProject = { //Testing Props 
//     "Title" : "Dynamic Speed Limit Sign",
//     "Image" : "https://lh3.googleusercontent.com/RUg9YJuY2cPjh5znR5ZLqLJIBrm1CM2JuwCS1XP6g31ZDPa_NR--jR0JAum5qDbl2g5UKgBwM4SHSuyiWqjyd7VhBUI=s1280-w1280-h800",
//     "Github" : "https://github.com/"
// }

 
const listProject = [
    {
        "Title" : " 1",
        "Image" : "https://sao-p.net/assets/img/top/img_kv02.jpg",
        "Github" : "https://github.com/"
    },
    {
        "Title" : " 2",
        "Image" : "https://lh3.googleusercontent.com/RUg9YJuY2cPjh5znR5ZLqLJIBrm1CM2JuwCS1XP6g31ZDPa_NR--jR0JAum5qDbl2g5UKgBwM4SHSuyiWqjyd7VhBUI=s1280-w1280-h800",
        "Github" : "https://github.com/"
    },
    {
        "Title" : " 3",
        "Image" : "https://uploads.dailydot.com/2024/09/roblox-face-meme.jpg?q=65&auto=format&w=1600&ar=2:1&fit=crop",
        "Github" : "https://github.com/"
    },
    {
        "Title" : " 4",
        "Image" : "https://pngimg.com/d/spongebob_PNG32.png",
        "Desc" : "Hello Everyone my name is markiplier This was Created with love",
        "Github" : "https://github.com/"
    },
    {
        "Title" : " 5",
        "Image" : "https://i.ytimg.com/vi/DmW01hHGXgA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDLK37cKRHuQ6QBhCM1j4a-Mi0P-w",
        "Github" : "https://github.com/"
    },
    {
        "Title" : " 6",
        "Image" : "https://i.pinimg.com/736x/b2/23/00/b22300b7185af4b6f6710d02901d34a1.jpg",
        "Github" : "https://github.com/"
    }
]

const Test = [{
    "skill" : "Goku",
    "icon" : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/115px-Python-logo-notext.svg.png",
    "alt" : "Gay"
},
{
    "skill" : "Goku",
    "icon" : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/256px-Logo_C_sharp.svg.png?20221121173824",
    "alt" : "Gay"
}
]
const MainPage = () => {
    return (
        <div className="mPage">
            <div>
                <div className="">
                    <h1>Hi!</h1>
                    <h3>I'm Russel</h3>
                    <h3>A Full Stack Developer</h3>
                </div>

                <div className="mAbout">
                    <h3>About Me keep this short btw</h3>
                </div>

                <div className="mSkills">
                    <h1>---------------------------------</h1>
                    <h3>Skills </h3>
                    <div className="inline-flex flex-wrap md:ml-[25%] md:mr-[25%] m-auto">
                        <Icon iData={Test[0]}/>
                        <Icon iData={Test[1]}/>
                    </div>
                </div>

                <div className="mProjects">
                    <h1>---------------------------------</h1>
                    <h3>Projects</h3>
                    <div className="inline-flex flex-wrap md:ml-[25%] md:mr-[25%] m-auto"> 
                        {/* When implementing a component with a variable just do <Component variable={Foo}/> */}
                        <Project pData={listProject[0]}/> 
                        <Project pData={listProject[1]}/>
                        <Project pData={listProject[2]}/>
                        <Project pData={listProject[3]}/>
                        <Project pData={listProject[4]}/>
                        <Project pData={listProject[5]}/> 
                    </div>
                </div>

                <div className="mExp">
                    <h1>---------------------------------</h1> {/** These should shine when hovered over them */}
                    <h3>Education/Experience</h3>
                </div>

                <div className="mContact">
                    <h1>---------------------------------</h1>
                    <h3>Contacts</h3>
                </div>
            </div>
        </div>
    )
}

export default MainPage