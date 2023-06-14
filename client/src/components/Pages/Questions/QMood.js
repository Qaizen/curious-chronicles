import excited from '../../../assets/moods/excited.png'
import wink from '../../../assets/moods/wink.png'
import neutral from '../../../assets/moods/neutral.png'
import worried from '../../../assets/moods/worried.png'
import sad from '../../../assets/moods/sad.png'


function QCombined() {
    return (
        <div>

            <div className='BackgroundQ Green' >
                <div className='QWords Mali'>
                    <h1>Hi! Kid,</h1>

                    <h1>How was your day?</h1>
                </div>
                <div className='row'>
                    <a href="/QOne" className="BigMood">

                        <div className=" moodBigIcon">
                            <img src={excited} alt=":-)" className='moodBigIcon' />
                        </div>
                    </a>

                    <a href="/QOne" className="BigMood">
                        <div className=" moodBigIcon">
                            <img src={wink} alt=":-)" className='moodBigIcon' />
                        </div>

                    </a>
                    <a href="/QOne" className="BigMood">
                        <div className=" moodBigIcon">
                            <img src={neutral} alt=":-)" className='moodBigIcon' />
                        </div>

                    </a>
                    <a href="/QOne" className="BigMood">
                        <div className=" moodBigIcon">
                            <img src={worried} alt=":-)" className='moodBigIcon' />
                        </div>

                    </a>
                    <a href="/QOne" className="BigMood">
                        <div className=" moodBigIcon">
                            <img src={sad} alt=":-)" className='moodBigIcon' />
                        </div>

                    </a>


                </div>
            </div>
            <div className='BackgroundQ Blue' >
                <div className=" QOne">

                    <div className='QWords Mali'>

                        <h1>Oh! Why do you feel that way? </h1>
                    </div>
                    <textarea className="QTextarea">

                    </textarea>
                    <a href="/QFinished">
                        <button className="BtnRed right">All Done!</button>
                    </a>
                </div>
            </div>
            <div className='BackgroundQ col ' >

                <img className="imgBook" src='./Photos/thumbs-up.png' alt="A thumbs up" />

                <div className='QWords Mali'>

                    <h1>Hooray!</h1>
                    <h1>You finished your first entry! </h1>
                </div>
                <a href="/Home">
                    <button className="BtnRed right">Go Home!</button>
                </a>
            </div>
        </div>
    )
}

export default QCombined