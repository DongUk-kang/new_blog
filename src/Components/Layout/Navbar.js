import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from '../../actions/authActions'

// const Navbar = (props) => {

    // const { isAuthenticated, user } = props.auth;

const Navbar = ({ auth: { isAuthenticated, user }, logoutUser }) => {

    const authLinks = (
        <ul className={"navbar-nav ml-auto"}>
            <li className={"nav-item"}>
                <a
                    href=""
                    onClick={logoutUser}
                    className={"nav-links"}
                >
                    {/*<img*/}
                    {/*    className={"rounded-circle"}*/}
                    {/*    src={user.avatar}*/}
                    {/*    alt={user.name}*/}
                    {/*    style={{ width: '25px', marginRight: '5px'}}*/}
                    {/*    title={"You Must Have a Gravatar connected your email to display an image"}*/}
                    {/*/> {' '}*/}
                        Logout

                </a>
            </li>
        </ul>
    )
    const gusetLiks = (
        <ul className={"navbar-nav ml-auto"}>
            <li className={"nav-item"}>
                <Link className={"nav-link"} to={"/signup"}>
                    Sign Up
                </Link>
            </li>
            <li className={"nav-item"}>
                <Link className={"nav-link"} to={"/login"}>
                    Login
                </Link>
            </li>
        </ul>
    )

    return (
        <nav className={"navbar navbar-expand-sm navbar-dark bg-dark mb-4"}>
            <div className={"container"}>
                <Link className={"navbar-brand"} to={"/"}>
                    Dong uk
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#mobile-nav"
                >
                    <span className="navbar-toggler-icon" />
                </button>
            </div>
            <div className={"collapse navbar-collapse"} id={"#mobile-nav"}>
                <ul className={"navbar-nav mr-auto"}>
                    <li className={"nav-item"}>
                        <Link className={"nav-link"} to={"/"}>
                            {' '}
                            Develpers
                        </Link>
                    </li>
                </ul>
                {isAuthenticated ? authLinks : gusetLiks}
            </div>
        </nav>
    );
};

// Navbar.propTypes = {
//     logoutUser: PropTypes.func.isRequired,
//     auth: PropTypes.object.isRequired
// };
//
// const mapStateToProps = state => ({
//     auth: state.auth
// })
//
// export default connect(mapStateToProps, {logoutUser})(Navbar);

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {logoutUser})(Navbar);