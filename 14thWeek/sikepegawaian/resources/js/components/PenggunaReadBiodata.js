import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";

class PenggunaReadBiodata extends Component {
    constructor() {
        super();
        this.state = {
            nip: "",
            nama: "",
            jk: "",
            divisi: "",
            jabatan: "",
            status: "",
            role: "",
            alert: null
        };
    }

    componentDidMount() {
        const nip = this.props.match.params.nip;
        axios.get(`/api/pegawai/read/${nip}`).then(response => {
            this.setState({
                nip: response.data[0].nip,
                nama: response.data[0].nama,
                jk: response.data[0].jk,
                divisi: response.data[0].divisi,
                jabatan: response.data[0].jabatan,
                status: response.data[0].status,
                role: response.data[0].role
            });
            console.log(response.data[0].jk);
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

    hideAlert() {
        this.setState({
            alert: null
        });
    }

    render() {
        return (
            <div
                className="container-fluid bg-secondary"
                style={{ height: "519px" }}
            >
                <div class="row">
                    <div class="col-4"></div>
                    <div class="col-4" style={{ marginTop: "10px" }}>
                        <br></br>
                        <div class="card bg-dark">
                            <div className="card-header bg-success text-white text-center">
                                <div className="row">
                                    <div
                                        className="col-12"
                                        style={{ marginTop: "10px" }}
                                    >
                                        <h4 className="display-5">Data Diri</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body bg-dark">
                                <div class="row text-white">
                                    <div class="col-4">
                                        <label>NIP</label>
                                    </div>
                                    <div class="col-8">{this.state.nip}</div>
                                </div>

                                <br></br>
                                <div class="row text-white">
                                    <div class="col-4">
                                        <label>Nama</label>
                                    </div>
                                    <div class="col-8">{this.state.nama}</div>
                                </div>

                                <br></br>
                                <div class="row text-white">
                                    <div class="col-4">
                                        <label>Gender</label>
                                    </div>
                                    <div class="col-8">{this.state.jk}</div>
                                </div>

                                <br></br>
                                <div class="row text-white">
                                    <div class="col-4">
                                        <label>Divisi</label>
                                    </div>
                                    <div class="col-8">{this.state.divisi}</div>
                                </div>

                                <br></br>
                                <div class="row text-white">
                                    <div class="col-4">
                                        <label>Status</label>
                                    </div>
                                    <div class="col-8">{this.state.status}</div>
                                </div>

                                <br></br>
                                <div class="row text-white">
                                    <div class="col-4">
                                        <Link
                                            className="btn btn-secondary"
                                            to={`/dashboarduser/${this.state.nip}`}
                                        >
                                            Back
                                        </Link>
                                    </div>
                                    <div class="col-4"></div>
                                    <div class="col-4"></div>
                                </div>
                                {this.state.alert}
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div className="row">
                            <br></br>
                            <div
                                className="col-12"
                                style={{
                                    marginTop: "30px",
                                    paddingLeft: "340px"
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
                </div>
            </div>
        );
    }
}

export default PenggunaReadBiodata;
