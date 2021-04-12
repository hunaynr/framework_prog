import React from "react";

const Post = (props) => {
  return (
    <div className="mahasiswa">
      <div className="gambar-artikel">
        <img
          src="https://www.freeiconspng.com/uploads/go-back--gallery-for--contact-person-icon-png-21.png"
          alt="Gambar Thumbnail Artikel"
        />
      </div>
      <div className="attr">
        <div className="attr-nim">
          <b>NIM :</b>
        </div>
        <p className="attr-nama">
          <b>Nama :</b>
        </p>
        <p className="attr-alamat">
          <b>Alamat :</b>
        </p>
        <p className="attr-hp">
          <b>HP :</b>
        </p>
        <p className="attr-angkatan">
          <b>Angkatan :</b>
        </p>
        <p className="attr-status">
          <b>Status :</b>
        </p>
      </div>
      <div className="konten-mahasiswa">
        <div className="nim-mahasiswa">
          <b>{props.nimMahasiswa}</b>
        </div>
        <p className="nama-mahasiswa">
          <b>{props.nama}</b>
        </p>
        <p className="alamat-mahasiswa">
          <b>{props.alamat}</b>
        </p>
        <p className="hp-mahasiswa">
          <b>{props.hp}</b>
        </p>
        <p className="angkatan-mahasiswa">
          <b>{props.angkatan}</b>
        </p>
        <p className="status-mahasiswa">
          <b>{props.status}</b>
        </p>
        <button
          className="btn btn-sm btn-warning"
          onClick={() => props.hapusMahasiswa(props.idMahasiswa)}
        >
          Hapus
        </button>
      </div>
    </div>
  );
};
export default Post;
