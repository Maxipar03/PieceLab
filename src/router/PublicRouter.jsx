import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Item , Home, Category, NotFound } from "../screen";
import { NavBar } from "../components";


const PublicRouter = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/item/:id" element={<Item />} />
                <Route exact path="/category/:id" element={<Category />} />
                <Route exact path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

    export default PublicRouter