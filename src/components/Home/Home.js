import React, { Component } from 'react';
import Coure from '../Home/Coure';
import ListLink from './ListLink';
class Home extends Component {
    render() {
        return (
          <div className="row">
            <div className="col-sm-12 col-md-9 col-lg-9">
              {/* <button type="button" class="btn btn-primary"></button> */}
              <div className="jumbotron">
                <h1 className="display-4">Phuc Tai</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <p className="lead">
                  <a className="btn btn-primary btn-lg" href="a.html.html" role="button">Learn more</a>
                </p>
              </div>
              <div className="row">
                <Coure>Lap trinh PHP</Coure>
                <Coure>Lap trinh PHP</Coure>
                <Coure>Lap trinh PHP</Coure>
                <Coure>Lap trinh PHP</Coure>
                <Coure>Lap trinh PHP</Coure>
                <Coure>Lap trinh PHP</Coure>

              </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center active">
                  Bài Viết Hót Tháng 9
                  <span className="badge badge-primary badge-pill">11</span>
                </li>
                <ListLink numbers="1">Việt Nam Vô Địch</ListLink>
                <ListLink numbers="2">Việt Nam Vô Địch</ListLink>
                <ListLink numbers="3">Việt Nam Vô Địch</ListLink>
                <ListLink numbers="4">Việt Nam Vô Địch</ListLink>
                <ListLink numbers="5">Việt Nam Vô Địch</ListLink>
                <ListLink numbers="6">Việt Nam Vô Địch</ListLink>
                <ListLink numbers="7">Việt Nam Vô Địch</ListLink>
                <ListLink numbers="8">Việt Nam Vô Địch</ListLink>
                <ListLink numbers="9">Việt Nam Vô Địch</ListLink>
                <ListLink numbers="10">Việt Nam Vô Địch</ListLink>
                <ListLink numbers="20">Việt Nam Vô Địch</ListLink>
              </ul>
            </div>
          </div>
        );
    }
}

export default Home;