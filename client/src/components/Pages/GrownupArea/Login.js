
function Login() {
    return (
        <div className=" BackgroundQ col">

            <form className='col'>
                <div className='row passwordInput'>

                    <input
                        className="form-input"
                        placeholder="Password"
                        name="fpassword"
                        type="fpassword"

                    />
                    <input
                        className="form-input"
                        placeholder="******"
                        name="password"
                        type="password"

                    // onChange={handleChange}
                    />
                </div>
                <input
                    className="form-input emailFrom"
                    placeholder="Your email"
                    name="email"
                    type="email"

                //onChange={handleChange}
                />
            </form>
            <a href='/GrownupArea'>

                <button className="BtnRed">Submit</button>
            </a>

        </div>
    );
}
export default Login;