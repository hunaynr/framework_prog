import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";

class PenggunaLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nip: "",
            password: "",
            alert: null,
            errors: [],
            pegawaiGet: []
        };
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handlePenggunaLogin = this.handlePenggunaLogin.bind(this);
        this.hasErrorFor = this.hasErrorFor.bind(this);
        this.renderErrorFor = this.renderErrorFor.bind(this);
    }

    handleFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    goToDashboardUser(nip) {
        const getAlert = () => (
            <SweetAlert
                success
                title="Success"
                onConfirm={() => this.onSuccessUser(nip)}
                onCancel={this.hideAlert()}
                timeout={5000}
                confirmBtnText="OK"
            >
                You have successfully logged in as User
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }

    goToDashboardAdmin() {
        const getAlert = () => (
            <SweetAlert
                success
                title="Success"
                onConfirm={() => this.onSuccessAdmin()}
                onCancel={this.hideAlert()}
                timeout={5000}
                confirmBtnText="OK"
            >
                You have successfully logged in as Admin
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }

    goToHome() {
        const getAlert = () => (
            <SweetAlert
                warning
                confirmBtnText="OK"
                confirmBtnBsStyle="danger"
                title="Login Failed"
                onConfirm={() => this.hideAlert()}
                focusConfirmBtn
            >
                NIP and/or Password unmatch
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }

    onSuccessUser(nip) {
        console.log(nip);
        this.props.history.push(`/dashboarduser/${nip}`);
    }

    onSuccessAdmin() {
        this.props.history.push("/dashboardadmin");
    }

    hideAlert() {
        this.setState({
            alert: null
        });
    }

    handlePenggunaLogin(event) {
        event.preventDefault();
        const nip = this.state.nip;
        axios.get(`/api/pengguna/${nip}`).then(response => {
            this.setState({
                pegawaiGet: response.data
            });
            console.log(this.state.pegawaiGet);
            console.log(this.state.pegawaiGet.length);

            if (this.state.pegawaiGet.length == 1) {
                if (this.state.pegawaiGet[0].role == "user") {
                    this.goToDashboardUser(nip);
                } else if (this.state.pegawaiGet[0].role == "admin") {
                    this.goToDashboardAdmin();
                }
            } else if (this.state.pegawaiGet.length == 0) {
                this.goToHome();
            }
        });
    }

    hasErrorFor(field) {
        return !!this.state.errors[field];
    }

    renderErrorFor(field) {
        if (this.hasErrorFor(field)) {
            return (
                <span className="invalid-feedback">
                    <strong>{this.state.errors[field][0]}</strong>
                </span>
            );
        }
    }

    render() {
        return (
            <div
                className="container-fluid bg-warning"
                style={{ height: "519px" }}
            >
                <div class="row">
                    <div class="col-4"></div>
                    <div class="col-4" style={{ marginTop: "10px" }}>
                        <br></br>
                        <div class="card bg-dark">
                            <div class="card-body">
                                <form onSubmit={this.handlePenggunaLogin}>
                                    <h4 class="display-5 text-white text-center">
                                        Login to your account
                                    </h4>
                                    <br></br>
                                    <div class="row text-white">
                                        <div class="col-4">
                                            <label>NIP</label>
                                        </div>
                                        <div class="col-8">
                                            <input
                                                id="nip"
                                                type="text"
                                                placeholder="Enter your NIP"
                                                className={`form-control ${
                                                    this.hasErrorFor("nip")
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                name="nip"
                                                value={this.state.nip}
                                                onChange={
                                                    this.handleFieldChange
                                                }
                                            />
                                            {this.renderErrorFor("nip")}
                                        </div>
                                    </div>

                                    <br></br>
                                    <div class="row text-white">
                                        <div class="col-4">
                                            <label>Password</label>
                                        </div>
                                        <div class="col-8">
                                            <input
                                                id="password"
                                                type="password"
                                                placeholder="Enter your password"
                                                className={`form-control ${
                                                    this.hasErrorFor("password")
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                name="password"
                                                value={this.state.password}
                                                onChange={
                                                    this.handleFieldChange
                                                }
                                            />
                                            {this.renderErrorFor("password")}
                                        </div>
                                    </div>

                                    <br></br>
                                    <div class="row text-white">
                                        <div class="col-4">
                                            <Link
                                                className="btn btn-danger"
                                                to={`/home`}
                                            >
                                                Back
                                            </Link>
                                        </div>
                                        <div class="col-4"></div>
                                        <div class="col-4">
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-block"
                                            >
                                                Login
                                            </button>
                                        </div>
                                    </div>
                                    {this.state.alert}
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-4"></div>
                </div>
            </div>
        );
    }
}

export default PenggunaLogin;
