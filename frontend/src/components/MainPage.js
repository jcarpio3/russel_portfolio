import Project from "./project"
import Icon from "./icon"
import ProData from '../assets/data/projData.json'
import IcoData from '../assets/data/skiData.json'

//This was just used to test components but its the base outline for how projects will be shown
// const TestProject = { //Testing Props 
//     "Title" : "Dynamic Speed Limit Sign",
//     "Image" : "https://lh3.googleusercontent.com/RUg9YJuY2cPjh5znR5ZLqLJIBrm1CM2JuwCS1XP6g31ZDPa_NR--jR0JAum5qDbl2g5UKgBwM4SHSuyiWqjyd7VhBUI=s1280-w1280-h800",
//     "Github" : "https://github.com/"
// }

const MainPage = () => {
    return (
        <div className="mPage">
            <div>
                <div className="mTitle">
                    <ul className="datalines">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>

                <div className="mAbout">
                    <h3>About Me keep this short btw</h3>
                </div>

                <div className="mSkills">
                    <hr/>
                    <h3>Skills</h3>
                    <div className="inline-flex flex-wrap md:ml-[25%] md:mr-[25%] m-auto">
                        {Array.from({ length: IcoData.length}).map((n,index) => (
                            <Icon iData={IcoData[index]}/>
                        ))}
                    </div>
                </div>

                <div className="mProjects">
                    <hr/>
                    <h3>Projects</h3>
                    <div className="inline-flex flex-wrap md:ml-[25%] md:mr-[25%] m-auto"> 
                        {/* When implementing a component with a variable just do <Component variable={Foo}/> */}
                        {Array.from({ length: ProData.length}).map((n,index) => (
                            <Project pData={ProData[index]}/>
                        ))}
                    </div>
                </div>

                <div className="mExp">
                    <hr/>
                    <h3>Education/Experience</h3>
                </div>

                <div className="mContact">
                    <hr/>
                    <h3>Contacts</h3>
                </div>
            </div>
        </div>
    )
}

export default MainPage