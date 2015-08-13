'use strict';

var React = require('react/addons');

//var Actions = require('actions/xxx')



var MenuItem = React.createClass({
  mixins: [],
  clickHandler: function clickHandler() {
    // e.preventDefault();
    this.props.onMenuItemClick();
  },
  getInitialState: function() {
    return {};
  },
  // getDefaultProps: function() {},
  // componentWillMount: function() {},
  // componentDidMount: function() {},
  // shouldComponentUpdate: function() {},
  // componentDidUpdate: function() {},
  // componentWillUnmount: function() {},

  render: function () {
    var self = this,
      classes = 'fa fa-fw fa-lg ' + this.props.iconClass,
      activeClass = this.props.isActive ? 'active' : '';

    return (
        <li className={activeClass}><a href="#" onClick={self.clickHandler.bind(self, event)}><i className={classes}></i> {this.props.menuText}</a></li>
      );
  }
});

module.exports = MenuItem;
