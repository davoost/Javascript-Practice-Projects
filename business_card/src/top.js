
import myPhoto from "./images/my-photo.png"

function Top(){
    return(
        <div>
            <img className = 'top' src={myPhoto} alt='my profile picture'></img>
        </div>
    )
}

export default Top