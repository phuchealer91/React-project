//Item.js
import React, { Component } from 'react';
import '../Product/Product.css'
import {Link} from "react-router-dom";

class Item extends Component {
    
    format_curency = (price)=> {
        return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
      }
    to_slug = (str) =>{
          // Chuyển hết sang chữ thường
          str = str.toLowerCase();     
      
          // xóa dấu
          str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
          str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
          str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
          str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
          str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
          str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
          str = str.replace(/(đ)/g, 'd');
      
          // Xóa ký tự đặc biệt
          str = str.replace(/([^0-9a-z-\s])/g, '');
      
          // Xóa khoảng trắng thay bằng ký tự -
          str = str.replace(/(\s+)/g, '-');
      
          // xóa phần dự - ở đầu
          str = str.replace(/^-+/g, '');
      
          // xóa phần dư - ở cuối
          str = str.replace(/-+$/g, '');
      
          // return
          return str;
      }
    render() {
        const {price,children,pid} = this.props;
        return (
          <div className="col-sm-12 col-md-4 mt-3">
          <div className="card" >
              <img className="card-img-top" src="https://cdn.24h.com.vn/upload/2-2019/images/2019-04-13/1555146992-282-anh-1-1555144606-width650height867.jpg" alt="" width="500" height="350"/>
              <div className="card-body">
                  <h5 className="card-title">{children}</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <div className="row row-left">
                      <div className="col-sm-12 col-md-8">
                          <p className="price mt-2">
                              {this.format_curency(price)} VND
                           </p>
                      </div>
                      <div className="col-sm-12 col-md-4">
                          <Link to={"chi-tiet/"+ pid + "/"+ this.to_slug(children) +".html"} className="btn btn-success" style={{ float: 'right' }}>Chi Tiết</Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
        );
    }
}

export default Item;