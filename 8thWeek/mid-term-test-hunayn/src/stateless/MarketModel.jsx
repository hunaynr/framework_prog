import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MarketModel = (props) => {
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
                  <p className="text-justify">{props.namaProduct}</p>
                </td>
                <td style={{ paddingLeft: "130px", paddingRight: "90px" }}>
                  <img
                    src={props.photoProduct}
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
                  {props.stockProduct}
                </td>
                <td
                  style={{
                    paddingLeft: "120px",
                    paddingRight: "120px",
                    paddingTop: "65px",
                  }}
                >
                  {props.hargaProduct}
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
                    className="btn btn-info"
                    onClick={() => props.buyProduct(props.idProduct)}
                  >
                    Buy
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
export default MarketModel;
