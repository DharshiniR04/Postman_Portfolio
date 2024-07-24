import React from "react";
import './Guide.css';

function Guide() {
    return (
        <div className="guide">
            <p> A portfolio that mimics the look and feel of Postman, the popular API testing tool, can be a unique and visually appealing way to showcase my skills as a MERN developer. Here's a step-by-step guide on how to use such a portfolio:</p>
            <h3>Step-by-Step Guide:</h3>
            <div className="api-detail">
                <li>Go to Workspace</li>
                <li>Enter the api url "http://api.dharshini.com/v1/" on the search bar manually or copy it from the clipboard from the workspace on the top right corner and paste it on the searchbar </li>
                <li>Now type the endpoint of your like</li>
                <li>Enter the Send key to get the Result from the endpoint</li>
            </div>
            <h3>End-Points:</h3>
            <div className="api-detail">
                <li>profile - To get a quick intro about me</li>
                <li>project - Shows all the project that i have done so far</li>
                <li>achievements - Show all the achievements that i have made</li>
                <li>techstack - Shows my Techstack</li>
                <li>contact - To reach me through social media</li>
                <li>help - To view all the available end-point</li>
            </div>
        </div>
    );
}

export default Guide;
