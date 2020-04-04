import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col, FormGroup, CustomInput, Label, Input, Modal, ModalHeader, ModalFooter, ModalBody, Button } from "reactstrap"
import Pedia from "./components/Pedia"
import { FISH_NORTH, FISH_SOUTH, BUGS_NORTH, BUGS_SOUTH } from "./constants/items"

class App extends Component {

  constructor(props) {
    super(props);
    var caught = JSON.parse(localStorage.getItem('caught')) || {'fish': [], 'bugs': []}
    var hemisphere = localStorage.getItem('hemisphere') || "north"
    var type = localStorage.getItem('type') || "bugs"
    this.state = {caught, hemisphere, today: false, now: false, new: false, leaving: false, modal: false, uncaught: false, item: 0, type}
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

  toggleHemisphere = () => {
    var hemisphere
    if (this.state.hemisphere === "north") {
      hemisphere = "south"
    } else {
      hemisphere = "north"
    }
    localStorage.setItem("hemisphere", hemisphere)
    this.setState({hemisphere})
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

    var items
    if (this.state.hemisphere === "north") {
      items = (this.state.type === "bugs") ? BUGS_NORTH : FISH_NORTH
    } else {
      items = (this.state.type === "bugs") ? BUGS_SOUTH : FISH_SOUTH
    }

    startTimeDate.setHours(items[this.state.item].startTime);
    endTimeDate.setHours(items[this.state.item].endTime);

    var options = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };

    return (
      <Container fluid>
        <Row>
          <Col className="pt-2 d-flex justify-content-center align-items-center">
            <img src={"logo.png"} alt="Critterpedia Logo" />
          </Col>
        </Row>
        <Row className="p-2">
          <Col xs={7} className="d-flex flex-column justify-content-center align-items-center">
            <FormGroup inline className="float-left">
              North <CustomInput onChange={this.toggleHemisphere} checked={this.state.hemisphere === "south"} type="switch" className="my-switch" id="hemisphereSwitch" name="hemisphereSwitch" inline /> South
            </FormGroup>
            {'   '}
            <FormGroup inline className="float-left">
              Bugs <CustomInput onChange={this.togglePedia} checked={this.state.type === "fish"} type="switch" className="my-switch" id="typeSwitch" name="typeSwitch" inline /> Fish
            </FormGroup>
          </Col>
          <Col xs={5} className="d-flex flex-column align-items-center">
            <div className="d-flex flex-column align-items-start">
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" onChange={this.onChange} name="now" checked={this.state.now} /> NOW
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" onChange={this.onChange} name="today" checked={this.state.today} /> Today
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" onChange={this.onChange} name="leaving" checked={this.state.leaving} /> Leaving
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" onChange={this.onChange} name="new" checked={this.state.new} /> New
                </Label>
              </FormGroup>
              <FormGroup check inline>
              <Label check>
                  <Input type="checkbox" onChange={this.onChange} name="uncaught" checked={this.state.uncaught} /> Uncaught
                </Label>
              </FormGroup>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Pedia 
              items={items}
              type={this.state.type}
              caught={this.state.caught} 
              today={this.state.today} 
              now={this.state.now}
              leaving={this.state.leaving}
              new={this.state.new}
              uncaught={this.state.uncaught}
              openItem={this.openItem}
            />
            <div>
              <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={"entryModal"}>
                <ModalHeader toggle={this.toggleModal} close={closeBtn}>{items[this.state.item].name}</ModalHeader>
                <ModalBody>
                  <ul>
                    <li>Location: {items[this.state.item].location}</li>
                    {
                      items[this.state.item].months.length === 12 ? 
                      <li>Months: All year</li> :
                      <li>Months: {items[this.state.item].monthsAvailable()}</li>
                    }
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
