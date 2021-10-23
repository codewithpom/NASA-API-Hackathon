import { React, useEffect } from 'react'

export default function Sucess() {
    function redirect() {
        const payloads_as_string = window.location.href.slice(window.location.href.indexOf("?"));
        const redirect_page = new URLSearchParams(payloads_as_string).get("redirect");
        if (redirect_page === null) {
            console.log("Do not go anywhere");
        } else {
            console.log("Ok so you can now go");
            console.log(redirect_page);
            setTimeout(() => {
                window.location = /.*redirect_page=([^&]*).*/.exec(document.location.href)[1];


            }, 5000)
        }

    }
    useEffect(() => {
        redirect()

    }, [])
    return (
        <div className="container mt-4 pt-5" style={{ minHeight: "100vh" }}>
            <h1 className="text-center">
                <span className="base-color">
                    You are Now Logged in
                </span>
            </h1>
            <h3 className="text-center">
                Now you are ready to explore the <b className="base-color">SPACE</b>, have fun.
            </h3>
            <br />
            <h3>
                If you have come here from a <b className="base-color"> page </b> of this <b className="base-color"> site </b> you will be <b className="base-color">redirected</b> to that page in <b className="base-color"> 5 seconds.</b>
            </h3>

        </div>
    )
}
