
import twitterIcon from "./images/Twitter-Icon.png"
import facebookIcon from "./images/Facebook-Icon.png"
import githubIcon from "./images/GitHub-Icon.png"
import instagramIcon from "./images/Instagram-Icon.png"

function Links(){
    return(
        <div className='links'>
            <img className='first-link' src={twitterIcon} alt='an icon'></img>
            <img className='second-link' src={facebookIcon} alt='an icon'></img>
            <img className='third-link' src={githubIcon} alt='an icon'></img>
            <img className='fourth-link' src={instagramIcon} alt='an icon'></img>
        </div>
    )
}

export default Links