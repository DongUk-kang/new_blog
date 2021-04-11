import React, { useState } from 'react';
import axios from "axios";
import classnames from 'classname';

const Login = ({history}) => {

    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        password: "",
        errors: {}
    })

    const onChange = text => event => {
        setUserInput({...userInput, [text]: event.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()




        const loginUser = {
            name: userInput.name,
            email: userInput.email,
            password: userInput.password
        }

        console.log(loginUser)
        axios.post("http://localhost:5000/api/users/login", loginUser)
            .then(data => {
                if (data.status === 200) {
                    const {token} = data.data
                    localStorage.setItem("token", token)
                    history.push("/home")
                }
            })
            .catch(err => {
                setUserInput({...userInput, errors: err.response.data})
                console.log(err.response.data)
            })
    }


    return (
            <div className={"register"}>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-md-8 m-auto"}>
                            <h1 className={"display-4 text-center"}>Login</h1>
                            <p className={"lead text-center"}>
                                You can Login Here
                            </p>

                            <form noValidate onSubmit={onSubmit}>
                                <div className={"form-group"}>
                                    <input
                                        type={"email"}
                                        // className={"form-control form-control-lg"}
                                        className={classnames("form-control form-control-lg", {
                                            'is-invalid': userInput.errors.email
                                        })}
                                        placeholder={"Email"}
                                        name={"email"}
                                        value={userInput.email}
                                        onChange={onChange('email')}
                                    />
                                    {userInput.errors.email && (
                                        <div className={"invalid-feedback"}>{userInput.errors.email}</div>
                                    )}
                                </div>
                                <div className={"form-group"}>
                                    <input
                                        type={"password"}
                                        // className={"form-control form-control-lg"}
                                        className={classnames("form-control form-control-lg", {
                                            'is-invalid': userInput.errors.password
                                        })}
                                        placeholder={"Password"}
                                        name={"password"}
                                        value={userInput.password}
                                        onChange={onChange('password')}
                                    />
                                    {userInput.errors.password && (
                                        <div className={"invalid-feedback"}>{userInput.errors.password}</div>
                                    )}
                                </div>
                                <input
                                    type={"submit"}
                                    className={"btn btn-info btn-block mt-4"}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Login;
