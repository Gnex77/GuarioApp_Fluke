'use strict';

var React = require('react/addons');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;

var MenuItem = React.createClass({
  mixins: [PureRenderMixin],
  _clickHandler: function _clickHandler() {
    this.props.onMenuItemClick();
  },
  getInitialState: function() {
    return {};
  },

  render: function () {
    var self = this,
      classes = 'fa fa-fw fa-lg ' + self.props.iconClass,
      activeClass = self.props.isActive ? 'active' : '';

    return (
        <li className={activeClass}><a href="#" onClick={self._clickHandler.bind(self, event)}><i className={classes}></i> {self.props.menuText}</a></li>
      );
  }
});

module.exports = MenuItem;
