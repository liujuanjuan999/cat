import React,{Component} from "react";
import "../../css/search.less";

export default class Search extends Component{
    render(){
        return(
            <div className="logo">
                <img src="//www.baidu.com/img/bd_logo1.png" alt="logo"/>
                <div className="search">
                    <input className="search-input" type="text"/>
                    <input className="search-btn" type="button" value="百度一下"/>
                </div>
            </div>
        )
    }
}