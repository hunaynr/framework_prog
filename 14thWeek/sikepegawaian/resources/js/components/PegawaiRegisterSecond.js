import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";

class PegawaiRegisterSecond extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nip: "",
            nama: "",
            jk: "",
            divisi: "",
            jabatan: "",
            status: "",
            role: "user",
            alert: null,
            errors: []
        };
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleRegPegawaiSecond = this.handleRegPegawaiSecond.bind(this);
        this.hasErrorFor = this.hasErrorFor.bind(this);
        this.renderErrorFor = this.renderErrorFor.bind(this);
    }

    handleFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    goToHome() {
        const getAlert = () => (
            <SweetAlert
                success
                title="Success"
                onConfirm={() => this.onSuccess()}
                timeout={5000}
                confirmBtnText="OK"
            >
                Step 2-Final Register New Account successfully
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }

    onSuccess() {
        this.props.history.push("/home");
    }

    handleRegPegawaiSecond(event) {
        event.preventDefault();
        const PegawaiSecond = {
            nip: this.state.nip,
            nama: this.state.nama,
            jk: this.state.jk,
            divisi: this.state.divisi,
            jabatan: this.state.jabatan,
            status: this.state.status,
            role: this.state.role
        };
        axios.post("/api/pegawai/store", PegawaiSecond).then(response => {
            var msg = response.data.success;
            if (msg == true) {
                return this.goToHome();
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
                className="container-fluid bg-danger"
                style={{ height: "550px" }}
            >
                <div class="row">
                    <div class="col-4"></div>
                    <div class="col-4" style={{ marginTop: "10px" }}>
                        <br></br>
                        <div class="card bg-dark">
                            <div class="card-body">
                                <form onSubmit={this.handleRegPegawaiSecond}>
                                    <h4 class="display-5 text-white text-center">
                                        Step 2-Final Register New Account
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
                                            <label>Nama</label>
                                        </div>
                                        <div class="col-8">
                                            <input
                                                id="nama"
                                                type="text"
                                                placeholder="Enter your name"
                                                className={`form-control ${
                                                    this.hasErrorFor("nama")
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                name="nama"
                                                value={this.state.nama}
                                                onChange={
                                                    this.handleFieldChange
                                                }
                                            />
                                            {this.renderErrorFor("nama")}
                                        </div>
                                    </div>

                                    <br></br>
                                    <div class="row text-white">
                                        <div class="col-4">
                                            <label>Gender</label>
                                        </div>
                                        <div class="col-8">
                                            <input
                                                id="jk"
                                                type="text"
                                                placeholder="Enter your gender"
                                                className={`form-control ${
                                                    this.hasErrorFor("jk")
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                name="jk"
                                                value={this.state.jk}
                                                onChange={
                                                    this.handleFieldChange
                                                }
                                            />
                                            {this.renderErrorFor("jk")}
                                        </div>
                                    </div>

                                    <br></br>
                                    <div class="row text-white">
                                        <div class="col-4">
                                            <label>Divisi</label>
                                        </div>
                                        <div class="col-8">
                                            <input
                                                id="divisi"
                                                type="text"
                                                placeholder="Enter your division"
                                                className={`form-control ${
                                                    this.hasErrorFor("divisi")
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                name="divisi"
                                                value={this.state.divisi}
                                                onChange={
                                                    this.handleFieldChange
                                                }
                                            />
                                            {this.renderErrorFor("divisi")}
                                        </div>
                                    </div>

                                    <br></br>
                                    <div class="row text-white">
                                        <div class="col-4">
                                            <label>Jabatan</label>
                                        </div>
                                        <div class="col-8">
                                            <input
                                                id="jabatan"
                                                type="text"
                                                placeholder="Enter your position"
                                                className={`form-control ${
                                                    this.hasErrorFor("jabatan")
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                name="jabatan"
                                                value={this.state.jabatan}
                                                onChange={
                                                    this.handleFieldChange
                                                }
                                            />
                                            {this.renderErrorFor("jabatan")}
                                        </div>
                                    </div>

                                    <br></br>
                                    <div class="row text-white">
                                        <div class="col-4">
                                            <label>Status</label>
                                        </div>
                                        <div class="col-8">
                                            <input
                                                id="status"
                                                type="text"
                                                placeholder="Enter your status"
                                                className={`form-control ${
                                                    this.hasErrorFor("status")
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                name="status"
                                                value={this.state.status}
                                                onChange={
                                                    this.handleFieldChange
                                                }
                                            />
                                            {this.renderErrorFor("status")}
                                        </div>
                                    </div>

                                    <br></br>
                                    <div class="row">
                                        <div class="col-4"></div>
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

export default PegawaiRegisterSecond;
