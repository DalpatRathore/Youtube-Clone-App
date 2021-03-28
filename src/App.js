import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/search">
            <div className="app__page">
              <Sidebar></Sidebar>
              <SearchPage></SearchPage>
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar></Sidebar>
              <RecommendedVideos></RecommendedVideos>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
