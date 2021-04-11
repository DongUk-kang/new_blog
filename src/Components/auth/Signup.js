import React, {useState} from 'react';
import PropTypes from "prop-types";
// import axios from "axios";
import classnames from 'classname';
import { connect } from "react-redux"
import { registerUser } from "../../actions/authActions"

const Signup = (props) => {

    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
        errors: {}
    })

    const onChange = text => event => {
        setUserInput({...userInput, [text]: event.target.value})
    }


    const onSubmit = (e) => {
        e.preventDefault()

        if (userInput.password !== userInput.password2) {
            alert("password not matching")
        }


        const newUser = {
            name: userInput.name,
            email: userInput.email,
            password: userInput.password,
            password2: userInput.password2
        }

        console.log(newUser)
        // axios.post("http://localhost:5000/api/users/register", newUser)
        //     .then(data => {
        //
        //         // console.log("+++++++++++++++++", data.data)
        //
        //         if (data.status === 200) {
        //             history.push("/login")
        //         }
        //     })
        //     .catch(err => {
        //
        //         setUserInput({...userInput, errors: err.response.data})
        //         console.log(err.response.data)
        //     })
        props.registerUser(newUser);

    }

    const {user} = props.auth

    return (
        <div className={"register"}>
            {user ? user.name : null}
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-md-8 m-auto"}>
                        <h1 className={"display-4 text-center"}>Sign Up</h1>
                        <p className={"lead text-center"}>
                            Create your douguk blog account
                        </p>

                        <form noValidate onSubmit={onSubmit}>
                            <div className={"form-group"}>
                                <input
                                    type={"text"}
                                    // className={"form-control form-control-lg"}
                                    className={classnames("form-control form-control-lg", {
                                        'is-invalid': userInput.errors.name
                                    })}
                                    placeholder={"Name"}
                                    name={"name"}
                                    value={userInput.name}
                                    onChange={onChange('name')}
                                />
                                {userInput.errors.name && (
                                    <div className={"invalid-feedback"}>{userInput.errors.name}</div>
                                )}
                            </div>
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
                            <div className={"form-group"}>
                                <input
                                    type={"password"}
                                    // className={"form-control form-control-lg"}
                                    className={classnames("form-control form-control-lg", {
                                        'is-invalid': userInput.errors.password2
                                    })}
                                    placeholder={"Confirm Password"}
                                    name={"password2"}
                                    value={userInput.password2}
                                    onChange={onChange('password2')}
                                />
                                {userInput.errors.password2 && (
                                    <div className={"invalid-feedback"}>{userInput.errors.password2}</div>
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


Signup.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {registerUser})(Signup);
