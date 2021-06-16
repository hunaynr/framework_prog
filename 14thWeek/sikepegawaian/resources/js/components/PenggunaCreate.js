import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";

class PenggunaCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nip: "",
            email: "",
            password: "",
            role: "",
            alert: null,
            errors: []
        };
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleCreatePengguna = this.handleCreatePengguna.bind(this);
        this.hasErrorFor = this.hasErrorFor.bind(this);
        this.renderErrorFor = this.renderErrorFor.bind(this);
    }

    handleFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    goToManagePengguna() {
        const getAlert = () => (
            <SweetAlert
                success
                title="Success"
                onConfirm={() => this.onSuccess()}
                timeout={5000}
                confirmBtnText="OK"
            >
                New User has been created successfully
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }

    onSuccess() {
        this.props.history.push("/managepengguna");
    }

    handleCreatePengguna(event) {
        event.preventDefault();
        const PenggunaCreate = {
            nip: this.state.nip,
            email: this.state.email,
            password: this.state.password,
            role: this.state.role
        };
        axios.post("/api/pengguna/store", PenggunaCreate).then(response => {
            var msg = response.data.success;
            if (msg == true) {
                return this.goToManagePengguna();
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
                className="container-fluid bg-info"
                style={{ height: "519px" }}
            >
                <div class="row">
                    <div class="col-4"></div>
                    <div class="col-4" style={{ marginTop: "10px" }}>
                        <br></br>
                        <div class="card bg-dark">
                            <div class="card-body">
                                <form onSubmit={this.handleCreatePengguna}>
                                    <h4 class="display-5 text-white text-center">
                                        Cretae New User
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
                                                placeholder="Enter new NIP"
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
                                                placeholder="Enter new email"
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
                                                placeholder="Enter new password"
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
                                            <label>Role</label>
                                        </div>
                                        <div class="col-8">
                                            <input
                                                id="role"
                                                type="text"
                                                placeholder="Enter new role"
                                                className={`form-control ${
                                                    this.hasErrorFor("role")
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                name="role"
                                                value={this.state.role}
                                                onChange={
                                                    this.handleFieldChange
                                                }
                                            />
                                            {this.renderErrorFor("role")}
                                        </div>
                                    </div>

                                    <br></br>
                                    <div class="row">
                                        <div class="col-4">
                                            <Link
                                                className="btn btn-warning"
                                                to={`/managepegawai`}
                                            >
                                                Cancel
                                            </Link>
                                        </div>
                                        <div class="col-4"></div>
                                        <div class="col-4">
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-block"
                                            >
                                                Submit
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

export default PenggunaCreate;
