import { React, useEffect } from 'react'
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export default function Logout() {
    useEffect(() => {
        setCookie("user-id", "", 0)
        window.location.href = "#/";

    }, [])
    return (
        <div className="conatiner mt-5 pt-5" style={{ minHeight: "100vh" }}>

        </div>
    )
}
