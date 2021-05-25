import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";

class KepegawaianIndex extends Component {
    constructor() {
        super();
        this.state = {
            kepegawaians: [],
            msg: null,
            type: null,
            flash: false,
            alert: null
        };
    }

    hideAlert() {
        this.setState({
            alert: null
        });
    }

    componentDidMount() {
        axios.get("/api/kepegawaians").then(response => {
            this.setState({
                kepegawaians: response.data
            });
        });
    }

    confirmDelete(id) {
        const getAlert = () => (
            <SweetAlert
                warning
                showCancel
                confirmBtnText="Definitely"
                cancelBtnText="Cancel"
                confirmBtnBsStyle="default"
                cancelBtnBsStyle="danger"
                title="Delete Confirmation"
                onConfirm={() => this.deleteItem(id)}
                onCancel={() => this.hideAlert()}
                focusCancelBtn
            >
                Are you sure you want to remove this?
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }

    deleteItem(id) {
        axios.delete(`/api/kepegawaian/delete/${id}`).then(response => {
            var msg = response.data.success;
            if (msg == true) {
                this.hideAlert();
                this.goToHome();
            }
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
                Deleted pegawai successfully
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }

    onSuccess() {
        this.componentDidMount();
        this.hideAlert();
    }

    render() {
        const { kepegawaians } = this.state;
        return (
            <div className="container py-4">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">All of Employees</div>
                            <div className="card-body">
                                <Link
                                    className="btn btn-primary btn-sm mb-3"
                                    to="/create"
                                >
                                    Create new employee
                                </Link>
                                <div className="table-responsive">
                                    <table className="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th
                                                    width="50"
                                                    className="text-center"
                                                >
                                                    No
                                                </th>
                                                <th>Name</th>
                                                <th
                                                    width="200"
                                                    className="text-center"
                                                >
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {kepegawaians.map(
                                                (kepegawaian, i) => (
                                                    <tr key={i}>
                                                        <td
                                                            width="50"
                                                            className="text-center"
                                                        >
                                                            {i + 1}
                                                        </td>
                                                        <td>
                                                            {kepegawaian.nama}
                                                        </td>
                                                        <td
                                                            width="200"
                                                            className="text-center"
                                                        >
                                                            <div className="btn-group">
                                                                <Link
                                                                    className="btn btn-primary"
                                                                    to={`/kepegawaian/${kepegawaian.id}`}
                                                                >
                                                                    Detail
                                                                </Link>
                                                                <Link
                                                                    className="btn btn-success"
                                                                    to={`/kepegawaian/edit/${kepegawaian.id}`}
                                                                >
                                                                    Edit
                                                                </Link>
                                                                <button
                                                                    className="btn btn-danger"
                                                                    onClick={() =>
                                                                        this.confirmDelete(
                                                                            kepegawaian.id
                                                                        )
                                                                    }
                                                                >
                                                                    Delete
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                    {this.state.alert}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default KepegawaianIndex;
