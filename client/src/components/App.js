import React from 'react';
import { Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';

import { Layout } from 'antd';

import Home from "./views/Home";
import LoginPage from "./views/Login";
import Registration from "./views/Registration";
import Navigation from "./views/Navigation";
import Footer from "./views/Footer";
import NewOrder from './views/Orders/New';
import OrdersList from './views/Orders/List';

import { loginCheck } from '~/actions/user';

const { Header, Content } = Layout;

class App extends React.Component {
  componentDidMount() {
    this.props.loginCheck();
  }

  render() {
    return (
      <Layout>
        <Header>
          <Navigation/>
        </Header>
        <Content className='flex-center'>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/register" component={Registration}/>
            <Route exact path="/orders/new" component={NewOrder}/>
            <Route exact path="/orders/list" component={OrdersList}/>
          </Switch>
        </Content>
        <Footer/>
      </Layout>
    );
  }
}

export default connect(null, { loginCheck })(App);
