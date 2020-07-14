import React from 'react';
import { Button, Form } from 'react-bootstrap';
import '../css/App.css';
import Calculator from './Calculator';

class AppOld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Tom',
      count: 0,
      date: new Date(),
      isToggleOn: true,
      email: ''
    };

    this.handleClickToggleOn = this.handleClickToggleOn.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(name) {
    this.setState({ name: name })
  }

  handleClickPuls() {
    this.setState({ count: this.state.count + 1 })
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    // setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  handleClickToggleOn() {
    this.setState({ isToggleOn: !this.state.isToggleOn });
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.email);
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <h1>こんにちは、{this.state.name}</h1>
        <Button onClick={() => {
          this.handleClick('ひつじ仙人')
        }} className="m-2" variant="primary">ひつじ仙人</Button>
        <Button onClick={() => {
          this.handleClick('にんじゃわんこ')
        }} className="m-2" variant="primary">にんじゃわんこ</Button>

        <h1>{this.state.count}</h1>
        <Button onClick={() => {
          this.handleClickPuls()
        }} className="m-2" variant="primary">+</Button>

        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
        <Button onClick={this.handleClickToggleOn}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </Button>

        <Form  onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"  onChange={this.handleChange} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            <Button variant="success" type="submit">
              送信
            </Button>
          </Form.Group>
        </Form>

        <Calculator />
      </div>
    );
  }
}

export default AppOld;
