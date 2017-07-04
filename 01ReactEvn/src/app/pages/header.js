import React from "react";
import "../../css/header.css";

export default class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <ul>
                    <li><a href="#">新闻</a></li>
                    <li><a href="#">hao123</a></li>
                    <li><a href="#">地图</a></li>
                    <li><a href="#">视频</a></li>
                    <li><a href="#">贴吧</a></li>
                </ul>
            </div>
        )
    }
}