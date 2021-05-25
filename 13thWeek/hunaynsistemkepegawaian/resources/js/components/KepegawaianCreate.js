import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";

class KepegawaianCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nama: "",
            jk: "",
            divisi: "",
            jabatan: "",
            status: "",
            alert: null,
            errors: []
        };
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleCreateNewKepegawaian = this.handleCreateNewKepegawaian.bind(
            this
        );
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
                title="Success!"
                onConfirm={() => this.onSuccess()}
                onCancel={this.hideAlert()}
                timeout={2000}
                confirmBtnText="OK"
            >
                Created pegawai successfully
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }

    onSuccess() {
        this.props.history.push("/");
    }

    hideAlert() {
        this.setState({
            alert: null
        });
    }

    handleCreateNewKepegawaian(event) {
        event.preventDefault();
        const kepegawaian = {
            nama: this.state.nama,
            jk: this.state.jk,
            divisi: this.state.divisi,
            jabatan: this.state.jabatan,
            status: this.state.status
        };
        axios.post("/api/kepegawaian/store", kepegawaian).then(response => {
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
            <div className="container py-4">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                Create new employee
                            </div>
                            <div className="card-body">
                                <form
                                    onSubmit={this.handleCreateNewKepegawaian}
                                >
                                    <div className="form-group">
                                        <label htmlFor="nama">Name</label>
                                        <input
                                            id="nama"
                                            type="text"
                                            className={`form-control ${
                                                this.hasErrorFor("nama")
                                                    ? "is-invalid"
                                                    : ""
                                            }`}
                                            name="nama"
                                            value={this.state.nama}
                                            onChange={this.handleFieldChange}
                                        />
                                        {this.renderErrorFor("nama")}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="jk">Gender</label>
                                        <input
                                            id="jk"
                                            type="text"
                                            className={`form-control ${
                                                this.hasErrorFor("jk")
                                                    ? "is-invalid"
                                                    : ""
                                            }`}
                                            name="jk"
                                            value={this.state.jk}
                                            onChange={this.handleFieldChange}
                                        />
                                        {this.renderErrorFor("jk")}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="divisi">Division</label>
                                        <input
                                            id="divisi"
                                            type="text"
                                            className={`form-control ${
                                                this.hasErrorFor("divisi")
                                                    ? "is-invalid"
                                                    : ""
                                            }`}
                                            name="divisi"
                                            value={this.state.divisi}
                                            onChange={this.handleFieldChange}
                                        />
                                        {this.renderErrorFor("divisi")}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="jabatan">
                                            Position
                                        </label>
                                        <input
                                            id="jabatan"
                                            type="text"
                                            className={`form-control ${
                                                this.hasErrorFor("jabatan")
                                                    ? "is-invalid"
                                                    : ""
                                            }`}
                                            name="jabatan"
                                            value={this.state.jabatan}
                                            onChange={this.handleFieldChange}
                                        />
                                        {this.renderErrorFor("jabatan")}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="status">
                                            Emp Status
                                        </label>
                                        <input
                                            id="status"
                                            type="text"
                                            className={`form-control ${
                                                this.hasErrorFor("status")
                                                    ? "is-invalid"
                                                    : ""
                                            }`}
                                            name="status"
                                            value={this.state.status}
                                            onChange={this.handleFieldChange}
                                        />
                                        {this.renderErrorFor("status")}
                                    </div>
                                    <Link
                                        className="btn btn-secondary"
                                        to={`/`}
                                    >
                                        Back
                                    </Link>
                                    <button className="btn btn-primary">
                                        Create
                                    </button>
                                    {this.state.alert}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default KepegawaianCreate;
