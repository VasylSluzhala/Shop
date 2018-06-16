import * as React from 'react';
import './App.css';
import logo from './logo.svg';

const baseUrl = 'http://localhost:65333';

class App extends React.Component {

  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <button onClick={this.onClickButton}>Test Server</button>
        </header>
      </div>
    );
  }

  private onClickButton = (event: any) => {
        fetch(`${baseUrl}/api/Message`, {
          // body: JSON.stringify({ message:"test string" }),
          // headers: {
          //   'Accept': 'application/json, text/plain, */*',
          //   'Content-Type': 'application/json'
          // },
          method:"POST"
      }).then((res) => {
        // return console.log(res);
      }).then((data) => {
        // console.log(data);
      })
      .catch((e) => {
          alert('Something went wrong :(');
      });
  };
}

export default App;
