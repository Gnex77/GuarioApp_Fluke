'use strict';

var React = require('react/addons');

// CSS
require('normalize.css');
require('../styles/main.css');

var GuarioApp = React.createClass({
  render: function() {
    return (
      <div className="wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3 col-md-2 sidebar">
              <ul className="nav nav-sidebar">
                <li className="active"><a href="#"><i className="fa fa-fw fa-lg fa-user"></i> Users <span className="sr-only">(current)</span></a></li>
                <li><a href="#"><i className="fa fa-fw fa-lg fa-users"></i> Groups</a></li>
              </ul>

            </div>
            <div className="col-sm-9 col-md-10 main">
              <div className="list-view">
                <ul className="list-unstyled">
                  <li>Dylan, Bob</li>
                  <li>Tyler, Steve</li>
                  <li>Wilson, Ann</li>
                </ul>
              </div>
              <div className="fab-create">
                <button className="btn btn-success fab-btn" type="button" name="button"><i className="fa fa-plus fa-2x"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
React.render(<GuarioApp />, document.getElementById('content')); // jshint ignore:line

module.exports = GuarioApp;
