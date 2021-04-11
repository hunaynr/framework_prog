import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Basket = (props) => {
  return (
    <div className="container-fluid bg-secondary">
      <div className="row">
        <div className="col-12 mt-4">
          <table className="table table-dark">
            {/* <thead>
              <tr>
                <th>Barang</th>
                <th>Action</th>
              </tr>
            </thead> */}
            <tbody>
              <tr>
                <td style={{ paddingLeft: "90px", paddingTop: "50px" }}>
                  <p className="text-justify">{props.namaBasket}</p>
                </td>
                <td style={{ paddingLeft: "130px", paddingRight: "90px" }}>
                  <img
                    src={props.photoBasket}
                    width="200"
                    height="150"
                    alt="show"
                  />
                </td>
                <td
                  style={{
                    width: "5%",
                    paddingLeft: "55px",
                    paddingRight: "50px",
                    paddingTop: "65px",
                  }}
                >
                  {props.stockBasket}
                </td>
                <td
                  style={{
                    paddingLeft: "120px",
                    paddingRight: "120px",
                    paddingTop: "65px",
                  }}
                >
                  {props.hargaBasket}
                </td>
                <td
                  style={{
                    width: "5%",
                    paddingRight: "90px",
                    paddingTop: "65px",
                  }}
                >
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => props.delBasket(props.idBasket)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Basket;
