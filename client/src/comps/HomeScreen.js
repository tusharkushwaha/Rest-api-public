import React from 'react'
import Button from "react-bootstrap/Button"

function HomeScreen() {
    const copyToClipboard = (copylink, copybutton) => {
        var copyText = document.getElementById(`${copylink}`);
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        document.getElementById(`${copybutton}`).innerHTML = "Copied"

    }
    return (
        <>
            <div id="title">
                <div>
                    A Fake Rest API
                </div>
                <span>
                    GET, POST, PUT and all you need to get started.
                </span>
                <span>
                    <a href="#GETcome"><Button variant="warning" size="lg">Get Started</Button></a>
                </span>
            </div>
            <div className="request">
                <div className="requesttitle" id="GETcome">
                    GET
                </div>
                <span>
                    <input type="text" value="https://restapi.kushwahatushar.tech/restapi/get/users/<no of users objects>" readOnly id="getRequest" />
                    <div><Button variant="primary" onClick={() => copyToClipboard(`getRequest`, `getbutton`)} id="getbutton">Copy</Button></div>
                </span>
            </div>
            <div className="request">
                <div className="requesttitle">
                    POST
                </div>
                <span>
                    <input type="text" value="https://restapi.kushwahatushar.tech/restapi/post/users" readOnly id="postRequest" />
                    <div><Button variant="primary" onClick={() => copyToClipboard(`postRequest`, `postbutton`)} id="postbutton">Copy</Button></div>
                </span>
            </div>
            <div className="request">
                <div className="requesttitle">
                    PATCH
                </div>
                <span>
                    <input type="text" value="https://restapi.kushwahatushar.tech/restapi/patch/users/<_id>" readOnly id="patchRequest" />
                    <div><Button variant="primary" onClick={() => copyToClipboard(`patchRequest`, `patchbutton`)} id="patchbutton">Copy</Button></div>
                </span>
            </div>
            <div className="request">
                <div className="requesttitle">
                    PUT
                </div>
                <span>
                    <input type="text" value="https://restapi.kushwahatushar.tech/restapi/put/users/<_id>" readOnly id="putRequest" />
                    <div><Button variant="primary" onClick={() => copyToClipboard(`putRequest`, `putbutton`)} id="putbutton">Copy</Button></div>
                </span>
            </div>
            <div className="request">
                <div className="requesttitle">
                    DELETE
                </div>
                <span>
                    <input type="text" value="https://restapi.kushwahatushar.tech/restapi/delete/users/<_id>" readOnly id="deleteRequest" />
                    <div><Button variant="primary" onClick={() => copyToClipboard(`deleteRequest`, `deletebutton`)} id="deletebutton">Copy</Button></div>
                </span>
            </div>
            <div id="footer">
                <div>
                    <a href="https://kushwahatushar.tech" rel="noreferrer" target="_blank">&#169; Tushar Kushwaha</a>
                </div>
                <div>
                    <a href="https://kushwahatushar.tech" target="_blank" rel="noreferrer"><img src="/images/website.png" alt="website" /></a>
                    <a href="https://github.com/tusharkushwaha" target="_blank" rel="noreferrer"><img src="/images/github.png" alt="github" /></a>
                    <a href="https://in.linkedin.com/in/tusharkushwaha" target="_blank" rel="noreferrer"><img src="/images/linkedin.png" alt="linkedin" /></a>
                </div>
            </div>
        </>
    )
}

export default HomeScreen
