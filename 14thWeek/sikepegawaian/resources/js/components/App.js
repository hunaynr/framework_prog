import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import PenggunaHome from "./PenggunaHome";
import PenggunaRegisterFirst from "./PenggunaRegisterFirst";
import PegawaiRegisterSecond from "./PegawaiRegisterSecond";
import PenggunaLogin from "./PenggunaLogin";
import PegawaiDashboardUser from "./PegawaiDashboardUser";
import PegawaiDashboardAdmin from "./PegawaiDashboardAdmin";
import PegawaiManagePegawai from "./PegawaiManagePegawai";
import PegawaiEdit from "./PegawaiEdit";
import PegawaiCreate from "./PegawaiCreate";
import PegawaiManagePengguna from "./PegawaiManagePengguna";
import PenggunaEdit from "./PenggunaEdit";
import PenggunaCreate from "./PenggunaCreate";
import PenggunaReadBiodata from "./PenggunaReadBiodata";
import PenggunaTask from "./PenggunaTask";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/home" component={PenggunaHome} />
                        <Route
                            exact
                            path="/register"
                            component={PenggunaRegisterFirst}
                        />
                        <Route
                            path="/registersecond"
                            component={PegawaiRegisterSecond}
                        />
                        <Route path="/login" component={PenggunaLogin} />
                        <Route
                            path="/dashboarduser/:nip"
                            component={PegawaiDashboardUser}
                        />
                        <Route
                            path="/dashboardadmin"
                            component={PegawaiDashboardAdmin}
                        />
                        <Route
                            path="/managepegawai"
                            component={PegawaiManagePegawai}
                        />
                        <Route
                            path="/pegawai/edit/:nip"
                            component={PegawaiEdit}
                        />
                        <Route
                            path="/pegawaicreate"
                            component={PegawaiCreate}
                        />
                        <Route
                            path="/managepengguna"
                            component={PegawaiManagePengguna}
                        />
                        <Route
                            path="/pengguna/edit/:nip"
                            component={PenggunaEdit}
                        />
                        <Route
                            path="/penggunacreate"
                            component={PenggunaCreate}
                        />
                        <Route
                            path="/biodata/:nip"
                            component={PenggunaReadBiodata}
                        />
                        <Route path="/task/:nip" component={PenggunaTask} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
