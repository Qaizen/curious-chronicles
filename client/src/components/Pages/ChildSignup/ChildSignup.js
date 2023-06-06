function ChildSignup() {
    return (
        <div className="Signup-body backgroundY" >

            <div className="row">

                <img className="imgBook" src='./Photos/Fox.png' alt="A Fox" />
                <div >

                    <h1 className="parTitle Mali">Now for the fun part!</h1>
                    <a href='/Home'>
                        <div className='col '>

                            <form className='col form'>

                                <label className="label" >Your Name!</label>
                                <input
                                    className="childform-input"
                                />

                            </form>
                            <button className="BtnRed">All Done!</button>
                        </div>
                    </a>
                </div>

            </div >
        </div >
    );
}

export default ChildSignup;