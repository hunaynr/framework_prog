import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MarketModel from "../stateless/MarketModel";
import photo from "../image/me1.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import Basket from "../stateless/Basket";

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <div className="row">
      <div className="col-12">
        <p className="ml-4 font-weight-bold lead">
          Welcome you are Logged in!{" "}
          <div className="row">
            <div className="col-12 mt-3">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  fakeAuth.signout(() => history.push("/home"));
                }}
              >
                Log Out
              </button>
            </div>
          </div>
        </p>
      </div>
    </div>
  ) : (
    <div className="container-fluid px-0">
      <div className="row">
        <div className="col-12">
          <p className="ml-4 font-weight-bold lead">You are not logged in</p>
        </div>
      </div>
    </div>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function Home() {
  return (
    <div className="container-fluid px-0" style={{ height: "276px" }}>
      <br />
      <table className="table">
        <div className="row">
          <div className="col-4">
            <tbody>
              <tr>
                <td style={{ paddingLeft: "100px", paddingRight: "90px" }}>
                  <img
                    src="https://www.pngkey.com/png/full/827-8273413_jax-r-series-white-micom-rice-cooker-with.png"
                    width="250"
                    height="200"
                    alt="show"
                  />
                </td>
              </tr>
            </tbody>
          </div>
          <div className="col-4">
            <tbody>
              <tr>
                <td style={{ paddingLeft: "100px", paddingRight: "90px" }}>
                  <img
                    src="https://www.pngkey.com/png/full/372-3721130_but-while-using-an-electric-cooker-might-be.png"
                    width="250"
                    height="200"
                    alt="show"
                  />
                </td>
              </tr>
            </tbody>
          </div>
          <div className="col-4">
            <tbody>
              <tr>
                <td style={{ paddingLeft: "100px", paddingRight: "90px" }}>
                  <img
                    src="https://www.pngkey.com/png/full/765-7658511_cuckoo-malaysia-white-1010-multi-cooker-rice-cooker.png"
                    width="250"
                    height="200"
                    alt="show"
                  />
                </td>
              </tr>
            </tbody>
          </div>
        </div>
      </table>
    </div>
  );
}

function About() {
  return (
    <div className="container-fluid px-0" style={{ height: "317px" }}>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-3">
          <td>
            <img src={photo} width="300" height="300" alt="myphoto" />
          </td>
        </div>
        <div className="col-3">
          <h4 class="display-6 text-dark font-weight-normal">
            <small>Hunayn Risatayn</small>
          </h4>
          <h4 class="display-6 text-dark font-weight-normal">
            <small>081222200039</small>
          </h4>
          <h4 class="display-6 text-dark font-weight-normal">
            <small>Informatics Engineering</small>
          </h4>
          <h4 class="display-6 text-dark font-weight-normal">
            <small>Binging movies</small>
          </h4>
          <h4
            class="display-6 text-dark font-weight-normal"
            style={{ paddingTop: "7px" }}
          >
            <a
              href="https://github.com/hunaynr"
              class="link-warning"
              style={{ color: "yellow" }}
            >
              <kbd>
                <small>GitHub</small>
              </kbd>
            </a>
          </h4>
          <h4
            class="display-6 text-dark font-weight-normal"
            style={{ paddingTop: "7px" }}
          >
            <a
              href="mailto:hunaynr@gmail.com"
              class="link-warning"
              style={{ color: "yellow" }}
            >
              <kbd>
                <small>Gmail</small>
              </kbd>
            </a>
          </h4>
          <h4
            class="display-6 text-dark font-weight-normal"
            style={{ paddingTop: "7px" }}
          >
            <a
              href="https://www.youtube.com/channel/UCP53BJw16j_nt4Y0sETg1rA"
              class="link-warning"
              style={{ color: "yellow" }}
            >
              <kbd>
                <small>YouTube</small>
              </kbd>
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div className="container-fluid px-0" style={{ height: "466px" }}>
      <div className="row" style={{ paddingTop: "18px" }}>
        <div className="col-12">
          <p className="ml-4 font-weight-bold lead">
            You must log in to view the page at {from.pathname}
            <div className="row">
              <div className="col-12 mt-3">
                <button type="button" className="btn btn-dark" onClick={login}>
                  Login
                </button>
              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

class MarketView extends Component {
  state = {
    // komponen state dari React untuk stateful component
    listProduct: [], // variable array yang digunakan untuk menyimpan data API
    tmpBasket: {
      id: "",
      nama_produk: "",
      harga: "",
      gambar: "",
      stok: "",
    },
    tmpProduct: {
      id: "",
      nama_produk: "",
      harga: "",
      gambar: "",
      stok: "",
    },
    listBasket: [],
    sum: 0,
  };

  ambilDataDariServerAPI() {
    // fungsi untuk mengambil data dari API dengan penambahan sort dan order
    fetch("http://localhost:3001/posts?_sort=id&_order=asc") // penambahan sort dan order berdasarkan parameter
      .then((response) => response.json()) // ubah response data dari URL API menjadi sebuah data JSON
      .then((jsonHasilAmbilDariAPI) => {
        // data JSON hasil ambil dari API kita masukkan ke dalam listArtikel pada state
        this.setState({
          listProduct: jsonHasilAmbilDariAPI,
        });
      });
  }

  ambilDataDariServerAPIBasket() {
    // fungsi untuk mengambil data dari API dengan penambahan sort dan order
    fetch("http://localhost:3002/posts?_sort=id&_order=asc") // penambahan sort dan order berdasarkan parameter
      .then((response) => response.json()) // ubah response data dari URL API menjadi sebuah data JSON
      .then((jsonHasilAmbilDariAPIBasket) => {
        // data JSON hasil ambil dari API kita masukkan ke dalam listArtikel pada state
        this.setState({
          listBasket: jsonHasilAmbilDariAPIBasket,
        });
      });

    let total = this.state.listBasket.reduce(function (prev, current) {
      return prev + +current.harga;
    }, 0);
    // console.log(total);
    this.setState({
      sum: total,
    });
    console.log(this.state.sum);
  }

  componentDidMount() {
    // komponen untuk mengecek ketika component telah di-mount-ing, maka panggil API
    this.ambilDataDariServerAPI(); //  ambil data dari server API lokal
    this.ambilDataDariServerAPIBasket();
  }

  handleBuyProduct = (data) => {
    fetch(`http://localhost:3001/posts/${data}`)
      .then((response) => response.json()) // ubah response data dari URL API menjadi sebuah data JSON
      .then((jsonHasilAmbilDariAPIBuyIdVal) => {
        // data JSON hasil ambil dari API kita masukkan ke dalam listArtikel pada state
        this.setState({
          tmpBasket: jsonHasilAmbilDariAPIBuyIdVal,
        });
      })
      .then(this.updateStock)
      // .then(this.updateStockCatalog(data))
      .then(this.handleAddtoBasket);
    // .then(() => {
    //   this.ambilDataDariServerAPIBasket();
    // });
  };

  handleAddtoBasket = () => {
    fetch("http://localhost:3002/posts", {
      method: "POST",
      body: JSON.stringify({
        id: this.state.tmpBasket["id"],
        nama_produk: this.state.tmpBasket["nama_produk"],
        harga: this.state.tmpBasket["harga"],
        gambar: this.state.tmpBasket["gambar"],
        stok: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

  handleDelBasket = (data) => {
    fetch(`http://localhost:3002/posts/${data}`, {
      method: "DELETE",
    }).then(() => {
      this.ambilDataDariServerAPIBasket();
    });
  };

  updateStock = () => {
    let decrement = -1;
    let clonedTmpBasket = { ...this.state.tmpBasket };
    clonedTmpBasket["stok"] = this.state.tmpBasket["stok"] + decrement;
    this.setState({
      tmpBasket: clonedTmpBasket,
      tmpProduct: clonedTmpBasket,
    });
  };

  // updateStockCatalog = (data) => {
  //   fetch(`http://localhost:3001/posts/${data}`, {
  //     method: "PATCH",
  //     body: JSON.stringify({
  //       stok: this.state.tmpProduct["stok"],
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   });
  // };

  render() {
    return (
      <div className="container-fluid bg-info">
        <nav className="navbar navbar-expand-lg bg-dark fixed-top justify-content-center">
          <ul class="navbar-nav mx-auto">
            <h1 class="display-2 text-info">Hunayn Official Store</h1>
          </ul>
        </nav>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <Router>
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4 text-center">
              <Link to="/home" className="text-dark font-weight-bold lead">
                <kbd>Home</kbd>
              </Link>

              <Link
                to="/catalog"
                onClick={() => {
                  this.ambilDataDariServerAPI();
                }}
                className="ml-5 text-dark font-weight-bold lead"
              >
                <kbd>Catalog</kbd>
              </Link>

              <Link
                to="/cart"
                onClick={() => {
                  this.ambilDataDariServerAPIBasket();
                }}
                className="ml-5 text-dark font-weight-bold lead"
              >
                <kbd>Cart</kbd>
              </Link>
              <Link
                to="/about"
                className="ml-5 text-dark font-weight-bold lead"
              >
                <kbd>About</kbd>
              </Link>
            </div>
            <div className="col-4"></div>

            <Switch>
              <Route path="/home">
                <br />
                <br />
                <div
                  className="container-fluid px-0"
                  style={{ height: "1257x" }}
                >
                  <AuthButton />
                  <div
                    className="row ml-5 mr-5"
                    style={{ paddingBottom: "10px" }}
                  >
                    <h1
                      class="display-4 text-dark"
                      style={{ paddingLeft: "315px" }}
                    >
                      Welcome you to our Outlet
                    </h1>
                    <h3
                      class="display-5 text-dark"
                      style={{ paddingLeft: "417px" }}
                    >
                      <small>best must-have kitchen appliances retailer</small>
                    </h3>
                  </div>
                </div>
                <Home />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
              <PrivateRoute path="/catalog">
                <br />
                <br />
                <div className="container-fluid px-0">
                  <AuthButton />
                  <div className="row" style={{ paddingBottom: "10px" }}>
                    <div className="col-4"></div>
                    <div className="col-4">
                      <h1 class="display-4 text-dark">Products Available</h1>
                    </div>
                    <div className="col-4"></div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <table className="table table-dark">
                        <thead>
                          <tr>
                            <th style={{ paddingLeft: "180px" }}>Barang</th>
                            <th
                              style={{
                                paddingLeft: "110px",
                                paddingRight: "30px",
                              }}
                            >
                              Gambar
                            </th>
                            <th style={{ paddingRight: "60px" }}>Stok</th>
                            <th style={{ paddingRight: "45px" }}>Harga</th>
                            <th style={{ paddingRight: "30px" }}>Action</th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                </div>
                {this.state.listProduct.map((product) => {
                  // looping dan masukkan untuk setiap data yang ada di listArtikel ke variable artikel
                  return (
                    <MarketModel
                      key={product.id}
                      idProduct={product.id}
                      namaProduct={product.nama_produk}
                      hargaProduct={product.harga}
                      photoProduct={product.gambar}
                      stockProduct={product.stok}
                      buyProduct={this.handleBuyProduct}
                    />
                  ); // mappingkan data JSON dari API sesuai dengan kategorinya
                })}
              </PrivateRoute>

              <PrivateRoute path="/cart">
                <br />
                <br />
                <div className="container-fluid px-0">
                  <AuthButton />
                  <div className="row" style={{ paddingBottom: "10px" }}>
                    <div className="col-4"></div>
                    <div className="col-4">
                      <h1 class="display-4 text-dark">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Your Basket
                      </h1>
                    </div>
                    <div className="col-4"></div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <table className="table table-dark">
                        <thead>
                          <tr>
                            <th style={{ paddingLeft: "180px" }}>Barang</th>
                            <th
                              style={{
                                paddingLeft: "70px",
                                paddingRight: "40px",
                              }}
                            >
                              Gambar
                            </th>
                            <th style={{ paddingRight: "60px" }}>Qty</th>
                            <th style={{ paddingRight: "50px" }}>Harga</th>
                            <th style={{ paddingRight: "35px" }}>Action</th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                </div>
                {this.state.listBasket.map((basket) => {
                  // looping dan masukkan untuk setiap data yang ada di listArtikel ke variable artikel
                  return (
                    <Basket
                      key={basket.id}
                      idBasket={basket.id}
                      namaBasket={basket.nama_produk}
                      hargaBasket={basket.harga}
                      photoBasket={basket.gambar}
                      stockBasket={basket.stok}
                      delBasket={this.handleDelBasket}
                    />
                  ); // mappingkan data JSON dari API sesuai dengan kategorinya
                })}
                <div className="container-fluid px-0">
                  <div className="row">
                    <div className="col-12">
                      <table className="table table-dark">
                        <tr>
                          <th style={{ paddingLeft: "105px" }}>Total</th>
                          <th style={{ paddingLeft: "780px" }}>
                            {this.state.sum}
                          </th>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>

                {/* {
                  <div>
                    <BasketTotal totalPrice={this.state.sum} />
                  </div>
                } */}
              </PrivateRoute>
              <Route path="/about">
                <br />
                <br />
                <div className="container-fluid px-0">
                  <AuthButton />
                  <div className="row" style={{ paddingBottom: "10px" }}>
                    <div className="col-4"></div>
                    <div className="col-4">
                      <h1
                        class="display-4 text-dark"
                        style={{ paddingLeft: "105px" }}
                      >
                        About me
                      </h1>
                    </div>
                    <div className="col-4"></div>
                  </div>
                  <About />
                </div>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default MarketView;
