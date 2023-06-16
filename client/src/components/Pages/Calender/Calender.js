import excited from '../../../assets/moods/excited.png'
import neutral from '../../../assets/moods/neutral.png'
import sad from '../../../assets/moods/sad.png'
import wink from '../../../assets/moods/wink.png'
import worried from '../../../assets/moods/worried.png'




function Calender() {
    return (
        <div className='backgroundCal'>
            <h1 className="parTitle Mali">January</h1>
            <div className='rowCal'>
                <div className='colCal'>

                    <div className='weekDayTop'>
                        <h6>Sun</h6>
                        <h6>Mon</h6>
                        <h6>Tue</h6>
                        <h6>Wed</h6>
                        <h6>Thurs</h6>
                        <h6>Fri</h6>
                        <h6>Sat</h6>

                    </div>
                    <div className="calender">

                        <div className=" MoodLineCal">

                            <div className="moodIconCalGrey">
                                <img src={wink} alt="wink" className='moodIcon' />
                            </div>

                            <div className="moodIconCalGrey">
                                <img src={neutral} alt="neutral look" className='moodIcon' />

                            </div>

                            <div className="moodIconCalGrey">
                                <img src={sad} alt="sad look" className='moodIcon' />

                            </div>

                            <div className="moodIconCal">
                                <img src={wink} alt="wink" className='moodIcon' />
                            </div>


                            <div className="moodIconCal">
                                <img src={wink} alt="wink" className='moodIcon' />
                            </div>

                            <div className="moodIconCal">
                                <img src={worried} alt=":-)" className='moodIcon' />
                            </div>


                            <div className="moodIconCal">
                                <img src={excited} alt=":-)" className='moodIcon' />
                            </div>
                        </div>
                        <div className=" MoodLineCal">

                            <div className="moodIconCal">
                                <img src={wink} alt="wink" className='moodIcon' />
                            </div>


                            <div className="moodIconCal">
                                <img src={wink} alt="wink" className='moodIcon' />
                            </div>

                            <div className="moodIconCal">
                                <img src={wink} alt="wink" className='moodIcon' />
                            </div>

                            <div className="moodIconCal">
                                <img src={wink} alt="wink" className='moodIcon' />
                            </div>

                            <div className="moodIconCal">
                                <img src={worried} alt=":-)" className='moodIcon' />

                            </div>
                            <div className="moodIconCal">
                                <img src={excited} alt=":-)" className='moodIcon' />
                            </div>


                            <div className="moodIconCal">
                                <img src={excited} alt=":-)" className='moodIcon' />
                            </div>
                        </div>

                        <div className=" MoodLineCal">

                            <div className="moodIconCal">
                                <img src={wink} alt="wink" className='moodIcon' />
                            </div>

                            <div className="moodIconCal">
                                <img src={neutral} alt="neutral look" className='moodIcon' />

                            </div>

                            <div className="moodIconCal">
                                <img src={sad} alt="sad look" className='moodIcon' />

                            </div>
                            <div className="moodIconCal">
                                <img src={worried} alt=":-)" className='moodIcon' />

                            </div>
                            <div className="moodIconCal">
                                <img src={neutral} alt="neutral look" className='moodIcon' />

                            </div>
                            <div className="moodIconCal">
                                <img src={neutral} alt="neutral look" className='moodIcon' />

                            </div>

                            <div className="moodIconCal">
                                <img src={wink} alt="wink" className='moodIcon' />
                            </div>

                        </div>

                        <div className=" MoodLineCal">

                            <div className="moodIconCal">
                                <img src={wink} alt="wink" className='moodIcon' />
                            </div>

                            <div className="moodIconCal">
                                <img src={neutral} alt="neutral look" className='moodIcon' />

                            </div>

                            <div className="moodIconCal">
                                <img src={sad} alt="sad look" className='moodIcon' />

                            </div>
                            <div className="moodIconCalGrey">
                                <img src={worried} alt=":-)" className='moodIcon' />

                            </div>

                            <div className="moodIconCalGrey">
                                <img src={worried} alt=":-)" className='moodIcon' />

                            </div>

                            <div className="moodIconCalGrey">
                                <img src={worried} alt=":-)" className='moodIcon' />
                            </div>


                            <div className="moodIconCalGrey">
                                <img src={excited} alt=":-)" className='moodIcon' />
                            </div>
                        </div>






                    </div>
                </div>
                <div className='colCal'>

                    <div className='GreenBox'>
                        <h2 className='GreenBoxText' >Largest
                            Streak! </h2>
                        <div className="circleCal moodIcon">
                            <h2 className="moodIcon StreakNum">12</h2>
                        </div>
                    </div>
                    <div className='GreenBox '>
                        <h2 className='GreenBoxText col'>Average
                            mood!
                            <div className="circleCal">
                                <img src={excited} alt=":-)" className='moodIcon' />
                            </div></h2>
                    </div>
                </div>


            </div>
            <a href="/Home">
                <button className="BtnRed right">Go Back!</button>
            </a>

        </div>
    )
}

export default Calender