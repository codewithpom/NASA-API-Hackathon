import { HashRouter, Switch, Route } from "react-router-dom";
import Apod from "./pages/Apod"
import About from "./pages/About"
import ImgSearch from "./pages/ImgSearch";
import Index from "./pages/Index";
import Navbar from "./components/Navbar";
import ImgDetail from "./pages/ImgDetail";
import NotFound from "./pages/NotFound";
import Footer from "./pages/Footer";




function App() {
    return (
        <HashRouter basename={"/"}>
            <Navbar title={"Space Exploration"} aboutText={"About Us"} aboutLink={"/about"} />
            <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/apod" exact component={Apod} />
                <Route path="/about" exact component={About} />
                <Route path="/search" exact component={ImgSearch} />
                <Route path="/image/:id" exact component={ImgDetail} />
                <Route path="/404" exact component={NotFound} />
                <Route path="/" component={NotFound} />
            </Switch>
            <Footer />
        </HashRouter>
    )
}


export default App;
