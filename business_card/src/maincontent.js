import emailIcon from "./images/email-icon.png"
import linkedinIcon from "./images/LinkedIn-Icon.png"

function MainContent(){
    return(
        <div className='main-content'>
            <h1>David Oosthuizen</h1>
            <h3>Frontend Developer</h3>
            <h4>DavidOosthuizen.com</h4>
            <div className='buttons'>
            <button src={emailIcon} className='email-button'>Email</button>
            <button src={linkedinIcon} className='linkedin-button'>LinkedIn</button>
            </div>
            <h2>About</h2>
            <p>Some content about me</p>
            <h2>Interests</h2>
            <p>Some content about my interests</p>
        </div>
    )
}

export default MainContent