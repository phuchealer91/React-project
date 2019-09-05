import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MyDatas from './../Product/data.json'
class Detail extends Component {
    format_curency = (price)=> {
        return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
      }
    render() {
        var pid = this.props.match.params.id;
        return (
            <div>
              {  
             MyDatas.map((item,index)=>{
                if(parseInt(pid) === item.id){
                  return  <div key={index}>
                            <h1>Tên sản phẩm : {item.name}</h1>
                            <h2>Giá sản phẩm : {this.format_curency(item.price)} VND</h2>
                        </div>
                }
                else return '';
            })
            }
            </div>
        );
    }
}

export default Detail;