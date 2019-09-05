import React, { Component } from 'react';

class ListLink extends Component {
    render() {
        return (
            <div>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  {this.props.children}
                  <span className="badge badge-primary badge-pill">{this.props.numbers}</span>
                </li>
            </div>
        );
    }
}

export default ListLink;