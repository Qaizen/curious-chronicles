import excited from '../../../assets/moods/excited.png'
import neutral from '../../../assets/moods/neutral.png'
import sad from '../../../assets/moods/sad.png'
import wink from '../../../assets/moods/wink.png'
import worried from '../../../assets/moods/worried.png'




function MoodLine() {
    return <div className="Mali MoodLine">
        <div className='col '>
            <h6>Sat</h6>
            <div className="circle moodIcon">
                <img src={excited} alt=":-)" className='moodIcon' />
            </div>
        </div>
        <div className='col'>
            <h6>Sun</h6>
            <div className="circle moodIcon">
                <img src={wink} alt=":-)" className='moodIcon' />
            </div>
        </div>
        <div className='col'>
            <h6>Mon</h6>
            <div className="circle moodIcon">
                <img src={neutral} alt=":-)" className='moodIcon' />
            </div>
        </div>
        <div className='col'>
            <h6>Tue</h6>
            <div className="circle moodIcon">
                <img src={sad} alt=":-)" className='moodIcon' />
            </div>
        </div>
        <div className='col'>
            <h6>Wed</h6>
            <div className="circle moodIcon">
                <img src={worried} alt=":-)" className='moodIcon' />
            </div>
        </div>
    </div>;
}

export default MoodLine