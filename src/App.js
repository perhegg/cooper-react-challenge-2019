import React, { Component } from 'react';
import DisplayCooperResult from './Components/DisplayCooperResult';
import InputFields from "./Components/InputFields";
import LoginForm from './Components/LoginForm';
import { authenticate } from './Modules/Auth';
import DisplayPerformanceData from './Components/DisplayPerformanceData'
import DisplayResult from './Components/displayResults';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: '',
      gender: 'female',
      age: '',
      renderLoginForm: false,
      authenticated: false,
      email: '',
      password: '',
      message: '',
      entrySaved: false,
      renderIndex: false,
      weight: '',
      height: '',
      method: 'metric'
    }
  }

  handleChange(event) {
    const target = event.target
    this.setState({
      [target.name]: target.value
    })
  }

  entryHandler() {
    this.setState({ entrySaved: true, updateIndex: true });
  }

  indexUpdated() {
    this.setState({ updateIndex: false });
  }

  onChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
      entrySaved: false
    })
  }
  
  async onLogin(e) {
    e.preventDefault();
    let resp = await authenticate(this.state.email, this.state.password)
    if (resp.authenticated === true) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: resp.message, renderLoginForm: false })
    }
  }

  render() {
    let renderLogin;
    let user;
    let performanceDataIndex;
    const methodList = ["metric", "imperial"]


    if (this.state.authenticated === true) {
      user = JSON.parse(sessionStorage.getItem('credentials')).uid;
      renderLogin = (
        <p>Hi {user}</p>
      )
      if (this.state.renderIndex === true) {
        performanceDataIndex = (
          <>
            <DisplayPerformanceData
              updateIndex={this.state.updateIndex}
              indexUpdated={this.indexUpdated.bind(this)}
            />
            <button onClick={() => this.setState({ renderIndex: false })}>Hide past entries</button>
          </>
        )
      } else {
        performanceDataIndex = (
          <button id="show-index" onClick={() => this.setState({ renderIndex: true })}>Show past entries</button>
        )
      }
    } else {
      if (this.state.renderLoginForm === true) {
        renderLogin = (
          <>
            <LoginForm 
              loginHandler={this.onLogin.bind(this)}
              inputChangeHandler={this.onChange.bind(this)}
            />
          </>
        )
      } else {
        renderLogin = (
          <>
            <button id="login" onClick={() => this.setState({ renderLoginForm: true })}>Login</button>
            <p>{this.state.message}</p>
          </>
        )
      }
    }

    return (
      <div>
        <InputFields 
          inputChangeHandler={this.onChange.bind(this)}
        />
        <DisplayCooperResult
          distance={this.state.distance}
          gender={this.state.gender}
          age={this.state.age}
          authenticated={this.state.authenticated}
          entrySaved={this.state.entrySaved}
          entryHandler={this.entryHandler.bind(this)}
        />
        {performanceDataIndex}
        {renderLogin}

        <div className="mainComponent">
        <div>
          <label>Weight{this.state.method === "metric" ? "(kg)" : "(lbs)"}</label>
          <input
            name="weight"
            value={this.state.weight}
            onChange={this.handleChange.bind(this)}/>
        </div>
        <div>
          <label>Height{this.state.method === "metric" ? "(cm)" : "(inches)"}</label>
          <input
            name="height"
            value={this.state.height}
            onChange={this.handleChange.bind(this)}/>
          <p>
            <select onChange={this.handleChange.bind(this)} name="method" id="methodSelect" >
              {methodList.map(method => (
                <option key={method} value={method}>{method}</option>
              ))}
            </select>
          </p>
        </div>
        <DisplayResult 
        weight={this.state.weight} 
        height={this.state.height} 
        method={this.state.method}
        />
      </div>
      </div>

    );
  }
}

export default App;