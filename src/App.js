import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import IndexPage from "./pages/IndexPage"
import About from "./pages/About"
import ImgSearch from "./pages/ImgSearch";



function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={IndexPage}/>
                <Route path="/about" exact component={About}/>
                <Route path="/search" exact component={ImgSearch} />
            </Switch>
        </Router>
    )
}


export default App;
