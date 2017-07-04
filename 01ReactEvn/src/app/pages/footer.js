import React from "react";
import Code from "../components/code.js";

export default class Header extends React.Component{
    render(){
        return(
            <div className="footer">
                <Code />
               <p>我是百度的底部</p>
            </div>
        )
    }
}