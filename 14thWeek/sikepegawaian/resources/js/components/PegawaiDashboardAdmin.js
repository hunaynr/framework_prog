import React, { Component } from "react";
import { Link } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";

class PegawaiDashboardAdmin extends Component {
    constructor() {
        super();
        this.state = {
            alert: null
        };
    }

    hideAlert() {
        this.setState({
            alert: null
        });
    }

    confirmLogout() {
        const getAlert = () => (
            <SweetAlert
                warning
                showCancel
                confirmBtnText="Logout"
                cancelBtnText="Cancel"
                confirmBtnBsStyle="danger"
                cancelBtnBsStyle="default"
                title="Logout"
                onConfirm={() => this.onSuccessLogout()}
                onCancel={() => this.hideAlert()}
                focusCancelBtn
            >
                You're about to sign out of your account
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }

    onSuccessLogout() {
        this.goToHome();
    }

    goToHome() {
        const getAlert = () => (
            <SweetAlert
                success
                title="Logged Out"
                onConfirm={() => this.onSuccessLogoutToHome()}
                onCancel={this.hideAlert()}
                timeout={5000}
                confirmBtnText="OK"
            >
                You've now successfully logged out
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }

    onSuccessLogoutToHome() {
        this.props.history.push("/home");
    }

    render() {
        return (
            <div
                className="container-fluid bg-secondary"
                style={{ height: "519px" }}
            >
                <div className="row">
                    <div className="col-4"></div>
                    <div
                        className="col-2"
                        style={{ marginTop: "40px", paddingLeft: "50px" }}
                    >
                        <Link
                            className="btn btn-dark"
                            to={`/managepegawai`}
                            style={{
                                paddingLeft: "45px",
                                paddingRight: "45px"
                            }}
                        >
                            Employee
                        </Link>
                    </div>
                    <div
                        className="col-2"
                        style={{ marginTop: "40px", paddingLeft: "40px" }}
                    >
                        <Link
                            className="btn btn-dark"
                            to={`/managepengguna`}
                            style={{
                                paddingLeft: "50px",
                                paddingRight: "50px"
                            }}
                        >
                            User
                        </Link>
                    </div>
                    <div className="col-4">
                        <div className="row">
                            <div
                                className="col-12"
                                style={{
                                    marginTop: "40px",
                                    paddingLeft: "360px"
                                }}
                            >
                                <button
                                    className="btn btn-danger text-white"
                                    onClick={() => this.confirmLogout()}
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                    {this.state.alert}
                </div>
                <div className="row">
                    <div className="col-2"></div>
                    <div
                        className="col-8 text-center"
                        style={{ marginTop: "50px" }}
                    >
                        <h6 class="display-4 text-info">Welcome Admin!</h6>
                        <br></br>
                        <h1 class="text-light">This is your Dashboard</h1>
                        <br></br>
                        <h2 class="text-light">
                            You can now manage this Information System over
                            Employee and User by choosing the upper button right
                            above these texts
                        </h2>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        );
    }
}

export default PegawaiDashboardAdmin;
