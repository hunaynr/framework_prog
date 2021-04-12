import GetAPI from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete";

// Daftar API - GET
const getBioMhs = () => GetAPI("mahasiswa?_sort=id&_order=desc");
// Daftar API - POST
const postBioMhs = (dataYgDiKirim) => PostAPI("mahasiswa", dataYgDiKirim);
// Daftar API - DELETE
const deleteBioMhs = (dataYgDiHapus) => DeleteAPI("mahasiswa", dataYgDiHapus);

const API = {
  // inisialisasi function-function yang akan disediakan global API
  getBioMhs,
  postBioMhs,
  deleteBioMhs,
};

export default API;
