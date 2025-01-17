import Project from "./project"


//This was just used to test components but its the base outline for how projects will be shown
const TestProject = { //Testing Props 
    "Title" : "Dynamic Speed Limit Sign",
    "Image" : "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/800px-SpongeBob_SquarePants_character.svg.png",
    "Github" : "https://github.com/"
}

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
                    <div className="inline-flex flex-wrap ml-[25%] mr-[25%] ">
                        {/* When implementing a component with a variable just do <Component variable={Foo}/> */}
                        <Project pData={TestProject}/> 
                        <Project pData={TestProject}/>
                        <Project pData={TestProject}/>
                        <Project pData={TestProject}/>
                        <Project pData={TestProject}/>
                        <Project pData={TestProject}/>
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