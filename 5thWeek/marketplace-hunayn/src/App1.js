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

export default function NestingExample() {
  return (
    <Router>
      <AppBar color="secondary" position="static">
        <Toolbar>
          <TypoGraphy variant="title" color="inherit">
            Hunayn Apparel Store
            <div class="nav">
              <a class="active" href="/">
                Home
              </a>
              <a href="/clothing">Clothing</a>
              <a href="/acc">Accessories</a>
            </div>
          </TypoGraphy>
        </Toolbar>
      </AppBar>

      <div>
        <AppBar color="secondary" position="static">
          <Toolbar>
            <TypoGraphy variant="title" color="inherit">
              Hunayn Apparel Store
              <div class="nav">
                <a class="active" href="/">
                  Home
                </a>
                <a href="/clothing">Clothing</a>
                <a href="/acc">Accessories</a>
              </div>
            </TypoGraphy>
          </Toolbar>
        </AppBar>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/clothing">
            <Clothing />
          </Route>
          <Route path="/acc">
            <Acc />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <br></br>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <div style={{ background: randomColor() }}>
            <img
              src="https://freepngimg.com/thumb/shoes/28530-3-nike-shoes-transparent.png"
              alt="laptop"
              width="300"
            />
            <h2> Nike Shoes</h2>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div style={{ background: randomColor() }}>
            {" "}
            <img
              src="http://www.pngmart.com/files/7/Khaki-Pant-PNG-Transparent-Image.png"
              alt="laptop"
              width="250"
            />
            <h2>Long Trousers</h2>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div style={{ background: randomColor() }}>
            <img
              src="https://www.pngkey.com/png/full/274-2743468_share-this-image-gucci-original-gg-canvas-backpack.png"
              alt="laptop"
              width="200"
            />
            <h2>Medium Bag</h2>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div style={{ background: randomColor() }}>
            <img
              src="https://freepngimg.com/thumb/dress_shirt/7-2-dress-shirt-png-hd.png"
              alt="laptop"
              width="287"
            />
            <h2>Long Sleeve Shirt</h2>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div style={{ background: randomColor() }}>
            <img
              src="https://pngimg.com/uploads/belt/belt_PNG9591.png"
              alt="laptop"
              width="430"
            />
            <h2>Leather Belt</h2>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

function Clothing() {
  return (
    <div>
      <br></br>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <div style={{ background: randomColor() }}>
            {" "}
            <img
              src="http://www.pngmart.com/files/7/Khaki-Pant-PNG-Transparent-Image.png"
              alt="laptop"
              width="250"
            />
            <h2>Long Trousers</h2>
          </div>
        </Grid>

        <Grid item xs={6}>
          <div style={{ background: randomColor() }}>
            <img
              src="https://freepngimg.com/thumb/dress_shirt/7-2-dress-shirt-png-hd.png"
              alt="laptop"
              width="287"
            />
            <h2>Long Sleeve Shirt</h2>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
