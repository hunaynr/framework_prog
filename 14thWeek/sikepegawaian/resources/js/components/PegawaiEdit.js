import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";

class PegawaiEdit extends Component {
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
        this.handleUpdatePegawai = this.handleUpdatePegawai.bind(this);
        this.hasErrorFor = this.hasErrorFor.bind(this);
        this.renderErrorFor = this.renderErrorFor.bind(this);
    }

    handleFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    componentDidMount() {
        const nip = this.props.match.params.nip;
        console.log(nip);
        axios.get(`/api/pegawai/edit/${nip}`).then(response => {
            this.setState({
                nip: response.data[0].nip,
                nama: response.data[0].nama,
                jk: response.data[0].jk,
                divisi: response.data[0].divisi,
                jabatan: response.data[0].jabatan,
                status: response.data[0].status,
                role: response.data[0].role
            });
            console.log(this.state.nama);
        });
    }

    goToList() {
        const getAlert = () => (
            <SweetAlert
                success
                title="Success"
                onConfirm={() => this.onSuccessEdit()}
                onCancel={this.hideAlert()}
                timeout={5000}
                confirmBtnText="OK"
            >
                {this.state.message}
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }

    onSuccessEdit() {
        this.props.history.push("/managepegawai");
    }

    hideAlert() {
        this.setState({
            alert: null
        });
    }

    handleUpdatePegawai(event) {
        event.preventDefault();
        const pegawai = {
            nip: this.state.nip,
            nama: this.state.nama,
            jk: this.state.jk,
            divisi: this.state.divisi,
            jabatan: this.state.jabatan,
            status: this.state.status,
            role: this.state.role
        };

        const nip = this.props.match.params.nip;
        axios.put(`/api/pegawai/${nip}`, pegawai).then(response => {
            var msg = response.data.success;
            if (msg == true) {
                this.setState({
                    message: response.data.message
                });
                return this.goToList();
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
                style={{ height: "610px" }}
            >
                <div class="row">
                    <div class="col-4"></div>
                    <div class="col-4" style={{ marginTop: "10px" }}>
                        <br></br>
                        <div class="card bg-dark">
                            <div class="card-body">
                                <form onSubmit={this.handleUpdatePegawai}>
                                    <h4 class="display-5 text-white text-center">
                                        Edit Employee
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
                                    <div class="row text-white">
                                        <div class="col-4">
                                            <label>Role</label>
                                        </div>
                                        <div class="col-8">
                                            <input
                                                id="role"
                                                type="text"
                                                placeholder="Enter your role"
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
                                                Update
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

export default PegawaiEdit;
