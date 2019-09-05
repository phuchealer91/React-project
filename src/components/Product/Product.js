//Lien quan den Item.js
import React, { Component } from 'react';
import Item from './Item';
import MyData from './data.json';
class Product extends Component {

    render() {
        return (
            <div className="mt-5">
                <h1>Product</h1>
                <div className="row">
                    {
                        MyData.map((item,index)=>{
                           return  <Item key={index} 
                           price={item.price}
                           pid={item.id}
                           
                           >{item.name}</Item>
                        })
                    }                    
                </div>
            </div>

        );
    }
}

export default Product;