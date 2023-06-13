import excited from '../../../assets/moods/excited.png'
import neutral from '../../../assets/moods/neutral.png'
import sad from '../../../assets/moods/sad.png'
import wink from '../../../assets/moods/wink.png'
import worried from '../../../assets/moods/worried.png'




function Calender() {
    return (
        <div>
            <div className='yellowBoxCal'>

                <div className="Mali MoodLine">
                    <div className='col padCal'>
                        <h6>Sun</h6>
                        <div className="circle moodIcon">
                            <img src={wink} alt="wink" className='moodIcon' />
                        </div>
                    </div>
                    <div className='col padCal'>
                        <h6>Mon</h6>
                        <div className="circle moodIcon">
                            <img src={neutral} alt="neutral look" className='moodIcon' />
                        </div>
                    </div>
                    <div className='col padCal'>
                        <h6>Tue</h6>
                        <div className="circle moodIcon">
                            <img src={sad} alt="sad look" className='moodIcon' />
                        </div>
                    </div>
                    <div className='col padCal'>
                        <h6>Wed</h6>
                        <div className="circle moodIcon">
                            <img src={worried} alt=":-)" className='moodIcon' />
                        </div>
                    </div>
                    <div className='col padCal'>
                        <h6>Thurs</h6>
                        <div className="circle moodIcon">
                            <img src={worried} alt=":-)" className='moodIcon' />
                        </div>
                    </div>
                    <div className='col padCal'>
                        <h6>Fri</h6>
                        <div className="circle moodIcon">
                            <img src={worried} alt=":-)" className='moodIcon' />
                        </div>
                    </div>
                    <div className='col padCal'>
                        <h6>Sat</h6>
                        <div className="circle moodIcon">
                            <img src={excited} alt=":-)" className='moodIcon' />
                        </div>
                    </div>
                </div>



                <div className="Mali MoodLine">
                    <div className='col padCal'>

                        <div className="circle moodIcon">
                            <img src={wink} alt=":-)" className='moodIcon' />
                        </div>
                    </div>
                    <div className='col padCal'>

                        <div className="circle moodIcon">
                            <img src={neutral} alt=":-)" className='moodIcon' />
                        </div>
                    </div>
                    <div className='col padCal'>

                        <div className="circle moodIcon">
                            <img src={wink} alt=":-)" className='moodIcon' />
                        </div>
                    </div>
                    <div className='col padCal'>

                        <div className="circle moodIcon">
                            <img src={neutral} alt=":-)" className='moodIcon' />
                        </div>
                    </div>
                    <div className='col padCal'>

                        <div className="circle moodIcon">
                            <img src={neutral} alt=":-)" className='moodIcon' />
                        </div>
                    </div>
                    <div className='col padCal'>

                        <div className="circle moodIcon">
                            <img src={wink} alt=":-)" className='moodIcon' />
                        </div>
                    </div>
                    <div className='col padCal'>

                        <div className="circle moodIcon">
                            <img src={excited} alt=":-)" className='moodIcon' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Calender