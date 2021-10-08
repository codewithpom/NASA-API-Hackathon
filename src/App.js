import { HashRouter, Switch, Route } from "react-router-dom";
import Apod from "./pages/Apod"
import ImgSearch from "./pages/ImgSearch";
import Index from "./pages/Index";
import Navbar from "./components/Navbar";
import ImgDetail from "./pages/ImgDetail";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import BookMarks from "./pages/BookMarks";




function App() {
    return (
        <HashRouter basename={"/"}>
            <Navbar title={"Space Exploration"} aboutText={"About Us"} aboutLink={"/about"} />
            <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/apod" exact component={Apod} />
                <Route path="/search" exact component={ImgSearch} />
                <Route path="/image/:id" exact component={ImgDetail} />
                <Route path="/login" exact component={Login} />
                <Route path="/404" exact component={NotFound} />
                <Route path="/bookmarks" exact component={BookMarks} />
                <Route path="/" component={NotFound} />
            </Switch>
            <Footer />
        </HashRouter>
    )
}


export default App;
