import React from "react";
import {render} from "react-dom";
import Header from "./pages/header.js";
import Search from "./pages/search.js";
import Footer from "./pages/footer.js";
import "../css/common.css";
import "../css/app.css";
import timg from "../images/timg.jpg";

class App extends React.Component{
    render(){
        return(
            <div className="container">
                <Header />
                <Search />
                <Footer />
            </div>
        )
    }
}

render(<App />,document.getElementById("root"));