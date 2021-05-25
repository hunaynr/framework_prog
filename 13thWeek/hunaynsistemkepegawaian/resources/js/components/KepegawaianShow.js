import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class KepegawaianShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kepegawaian: {}
        };
    }

    componentDidMount() {
        const kepegawaianId = this.props.match.params.id;

        axios.get(`/api/kepegawaian/${kepegawaianId}`).then(response => {
            this.setState({
                kepegawaian: response.data
            });
        });
    }

    render() {
        const { kepegawaian } = this.state;

        return (
            <div className="container py-4">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                Employee Name: {kepegawaian.nama}
                            </div>
                            <div className="card-body">
                                <p>Gender: {kepegawaian.jk}</p>
                                <p>Division: {kepegawaian.divisi}</p>
                                <p>Position: {kepegawaian.jabatan}</p>
                                <p>Emp Status: {kepegawaian.status}</p>
                                <Link className="btn btn-primary" to={`/`}>
                                    Back
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default KepegawaianShow;
