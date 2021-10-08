
import Sawo from "sawo"
import { React, useEffect } from "react";
import axios from "axios";

const API_KEY = "7db5557d-bd1b-4a77-8b14-0a09da4f233e";

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


export default function Login() {
    function LoginCallback(payload) {
        console.log(payload);
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/create_account`, { "payload": payload }).then(function (reponse) {
            setCookie("user-id", payload['user_id']);
        })
    }
    useEffect(() => {
        const sawoConfig = {
            onSuccess: LoginCallback, //required,
            //required, must be one of: 'email', 'phone_number_sms',
            identifierType: 'email',
            apiKey: API_KEY,
            containerID: "sawo-container",
        }

        let sawo = new Sawo(sawoConfig)
        sawo.showForm();


    }, [])

    return (

        <div className="container mt-5 pt-5" style={{ minHeight: "100vh" }}>
            <br />

            <div id="sawo-container" style={{ height: "450px", width: "450px" }}></div>
        </div>

    )
}
