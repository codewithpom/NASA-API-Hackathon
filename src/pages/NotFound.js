import React from 'react'
import { Link } from "react-router-dom";
export default function NotFound() {
    return (
        <div className="container">
            <br />
            <br />
            <div style={{ textAlign: "center" }}>
                <h1>
                    404 Page not found
                </h1>
                <p>
                    You have reached the end of <b>SPACE</b> but you can return back to <b>Earth</b> by <Link to="/"> Home </Link>
                </p>
            </div>
        </div>

    )
}
