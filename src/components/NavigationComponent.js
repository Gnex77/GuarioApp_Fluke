'use strict';

var React = require('react/addons');
var MenuItem = require('./MenuItem');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;

var NavigationComponent = React.createClass({
    mixins: [PureRenderMixin],
    menuItems: [
        {
            menuText: 'Users',
            iconClass: 'fa-user',
            isActive: true
        }, {
            menuText: 'Groups',
            iconClass: 'fa-users',
            isActive: false
        }
    ],
    _updatePageNameHandler: function _updatePageNameHandler(menuText) {
      this.props.onPageNameChange(menuText);
    },
    _menuItemClickHandler: function _menuItemClickHandler(menuObject) {
        var self = this,
          newItems = self.state.items.map(function(item, index) {
            item.isActive = (menuObject.index === index) ? true : false;
            return item;
          });

        self._updatePageNameHandler(menuObject.menuText);

        self.setState({
            items: newItems
        });
    },
    getInitialState: function() {
        return {
            items: this.menuItems
        };
    },

    render: function() {
        var self = this,
            items = self.state.items.map(function(item, index) {
              var menuObject = {
                index: index,
                menuText: item.menuText
              };
                return <MenuItem iconClass={item.iconClass} isActive={item.isActive} key={index} menuText={item.menuText} onMenuItemClick={self._menuItemClickHandler.bind(self, menuObject)}/>;
            });
        return (
          <div className="col-sm-3 col-md-2 sidebar">
            <ul className="nav nav-sidebar">
                {items}
            </ul>
          </div>
        );
    }
});

module.exports = NavigationComponent;
