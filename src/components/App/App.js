import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import InvoiceList from '../InvoiceList';
import LineItemList from '../LineItemList';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={InvoiceList}></Route>
      <Route exact path="/invoices" component={InvoiceList}></Route>
      <Route path="/invoices/:id" component={LineItemList}></Route>
    </Switch>

  );
}


export default App;
