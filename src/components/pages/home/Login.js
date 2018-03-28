import React from "react"

export class Login extends React.Component {
    render() {
        return (
            <div className="col-8 offset-2 loginBox">
                <div className="row loginHeader">
                    <div className="col-12 loginHeaderText">
                        Login
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        Lorem ipsum dolor i nie pamietam jak dalej
                    </div>
                    <div className="col-8">
                        <form>
                            <div className="row">
                                <div className="col-2 offset-1 d-flex justify-content-end">
                                    <label>Login</label>
                                </div>
                                <div className="col-9 align-content-start">
                                    <input type="text" name="login"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2 offset-1 d-flex justify-content-end">
                                    <label>Password</label>
                                </div>
                                <div className="col-9 align-content-start">
                                    <input type="password" name="password"/>
                                </div>
                            </div>
                            <div className="row d-flex justify-content-center">
                                <button name="submit">Log in</button>
                            </div>
                            <div className="row d-flex justify-content-center">
                                <a>Forgot password?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}