import * as React from 'react';
import './App.css';
import Header from "../Header";
import Footer from "../Footer";
import ContactUs from "../ContactUs";
import Home from '../Home';
import Login from '../Login';
import Register from '../Register';
import Cart from '../Cart';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {

  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
    <div id="wrapper">
      <BrowserRouter>
        <div>
          <Header/>
          <Switch>
            <Route path="/contactus" component={ContactUs} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/cart" component={Cart} />
            <Route path="/" component={Home} />
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
      <a href="#" id="scroll-top" title="Scroll to Top"><i className="fa fa-angle-up"></i></a>
    </div>
    );
  }

}

export default App;
