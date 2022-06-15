import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./container/Header";
import ProductListing from "./container/ProductListing";
import ProductDetails from "./container/ProductDetails";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={ProductListing} />
          <Route exact path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
