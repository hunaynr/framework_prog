import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";

class PenggunaRegisterFirst extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nip: "",
            email: "",
            password: "",
            role: "user",
            alert: null,
            errors: []
        };
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleRegPenggunaFirst = this.handleRegPenggunaFirst.bind(this);
        this.hasErrorFor = this.hasErrorFor.bind(this);
        this.renderErrorFor = this.renderErrorFor.bind(this);
    }

    handleFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    goToRegPegawai() {
        const getAlert = () => (
            <SweetAlert
                success
                title="Success"
                onConfirm={() => this.onSuccess()}
                onCancel={this.hideAlert()}
                timeout={5000}
                confirmBtnText="OK"
            >
                Step 1-Register New Account successfully
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }

    onSuccess() {
        this.props.history.push("/registersecond");
    }

    hideAlert() {
        this.setState({
            alert: null
        });
    }

    handleRegPenggunaFirst(event) {
        event.preventDefault();
        const penggunaFirst = {
            nip: this.state.nip,
            email: this.state.email,
            password: this.state.password,
            role: this.state.role
        };
        axios.post("/api/pengguna/store", penggunaFirst).then(response => {
            var msg = response.data.success;
            if (msg == true) {
                return this.goToRegPegawai();
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
                className="container-fluid bg-success"
                style={{ height: "519px" }}
            >
                <div class="row">
                    <div class="col-4"></div>
                    <div class="col-4" style={{ marginTop: "10px" }}>
                        <br></br>
                        <div class="card bg-dark">
                            <div class="card-body">
                                <form onSubmit={this.handleRegPenggunaFirst}>
                                    <h4 class="display-5 text-white text-center">
                                        Step 1-Register New Account
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
                                            <label>Email</label>
                                        </div>
                                        <div class="col-8">
                                            <input
                                                id="email"
                                                type="text"
                                                placeholder="Enter your email account"
                                                className={`form-control ${
                                                    this.hasErrorFor("email")
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                name="email"
                                                value={this.state.email}
                                                onChange={
                                                    this.handleFieldChange
                                                }
                                            />
                                            {this.renderErrorFor("email")}
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
                                                className="btn btn-warning"
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
                                                Next
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

export default PenggunaRegisterFirst;
