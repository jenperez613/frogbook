import React from 'react'
import './styles.css'
import {Formik, Form} from 'formik'
import {Link} from "react-router-dom";

const Login = () => {
    return(
        <div className="login">
            <div className="login-wrapper">
                <div className="login_wrap">
                    <div className="login_1">
                        <img src="https://www.dropbox.com/s/krh2x4dgrto2m8g/frog.svg?raw=1" alt="fb logo"/>
                        <span>frogBook helps you connect & share with the amphibians in your life.</span>

                    </div>
                    <div className="login_2">
                        <div className="login_2_wrap">
                            <Formik>
                                {(formik)=> <Form>
                                    <input type="text"/>
                                    <input type="text"/>
                                    <button className="blue_btn" type="submit">Login</button>
                                </Form>}</Formik>
                            <Link to="/forgot" className="forgot_password">Forgotten password?</Link>
                            <div className=".sign_splitter"> </div>
                            <button className="blue_btn open_signup">Create Account</button>
                        </div>
                        <Link to="/">
                            <b>Create a page </b>
                            for a celebrity, band, or business.
                        </Link>
                    </div>
                </div>
                <div className="register"> </div>
            </div>
        </div>
    )
}
export default Login