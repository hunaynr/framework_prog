import React from "react";
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

// Pada aplikasi ini memiliki 3 halaman: public page, private page, dan halaman login.
// Untuk masuk ke private page, Anda harus lagin terlebih dahulu.

// Pertama, klik public page. kemudian, kunjungi private page.
// karena anda belum login, jadi anda diarahkan ke halaman login.
// Setelah login, Anda akan diarahkan kembali ke private page.

// Perhatikan perubahan setiap URL. Jika anda mengklik tombol kembalu,
// apakah anda kembali ke halaman login? Tidak, karena anda sudah login.
// Cobalah, maka anda akan kembali ke halaman yang anda kunjungi sebelum login, yaitu public page

export default function AuthExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/private">Private Page</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/public">
            <AuthButton />
            <PublicPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/private">
            <AuthButton />
            <ProtectedPage />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

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
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign Out
      </button>
    </p>
  ) : (
    <p>You are not logged in</p>
  );
}

// Pembungkus untuk <Route> yang mengarahkan ke login
// tampilan jika anda belum terkonfirmasi

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

function PublicPage() {
  return <h3>Public</h3>;
}

function ProtectedPage() {
  return <h3>Private</h3>;
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
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

// Karena route adalah komponene regular react,
// sehingga dapat ditampilkan di mana saja dalam penempatannya,
// termasuk dalam child element.

// Ini akan membantu anda untuk memecah menjadi beberapa bundle
// karena pemisahan kode pada aplikasi React Router sama dengan
// pemecahan kode pada aplikasi react lainnya

// export default function NestingExample() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/topics">Topics</Link>
//           </li>
//         </ul>

//         <hr />

//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/topics">
//             <Topics />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function Topics() {
//   // `path` untuk membuat jalur <Route> yang terhadap rute induk,
//   // sedangkan `url` untuk membuat link.
//   let { path, url } = useRouteMatch();
//   return (
//     <div>
//       <h2>Topics</h2>
//       <ul>
//         <li>
//           <Link to={`${url}/Sate, Nasi goreng`}>Kuliner</Link>
//         </li>
//         <li>
//           <Link to={`${url}/Wisata alam, Museum`}>Traveling</Link>
//         </li>
//         <li>
//           <Link to={`${url}/Ibis, JW Marriott`}>Review Hotel</Link>
//         </li>
//       </ul>

//       <Switch>
//         <Route exact path={path}>
//           <h3>Please select a topic</h3>
//         </Route>
//         <Route path={`${path}/:topicId`}>
//           <Topic />
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// function Topic() {
//   let { topicId } = useParams();

//   return (
//     <div>
//       <h3>{topicId}</h3>
//     </div>
//   );
// }

// Params adalah placeholder di URL yang didahului dengan ttitk dua,
// seperti param `: id` yang didefinisikan dalam route dalam contoh ini

// export default function ParamsExample() {
//   return (
//     <Router>
//       <div>
//         <h2>Accounts</h2>
//         <ul>
//           <li>
//             <Link to="/netflix">Netflix</Link>
//           </li>
//           <li>
//             <Link to="/gmail">Gmail</Link>
//           </li>
//           <li>
//             <Link to="/yahoo">Yahoo</Link>
//           </li>
//           <li>
//             <Link to="/amazon">Amazon</Link>
//           </li>
//         </ul>

//         <Switch>
//           <Route path="/:id" children={<Child />} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Child() {
//   let { id } = useParams();

//   return (
//     <div>
//       <h3>ID: {id}</h3>
//     </div>
//   );
// }

// Situs ini memiliki 3 halaman, yang semuanya dirender secara dinamis di browser
// Meskipun halaman tidak pernah di-refresh, perhatikan bagaimana React Router
// membuat URL selalu terbarui saat anda menavigasi situs.
// Ini menjaga riwayat browser, memastikan hal-hal seperti tombol kembali
// dan bookmark berfungsi dengan baik.

// export default function BasicExample() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//         </ul>
//         <hr />

//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/dashboard">
//             <Dashboard />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// // Anda dapat menganggap komponen ini sebagai "halaman(konten)" di situs anda.

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// function Dashboard() {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
