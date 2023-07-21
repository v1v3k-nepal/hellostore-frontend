import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import AppContext from "./utils/context";
import PaymentSuccess from "./components/PaymentStatus/PaymentSuccess"
import PaymentFailure from "./components/PaymentStatus/PaymentFailure"
import PaymentRedirection from "./components/PaymentStatus/PaymentRedirection";


function App(){
    return(
        <BrowserRouter>
            <AppContext>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/category/:id" element={<Category/>}/>
                    <Route path="/product/:id" element={<SingleProduct/>}/>
                    <Route exact path="/payment/" element={<PaymentRedirection/>}/>
                    {/* <Route exact path="/success/" element={<PaymentSuccess />}/> */}
                    {/* <Route exact path="/failure/" element={<PaymentFailure />}/> */}
                </Routes>
                <Newsletter/>
                <Footer/>
            </AppContext>
        </BrowserRouter>
    );
}

export default App;