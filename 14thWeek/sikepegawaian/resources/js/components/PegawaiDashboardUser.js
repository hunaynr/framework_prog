import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";

class PegawaiDashboardUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nip: "",
            nama: "",
            alert: null
        };
    }

    componentDidMount() {
        const nip = this.props.match.params.nip;
        axios.get(`/api/pegawai/read/${nip}`).then(response => {
            this.setState({
                nip: response.data[0].nip,
                nama: response.data[0].nama
            });
            console.log(this.state.nip);
        });
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
                        style={{ marginTop: "40px", paddingLeft: "30px" }}
                    >
                        <Link
                            className="btn btn-dark"
                            to={`/biodata/${this.state.nip}`}
                            style={{
                                paddingLeft: "45px",
                                paddingRight: "45px"
                            }}
                        >
                            Biodata
                        </Link>
                    </div>
                    <div
                        className="col-2"
                        style={{ marginTop: "40px", paddingLeft: "40px" }}
                    >
                        <Link
                            className="btn btn-dark"
                            to={`/task/${this.state.nip}`}
                            style={{
                                paddingLeft: "50px",
                                paddingRight: "50px"
                            }}
                        >
                            Daily Task
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
                        <h6 class="display-4 text-info">
                            Welcome {this.state.nama}!
                        </h6>
                        <br></br>
                        <h1 class="text-light">This is your Dashboard</h1>
                        <br></br>
                        <h2 class="text-light">
                            You can now use this Information System
                        </h2>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        );
    }
}

export default PegawaiDashboardUser;
