import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import LoginInput from "../inputs/loginInput/LoginInput";
import { useState } from "react";
import '../../pages/login/styles.css'

const loginInfo = {
    email: "",
    password: "",
};
export default function LoginForm() {
    const [login, setLogin] = useState(loginInfo);
    const { email, password } = login;
    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLogin({ ...login, [name]: value });
    };
    const loginValidation = Yup.object({
        email: Yup.string()
            .required("Email address is required.")
            .email("Must be a valid email.")
            .max(100),
        password: Yup.string().required("Password is required"),
    });
    return (
        <div className="login_wrap">
            <div className="login_1">
                <img src="https://www.dropbox.com/s/pm7iq4eiv0y5baj/froglogotransparent.png?raw=1" alt="fb logo"/>
                <span>frogBook helps you connect & share with the amphibians in your life. </span>
            </div>
            <div className="login_2">
                <div className="login_2_wrap">
                    <Formik
                        enableReinitialize
                        initialValues={{
                            email,
                            password,
                        }}
                        validationSchema={loginValidation}
                    >
                        {(formik) => (
                            <Form>
                                <LoginInput
                                    type="text"
                                    name="email"
                                    placeholder="Email address or phone number"
                                    onChange={handleLoginChange}
                                />
                                <LoginInput
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={handleLoginChange}
                                    bottom
                                />
                                <button type="submit" className="blue_btn">
                                    Log In
                                </button>
                            </Form>
                        )}
                    </Formik>
                    <Link to="/forgot" className="forgot_password">
                        Forgot password?
                    </Link>
                    <div className="sign_splitter"> </div>
                    <button className="blue_btn open_signup">Create Account</button>
                </div>
                <Link to="/" className="sign_extra">
                    <b>Create a Page</b> for a celebrity, brand or business.
                </Link>
            </div>
        </div>
    );
}

