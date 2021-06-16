import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";

class PegawaiManagePegawai extends Component {
    constructor() {
        super();
        this.state = {
            pegawai: [],
            alert: null
        };
    }

    hideAlert() {
        this.setState({
            alert: null
        });
    }

    componentDidMount() {
        axios.get("/api/pegawai").then(response => {
            this.setState({
                pegawai: response.data
            });
        });
    }

    confirmDelete(nip) {
        const getAlert = () => (
            <SweetAlert
                warning
                showCancel
                confirmBtnText="Delete"
                cancelBtnText="Cancel"
                confirmBtnBsStyle="danger"
                cancelBtnBsStyle="default"
                title="Move to Trash"
                onConfirm={() => this.deleteItem(nip)}
                onCancel={() => this.hideAlert()}
                focusCancelBtn
            >
                Deleted item will be removed permanently
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }

    deleteItem(nip) {
        axios.delete(`/api/pegawai/delete/${nip}`).then(response => {
            var msg = response.data.success;
            console.log(response.data);
            if (msg == true) {
                this.hideAlert();
                this.goToDashboard();
            }
        });
    }

    goToDashboard() {
        const getAlert = () => (
            <SweetAlert
                success
                title="Deleted"
                onConfirm={() => this.onSuccessDelete()}
                onCancel={this.hideAlert()}
                timeout={5000}
                confirmBtnText="OK"
            >
                Pegawai have successfully been deleted
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }

    onSuccessDelete() {
        this.componentDidMount();
        this.hideAlert();
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
        const { pegawai } = this.state;
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
                                    className="btn btn-info text-white"
                                    to={`/pegawaicreate`}
                                >
                                    Create
                                </Link>
                            </div>
                        </div>
                        <div
                            className="row"
                            style={{
                                marginTop: "420px"
                            }}
                        >
                            <div
                                className="col-12"
                                style={{
                                    marginLeft: "10px"
                                }}
                            >
                                <Link
                                    className="btn btn-dark"
                                    to={`/dashboardadmin`}
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
                                    <th>NIP</th>
                                    <th>Nama</th>
                                    <th>Gender</th>
                                    <th>Divisi</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pegawai.map((pegawai, i) => (
                                    <tr key={i} style={{ textAlign: "center" }}>
                                        <td>{pegawai.nip}</td>
                                        <td>{pegawai.nama}</td>
                                        <td>{pegawai.jk}</td>
                                        <td>{pegawai.divisi}</td>
                                        <td>{pegawai.status}</td>
                                        <td>
                                            <Link
                                                className="btn btn-success"
                                                to={`/pegawai/edit/${pegawai.nip}`}
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() =>
                                                    this.confirmDelete(
                                                        pegawai.nip
                                                    )
                                                }
                                                style={{ marginLeft: "10px" }}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
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
                                className="btn btn-warning text-dark"
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

export default PegawaiManagePegawai;
