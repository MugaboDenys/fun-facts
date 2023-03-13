import React from "react"


export default function Navbar({darkMode, toggleDarkMode}) {
    return (
         <nav 
            className={`${darkMode ? "dark": ""} duration-500`}
        >
            <img 
                className="nav--logo_icon"
                src="/logo192.png"
                alt=""
            />
            <h3 className="nav--logo_text">ReactFacts</h3>
            
            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider duration-500"
                    onClick={toggleDarkMode}
                >
                    <div className="toggler--slider--circle "></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}