import Project from "./project"

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
        "Github" : "https://github.com/"
    },
    {
        "Title" : " 5",
        "Image" : "https://lh3.googleusercontent.com/RUg9YJuY2cPjh5znR5ZLqLJIBrm1CM2JuwCS1XP6g31ZDPa_NR--jR0JAum5qDbl2g5UKgBwM4SHSuyiWqjyd7VhBUI=s1280-w1280-h800",
        "Github" : "https://github.com/"
    },
    {
        "Title" : " 6",
        "Image" : "https://lh3.googleusercontent.com/RUg9YJuY2cPjh5znR5ZLqLJIBrm1CM2JuwCS1XP6g31ZDPa_NR--jR0JAum5qDbl2g5UKgBwM4SHSuyiWqjyd7VhBUI=s1280-w1280-h800",
        "Github" : "https://github.com/"
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
                    <h1>---------------------------------</h1>
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