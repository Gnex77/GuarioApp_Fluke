'use strict';

var React = require('react/addons'),
  Modal = require('react-bootstrap').Modal;


var AddUserComponent = React.createClass({
  _addUserClickHandler: function _addUserClickHandler() {
    var fName = React.findDOMNode(this.refs.firstName).value.trim(),
      lName = React.findDOMNode(this.refs.lastName).value.trim();

      this.props.addUser(fName, lName);
  },
  render: function () {
    var self = this,
      showModal = self.props.showModal,
      closeModal = self.props.closeModal;
    return (
      <Modal show={showModal} onHide={closeModal}>
        <form onSubmit={self._addUserClickHandler}>
          <Modal.Header closeButton>
            <Modal.Title>Add User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" className="form-control" id="firstName" placeholder="First Name" ref="firstName" />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" className="form-control" id="lastName" placeholder="Last Name" ref="lastName" />
              </div>

          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-primary" type="submit" name="button"><i className="fa fa-check"></i> Submit</button>
          </Modal.Footer>
        </form>
        </Modal>
      );
  }
});

module.exports = AddUserComponent;
