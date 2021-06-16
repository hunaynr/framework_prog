import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";

class PegawaiCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nip: "",
            nama: "",
            jk: "",
            divisi: "",
            jabatan: "",
            status: "",
            role: "",
            alert: null,
            errors: []
        };
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleCreatePegawai = this.handleCreatePegawai.bind(this);
        this.hasErrorFor = this.hasErrorFor.bind(this);
        this.renderErrorFor = this.renderErrorFor.bind(this);
    }

    handleFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    goToManagePegawai() {
        const getAlert = () => (
            <SweetAlert
                success
                title="Success"
                onConfirm={() => this.onSuccess()}
                timeout={5000}
                confirmBtnText="OK"
            >
                New Pegawai has been created successfully
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }

    onSuccess() {
        this.props.history.push("/managepegawai");
    }

    handleCreatePegawai(event) {
        event.preventDefault();
        const PegawaiCreate = {
            nip: this.state.nip,
            nama: this.state.nama,
            jk: this.state.jk,
            divisi: this.state.divisi,
            jabatan: this.state.jabatan,
            status: this.state.status,
            role: this.state.role
        };
        axios.post("/api/pegawai/store", PegawaiCreate).then(response => {
            var msg = response.data.success;
            if (msg == true) {
                return this.goToManagePegawai();
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
                style={{ height: "615px" }}
            >
                <div class="row">
                    <div class="col-4"></div>
                    <div class="col-4" style={{ marginTop: "10px" }}>
                        <br></br>
                        <div class="card bg-dark">
                            <div class="card-body">
                                <form onSubmit={this.handleCreatePegawai}>
                                    <h4 class="display-5 text-white text-center">
                                        Cretae New Employee
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
                                            <label>Nama</label>
                                        </div>
                                        <div class="col-8">
                                            <input
                                                id="nama"
                                                type="text"
                                                placeholder="Enter new name"
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
                                                placeholder="Enter new gender"
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
                                                placeholder="Enter new division"
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
                                                placeholder="Enter new position"
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
                                                placeholder="Enter new status"
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

export default PegawaiCreate;
