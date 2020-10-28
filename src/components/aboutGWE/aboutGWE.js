import React from react;

class AboutGWE extends React.Component{
    render(){
        return(
            <button className="splashAboutGWE">
                <a href="https://www.theglobalwarmingexpress.org/" 
                    id="homeLink" 
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    About GWE
                </a>
            </button>
        )
    }
}

export default AboutGWE;