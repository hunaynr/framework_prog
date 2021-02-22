import React from "react";
// Component menggunakan Function
const Footer = (props) => {
  return (
    <div>
      <h3>Halaman Footer</h3>
      <h3>Component ini dibuat menggunakan Function bukan Class</h3>
      <li>Nilai ini ditampilkan dari props: {props.judul}</li>
      <li>Nama Saya: {props.nama}</li>
    </div>
  );
};
export default Footer;
