
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
            setCookie("user-id", payload['user_id'], 30);
            window.location.href = "#/sucess";
        })
    }
    useEffect(() => {
        const sawoConfigEmail = {
            onSuccess: LoginCallback, //required,
            //required, must be one of: 'email', 'phone_number_sms',
            identifierType: 'email',
            apiKey: API_KEY,
            containerID: "sawo-container-email",
        }

        const sawoConfigNumber = {
            onSuccess: LoginCallback, //required,
            //required, must be one of: 'email', 'phone_number_sms',
            identifierType: 'phone_number_sms',
            apiKey: API_KEY,
            containerID: "sawo-container-phone",
        }

        const sawoEmail = new Sawo(sawoConfigEmail);
        const sawoNumber = new Sawo(sawoConfigNumber);
        sawoEmail.showForm();
        sawoNumber.showForm();


    }, [])

    function change_to_number() {
        document.getElementById("sawo-container-email").style.display = "none";
        document.getElementById("sawo-container-phone").style.display = "";
        document.getElementById("number").style.display = "none";
        document.getElementById("email").style.display = "";

    }

    function change_to_email() {
        document.getElementById("sawo-container-email").style.display = "";
        document.getElementById("sawo-container-phone").style.display = "none";
        document.getElementById("number").style.display = "";
        document.getElementById("email").style.display = "none";

    }

    return (

        <div className="container mt-5 pt-5" style={{ minHeight: "100vh" }}>
            <br />
            <div style={{ textAlign: "center" }}>
                <div id="sawo-container-email" style={{ height: "450px", width: "450px" }}></div>
                <div id="sawo-container-phone" style={{ height: "450px", width: "450px", display: "none" }}></div>
            </div>

            <div style={{ textAlign: "center" }}>
                <button className="btn btn-warning" id="email" style={{ display: "none" }} onClick={change_to_email}>
                    Verify by email
                </button>
                <button className="btn btn-warning" id="number" onClick={change_to_number}>
                    Verify by number
                </button>
            </div>

        </div>

    )
}
