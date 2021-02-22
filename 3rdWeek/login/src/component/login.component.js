import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div class="container">
        <div class="row text-white">
          <div class="col-4"></div>
          <div class="col-4">
            <br></br>
            <div class="card bg-dark">
              <div class="card-body">
                <form>
                  <h3>Form Login</h3>

                  <br></br>
                  <div class="row">
                    <div class="col-4">
                      <label>Username</label>
                    </div>
                    <div class="col-8">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter username"
                      />
                    </div>
                  </div>

                  <br></br>
                  <div class="row">
                    <div class="col-4">
                      <label>Password</label>
                    </div>
                    <div class="col-8">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                      />
                    </div>
                  </div>

                  <br></br>
                  <div className="form-group">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary btn-block">
                    Login
                  </button>
                  <p className="forgot-password text-right">Forgot password?</p>

                  <div class="row">
                    <div class="col-4"></div>
                    <div class="col-4">
                      <button
                        type="submit"
                        className="btn btn-danger btn-block"
                      >
                        Cancel
                      </button>
                    </div>
                    <div class="col-4"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-4"></div>
        </div>
        <br></br>
        <br></br>
      </div>
    );
  }
}
