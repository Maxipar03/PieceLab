import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Category from "../screen/Category";
import Home from "../screen/Home"
import NavBar from "../components/NavBar/NavBar";
import { Item } from "../screen/Item";

const PublicRouter = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/category/:id" element={<Category />} />
                <Route exact path="/item/:id" element={<Item />} />
            </Routes>
        </Router>
    );
}

    export default PublicRouter