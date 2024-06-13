import React, { useEffect, useState } from "react";
import Http from '../../assets/http.png';
import './Main.css';
import Load from '../../assets/load.png';
import ProjectData from '../../JSON/project.json';
import { FaClipboard } from 'react-icons/fa';
import Contact from "../Contact/Contact";

function Main() {

    const [inputValue, setInputValue] = useState("Request");
    const [val, setVal] = useState("");
    const [copy, setCopy] = useState(false);
    const [toast, setToast] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setToast(false);
        }, 2000);
    
        return () => clearTimeout(timer);
      }, []);
    
    const handleForm = async (e) => {
        e.preventDefault();
        const data = {
            search: e.target.elements.search.value
        }
        let strings = (data.search).split("/");
        setVal(strings[strings.length - 1]);
        if (data.search === "")
            setInputValue("Untitled Request");
        else
            setInputValue(strings[strings.length - 1]);
    }

    const handlecopy = () => {
        const txt = "http://api.dharshini.com/v1/";
        navigator.clipboard.writeText(txt).then(() => {
            setCopy(true);
            setTimeout(() => setCopy(false), 2000);
        }).catch(() => {
            alert("can't copy , please try again later");
        })
    }

    const renderContent = () => {
        switch (val) {
            case 'project':
                return "Project";
            case 'techstack':
                return "Techstack";
            case 'achievements':
                return "Achievements";
            case 'profile':
                return "Profile";
            case 'help':
                return "Help";
            case 'contact':
                return "Contact";
            default:
                return;
        }
    };

    return (
        <>
            <div className="Main">
                <div className="search">
                    <img src={Http} alt="http" className="http"></img>
                    <p className="input">{inputValue}</p>
                    {!copy && <FaClipboard size={20} color="black" className='clipboard' onClick={handlecopy} />}
                    {copy && <FaClipboard size={20} color="green" className='clipboard' onClick={handlecopy} />}
                </div>
                <div className="data">
                    <form onSubmit={handleForm}>
                        <select>
                            <option>GET</option>
                            <option>POST</option>
                        </select>
                        <input type="text" name="search" className="input search-input" />
                        <button type="submit">SEND</button>
                    </form>
                </div>
                <div className="view">
                    {renderContent() === "Project" && Object.keys(ProjectData[renderContent()]).map(key => (
                        <div key={key}>
                            <h2>{ProjectData[renderContent()][key].name}</h2>
                            <p><span>Description: </span>{ProjectData[renderContent()][key].description}</p>
                            <p><span>Status:</span> {ProjectData[renderContent()][key].status}</p>
                            <p><span>Techstack:</span> {ProjectData[renderContent()][key].Techstack}</p>
                            <p><span>Link:</span> <a href={ProjectData[renderContent()][key].Link}>Demo</a> </p>
                        </div>
                    ))}
                    {renderContent() === "Techstack" && Object.keys(ProjectData[renderContent()]).map(key => (
                        <div key={key}>
                            <h2>{ProjectData[renderContent()][key].name}</h2>
                            <p><span>Projects:</span> {ProjectData[renderContent()][key].project}</p>
                            <p><span>proficiency:</span> {ProjectData[renderContent()][key].proficiency}</p>
                        </div>
                    ))}
                    {renderContent() === "Achievements" && Object.keys(ProjectData[renderContent()]).map(key => (
                        <div key={key}>
                            <li>{ProjectData[renderContent()][key].data}</li>
                        </div>
                    ))}
                    {renderContent() === "Profile" && Object.keys(ProjectData[renderContent()]).map(key => (
                        <div key={key}>
                            <h2>Short Intro</h2>
                            <p className="intro">{ProjectData[renderContent()][key].profile}</p>
                            <p><span>Github:</span> <a href={ProjectData[renderContent()][key].github}>Check it out here!</a> </p>
                            <p><span>Linkedin:</span> <a href={ProjectData[renderContent()][key].linkedin}>Check it out here!</a> </p>
                            <h2>Coding Platform</h2>
                            <p><span>Leetcode:</span> <a href={ProjectData[renderContent()][key].leetcode}>Check it out here!</a> </p>
                            <p><span>Skillrack:</span> <a href={ProjectData[renderContent()][key].skillrack}>Check it out here!</a> </p>

                        </div>
                    ))}
                    {renderContent() === "Help" &&
                        <div>
                            <li>profile - To get a quick intro about me</li>
                            <li>project - Shows all the project that i have done so far</li>
                            <li>achievements - Show all the achievements that i have made</li>
                            <li>techstack - Shows my Techstack</li>
                            <li>contact - To reach me through social media</li>
                            <li>help - To view all the available end-point</li>
                        </div>
                    }
                    {renderContent() === "Contact" &&
                        <Contact />
                    }
                    {!renderContent() &&
                        <>
                            <img src={Load} alt="load" className="load"></img>
                            {toast && (<p className="toast">For More Info - Navigate to <bold>Guide</bold></p>)}
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default Main;