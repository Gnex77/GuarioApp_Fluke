'use strict';

var React = require('react/addons'),
  NavigationComponent = require('./NavigationComponent'),
  ListViewComponent = require('./ListViewComponent'),
  UserData = require('../utils/UserData'),
  PureRenderMixin = require('react/addons').addons.PureRenderMixin,
  AddUserComponent = require('./AddUserComponent'),
  UserAPI = require('../utils/UserAPI');

// CSS
require('normalize.css');
require('../styles/main.css');

// Load Initial User Data
UserData.init();

var GuarioApp = React.createClass({
  mixins: [PureRenderMixin],
  getInitialState: function () {
    return {
      displayList: UserAPI.getUsers(),
      showModal: false,
      pageName: 'Users'
    };
  },
  _closeModal: function _closeModal() {
    this.setState({showModal: false});
  },
  _openModal: function _openModal() {
    this.setState({showModal: true});
  },
  _addUser: function _addUser(fName, lName) {
    var user = lName + ', ' + fName;

      //Update user list
      UserAPI.addUser(user);

      this.setState({
        displayList: UserAPI.getUsers()
      });

      this._closeModal();
  },
  _pageNameUpdate: function _pageNameUpdate(pageName) {
    var list = (pageName === 'Users') ? UserAPI.getUsers() : [];
    this.setState({
      displayList: list,
      pageName: pageName
    });

  },
  render: function() {
    var self = this;
    return (
      <div className="wrapper">
        <div className="container-fluid">
          <div className="row">
              <NavigationComponent onPageNameChange={self._pageNameUpdate} />
            <div className="col-sm-9 col-md-10 main">
              <ListViewComponent list={self.state.displayList} pageName={self.state.pageName} />
              <div className="fab-create">
                <button disabled={self.state.pageName !== 'Users'} className="btn btn-success fab-btn" type="button" name="button" onClick={self._openModal}><i className="fa fa-plus fa-2x"></i></button>
              </div>
            </div>
          </div>
          <AddUserComponent showModal={self.state.showModal} closeModal={self._closeModal} addUser={self._addUser} />
        </div>
      </div>
    );
  }
});
React.render(<GuarioApp />, document.getElementById('content')); // jshint ignore:line

module.exports = GuarioApp;
