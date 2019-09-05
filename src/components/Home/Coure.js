import React, { Component } from 'react';

class Coure extends Component {
    render() {
        return (
            <div className="col-sm-6 col-md-4 mt-2">
                  <div className="card" style={{width: '16rem'}}>
                    <div className="card-body">
                      <h4 className="card-title">{this.props.children}</h4>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <p><a href="a.html" className="btn btn-danger">Chi tiết &gt;&gt;</a></p>
                    </div>
                  </div>
                </div>
        );
    }
}

export default Coure;