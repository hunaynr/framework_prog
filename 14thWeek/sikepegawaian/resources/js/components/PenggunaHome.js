import React, { Component } from "react";
import { Link } from "react-router-dom";

class PenggunaHome extends Component {
    render() {
        return (
            <div
                className="container-fluid bg-secondary"
                style={{ height: "519px" }}
            >
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-4" style={{ marginTop: "160px" }}>
                        <h1 class="display-5 text-white text-center">
                            Silahkan login terlebih dahulu
                        </h1>
                    </div>
                    <div className="col-4" style={{ marginTop: "160px" }}>
                        <h1 class="display-5 text-warning">
                            Belum punya akun?
                        </h1>
                    </div>
                    <div className="col-4"></div>
                </div>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-4" style={{ paddingLeft: "158px" }}>
                        <Link
                            className="btn btn-success"
                            to={`/login`}
                            style={{
                                paddingLeft: "50px",
                                paddingRight: "50px"
                            }}
                        >
                            Login
                        </Link>
                    </div>
                    <div className="col-4" style={{ paddingLeft: "95px" }}>
                        <Link
                            className="btn btn-primary"
                            to={`/register`}
                            style={{
                                paddingLeft: "50px",
                                paddingRight: "50px"
                            }}
                        >
                            Register
                        </Link>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        );
    }
}

export default PenggunaHome;
