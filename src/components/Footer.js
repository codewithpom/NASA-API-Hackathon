import React from 'react';
// import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <footer>
                <div className="container-fluid">
                    <div className="row bg-light border-top">
                        <div className="col-10 offset-1 py-3">
                            <div className="nav d-flex justify-content-between align-items-center">
                                <div className="col-12 col-md-6 justify-content-center justify-content-md-start text-center text-md-start">
                                    Design and Developed by Space Exploration
                                    <p className="text-muted mb-0">Illustrations By <a className="text-reset" href="https://storyset.com/">Storyset</a></p>
                                </div>
                                <div className="col-12 col-md-6 items d-flex justify-content-center justify-content-md-end text-secondary">
                                    <div className="nav-item text-reset">
                                        <a className="nav-link text-reset" href={"https://api.nasa.gov"} target={"_blank"} rel="noreferrer">Home</a>
                                    </div>
                                    <div className="nav-item">
                                        <a className="nav-link text-reset" href={"https://api.nasa.gov"} target={"_blank"} rel="noreferrer">Term Of Use</a>
                                    </div>
                                    <div className="nav-item">
                                        <a className="nav-link text-reset" href={"https://api.nasa.gov"} target={"_blank"} rel="noreferrer">Privacy & Policy</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}