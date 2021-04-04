import React, { useState } from 'react';

const Login = () => {

    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onChange = text => event => {
        setUserInput({...userInput, [text]: event.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (userInput.password !== userInput.password) {
            alert("password not matching")
        }

        const loginUser = {
            name: userInput.name,
            email: userInput.email,
            password: userInput.password
        }

        console.log(loginUser)
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

                            <form onSubmit={onSubmit}>
                                <div className={"form-group"}>
                                    <input
                                        type={"text"}
                                        className={"form-control form-control-lg"}
                                        placeholder={"Name"}
                                        name={"name"}
                                        value={userInput.name}
                                        onChange={onChange('name')}
                                    />
                                </div>
                                <div className={"form-group"}>
                                    <input
                                        type={"email"}
                                        className={"form-control form-control-lg"}
                                        placeholder={"Email"}
                                        name={"email"}
                                        value={userInput.email}
                                        onChange={onChange('email')}
                                    />
                                </div>
                                <div className={"form-group"}>
                                    <input
                                        type={"password"}
                                        className={"form-control form-control-lg"}
                                        placeholder={"Password"}
                                        name={"password"}
                                        value={userInput.password}
                                        onChange={onChange('password')}
                                    />
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
