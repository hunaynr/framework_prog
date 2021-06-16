import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";

class PenggunaTask extends Component {
    constructor() {
        super();
        this.state = {
            nip: "",
            alert: null
        };
    }

    componentDidMount() {
        const nip = this.props.match.params.nip;
        axios.get(`/api/pegawai/read/${nip}`).then(response => {
            this.setState({
                nip: response.data[0].nip
            });
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
                <div className="row">
                    <div className="col-1">
                        <div className="row">
                            <div
                                className="col-12"
                                style={{
                                    marginTop: "10px",
                                    marginLeft: "13px"
                                }}
                            >
                                <Link
                                    className="btn btn-dark"
                                    to={`/dashboarduser/${this.state.nip}`}
                                >
                                    Back
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-10" style={{ marginTop: "10px" }}>
                        <table className="table table-bordered table-hover table-dark">
                            <thead>
                                <tr
                                    className="table-active"
                                    style={{ textAlign: "center" }}
                                >
                                    <th>No</th>
                                    <th>Tanggal</th>
                                    <th>Hari</th>
                                    <th>Tugas</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ textAlign: "center" }}>
                                    <td>1</td>
                                    <td>21 Juni 2021</td>
                                    <td>Senin</td>
                                    <td>Analisis kebutuhan client</td>
                                </tr>
                                <tr style={{ textAlign: "center" }}>
                                    <td>2</td>
                                    <td>22 Juni 2021</td>
                                    <td>Selasa</td>
                                    <td>
                                        Menentukan tools dan aplikasi penunjang
                                        program
                                    </td>
                                </tr>
                                <tr style={{ textAlign: "center" }}>
                                    <td>3</td>
                                    <td>23 Juni 2021</td>
                                    <td>Rabu</td>
                                    <td>
                                        Merancang database, alur program dan
                                        desain interface aplikasi
                                    </td>
                                </tr>
                                <tr style={{ textAlign: "center" }}>
                                    <td>4</td>
                                    <td>24 Juni 2021</td>
                                    <td>Kamis</td>
                                    <td>
                                        Pengembangan aplikasi dengan kode
                                        program
                                    </td>
                                </tr>
                                <tr style={{ textAlign: "center" }}>
                                    <td>5</td>
                                    <td>25 Juni 2021</td>
                                    <td>Jumat</td>
                                    <td>
                                        Pengujian dan perbaikan dalam
                                        pengoperasian program
                                    </td>
                                </tr>
                                <tr style={{ textAlign: "center" }}>
                                    <td>6</td>
                                    <td>26 Juni 2021</td>
                                    <td>Sabtu</td>
                                    <td>Dokumentasi program</td>
                                </tr>
                            </tbody>
                        </table>
                        {this.state.alert}
                    </div>
                    <div className="row">
                        <div
                            className="col-12"
                            style={{ marginTop: "10px", marginLeft: "14px" }}
                        >
                            <button
                                className="btn btn-danger text-white"
                                onClick={() => this.confirmLogout()}
                            >
                                Logout
                            </button>
                        </div>
                    </div>

                    <div className="col-1"></div>
                </div>
            </div>
        );
    }
}

export default PenggunaTask;
