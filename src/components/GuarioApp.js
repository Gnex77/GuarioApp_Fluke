'use strict';

var React = require('react/addons'),
  NavigationComponent = require('./NavigationComponent'),
  ListViewComponent = require('./ListViewComponent'),
  UserData = require('../utils/UserData'),
  Modal = require('react-bootstrap').Modal,
  PureRenderMixin = require('react/addons').addons.PureRenderMixin,
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
  closeModal: function closeModal() {
    React.findDOMNode(this.refs.firstName).value = '';
    React.findDOMNode(this.refs.lastName).value = '';
    this.setState({showModal: false});
  },
  openModal: function openModal() {
    this.setState({showModal: true});
  },
  addUser: function addUser() {
    var fName = React.findDOMNode(this.refs.firstName).value.trim(),
      lName = React.findDOMNode(this.refs.lastName).value.trim(),
      user = lName + ', ' + fName;

      //Update user list
      UserAPI.addUser(user);

      this.setState({
        displayList: UserAPI.getUsers()
      });

      this.closeModal();
  },
  pageNameUpdate: function pageNameUpdate(pageName) {
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
              <NavigationComponent onPageNameChange={self.pageNameUpdate} />
            <div className="col-sm-9 col-md-10 main">
              <ListViewComponent list={self.state.displayList} pageName={self.state.pageName} />
              <div className="fab-create">
                <button disabled={self.state.pageName !== 'Users'} className="btn btn-success fab-btn" type="button" name="button" onClick={self.openModal}><i className="fa fa-plus fa-2x"></i></button>
              </div>
            </div>
          </div>
          <Modal show={self.state.showModal} onHide={self.closeModal}>
              <Modal.Header closeButton>
                <Modal.Title>Add User</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form>
                  <div className="form-group">
                    <label for="firstName">First Name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="First Name" ref="firstName" />
                  </div>
                  <div className="form-group">
                    <label for="lastName">Last Name</label>
                    <input type="text" className="form-control" id="lastName" placeholder="Last Name" ref="lastName" />
                  </div>
                </form>
              </Modal.Body>
              <Modal.Footer>
                <button className="btn btn-primary" type="button" name="button" onClick={self.addUser}><i className="fa fa-check"></i> Submit</button>

              </Modal.Footer>
            </Modal>
        </div>
      </div>
    );
  }
});
React.render(<GuarioApp />, document.getElementById('content')); // jshint ignore:line

module.exports = GuarioApp;
