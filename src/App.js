import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col, FormGroup, CustomInput, Label, Input, Modal, ModalHeader, ModalFooter, ModalBody, Button } from "reactstrap"
import Pedia from "./components/Pedia"
import { FISH, BUGS } from "./constants/items"

function getCurrentMonthName(month){
  var monthNamelist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  return monthNamelist[month];
};

class App extends Component {

  constructor(props) {
    super(props);
    var caught = JSON.parse(localStorage.getItem('caught')) || {'fish': [], 'bugs': []}
    var type = localStorage.getItem('type') || "bugs"
    this.state = {caught, onlyToday: false, onlyNow: false, modal: false, item: 0, type}
  }

  markCaught = () => {
    var caught = this.state.caught
    caught[this.state.type].push(this.state.item)
    localStorage.setItem('caught', JSON.stringify(caught))
    this.setState({caught, modal: false})
  }

  unmarkCaught = () => {
    var caught = this.state.caught;
    caught[this.state.type] = caught[this.state.type].filter(i => i !== this.state.item);
    localStorage.setItem('caught', JSON.stringify(caught))
    this.setState({caught, modal: false})
  }

  onChange = (event) => {
    var state = this.state;
    state[event.target.name] = !state[event.target.name]
    this.setState(state);
  }

  openItem = (i) => {
    this.setState({item: i, modal: true})
  }

  toggleModal = () => {
    this.setState({modal: !this.state.modal})
  }

  togglePedia = () => {
    var type
    if (this.state.type === "fish") {
      type = "bugs"
    } else {
      type = "fish"
    }
    localStorage.setItem("type", type)
    this.setState({type})
  }

  render() {
    const closeBtn = <button className="close" onClick={this.toggleModal}>&times;</button>;
    const startTimeDate = new Date(0);
    const endTimeDate = new Date(0);

    var items = (this.state.type === "bugs") ? BUGS : FISH
    startTimeDate.setHours(items[this.state.item].startTime);
    endTimeDate.setHours(items[this.state.item].endTime);

    var options = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };

    return (
      <Container fluid>
        <Row className="p-2">
          <Col>
            <FormGroup>
              Bugs <CustomInput onChange={this.togglePedia} checked={this.state.type === "fish"} type="switch" id="typeSwitch" name="typeSwitch" inline /> Fish
            </FormGroup>
          </Col>
          <Col>
            <FormGroup check inline className="float-right">
              <Label check>
                <Input type="checkbox" onChange={this.onChange} name="onlyNow" checked={this.state.onlyNow} /> Available NOW
              </Label>
            </FormGroup>
            <FormGroup check inline className="float-right">
              <Label check>
                <Input type="checkbox" onChange={this.onChange} name="onlyToday" checked={this.state.onlyToday} /> Available this month
              </Label>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Pedia 
              items={items}
              type={this.state.type}
              caught={this.state.caught} 
              onlyToday={this.state.onlyToday} 
              onlyNow={this.state.onlyNow}
              openItem={this.openItem}
            />
            <div>
              <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={"entryModal"}>
                <ModalHeader toggle={this.toggleModal} close={closeBtn}>{items[this.state.item].name}</ModalHeader>
                <ModalBody>
                  <ul>
                    <li>Location: {items[this.state.item].location}</li>
                    <li>Months: {items[this.state.item].monthsAvailable()}</li>
                    {
                      items[this.state.item].startTime === 0 && items[this.state.item].endTime === 24 ? 
                      <li>Time: All day</li> :
                      <li>Time: {startTimeDate.toLocaleTimeString('en-US', options)} - {endTimeDate.toLocaleTimeString('en-US', options)}</li>
                    }
                  </ul>
                </ModalBody>
                <ModalFooter>
                  {
                    this.state.caught[this.state.type].includes(this.state.item) ?
                    <Button color="danger" onClick={this.unmarkCaught}>Unmark Caught</Button> :
                    <Button color="success" onClick={this.markCaught}>Mark Caught</Button>
                  } {'  '}
                  <Button color="secondary" onClick={this.toggleModal}>Close</Button>
                </ModalFooter>
              </Modal>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
