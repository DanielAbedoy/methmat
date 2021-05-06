import React, { Component } from 'react';
import classnames from 'classnames';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

import Algoritmo from './Algoritmo';
import Instrucciones from './Instrucciones';
import Form from './Form';


class Primeras extends Component{

  state = {
    activeTab: '3',
  }

  toggle = (p) => this.setState({activeTab:p});

  render() {
    return (
      <>
        <Nav tabs className="bg-transparent" style={{boxShadow:"0px -10px 25px 2px rgba(0,255,255,0.057)"}}  >
          <NavItem>
            <NavLink
              href="#"
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => {
                this.toggle('1');
              }}
            >
              <b>Algoritmo</b>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => {
                this.toggle('2');
              }}
            >
              <b>Instrucciones</b>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => {
                this.toggle('3');
              }}
            >
              <b>Formulario</b>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab} style={{boxShadow:"0px 10px 25px 2px rgba(0,255,255,0.057)"}}>

          <TabPane tabId="1"><Algoritmo /></TabPane>
          <TabPane tabId="2"><Instrucciones /></TabPane>
          <TabPane tabId="3"><Form /></TabPane>
          
        </TabContent>
      </>
      
    );
  }

}

export default Primeras;