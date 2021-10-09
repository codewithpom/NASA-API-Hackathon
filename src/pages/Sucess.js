import React from 'react'

export default function Sucess() {
    function redirect() {
        const payloads_as_string = window.location.href.slice(window.location.href.indexOf("?"));
        const payloads = new URLSearchParams(payloads_as_string);



    }
    return (
        <div className="container mt-4 pt-5" style={{ minHeight: "100vh" }}>
            <h1 className="text-center">
                <span style={{ color: "orange", }}>
                    You are Now Logged in
                </span>
            </h1>
            <h3 className="text-center">
                Now you are ready to explore the <b>SPACE</b>, have fun.
            </h3>

        </div>
    )
}
