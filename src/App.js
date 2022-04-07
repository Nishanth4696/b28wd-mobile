import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductListApple from './components/ProductList/ProductListApple';
import ProductListAsus from './components/ProductList/ProductListAsus';
import ProductListHauwei from './components/ProductList/ProductListHauwei';
import ProductListLenova from './components/ProductList/ProductListLenova';
import ProductListOppo from './components/ProductList/ProductListOppo';
import ProductListRealme from './components/ProductList/ProductListRealme';
import ProductListSamsung from './components/ProductList/ProductListSamsung';
import ProductListVivo from './components/ProductList/ProductListVivo';
import ProductListSony from './components/ProductList/ProductListSony';
import ProductListBikes from './components/ProductListBikes';
import ProductListAccessories from './components/ProductListAccessories';
import Cart from './components/Basket/Cart';
import Details from './components/Details';
import PageNotFound from './components/PageNotFound';
import Model from './components/Model';
import Copyright from './components/Copyright';

import ServiceForm from './components/ServiceForm';
import ServiceFormComplete from './components/ServiceFormComplete';
import Contact from './components/Contact';
import ProductListNokia from './components/ProductList/ProductListNokia';


export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        
        <Navbar/>
        <Switch>
          <Route exact path='/'component={Home}/>
          <Route exact path='/product' component={ProductList} />
          
          <Route path='/details' component={Details} />
          <Route path='/bikes' component={ProductListBikes} />
          <Route path='/apple' component={ProductListApple} />
          <Route path='/asus' component={ProductListAsus} />
          <Route path='/hauwei' component={ProductListHauwei} />
          <Route path='/lenova' component={ProductListLenova} />
          <Route path='/nokia' component={ProductListNokia} />
          <Route path='/oppo' component={ProductListOppo} />
          <Route path='/realme' component={ProductListRealme} />
          <Route path='/samsung' component={ProductListSamsung} />
          <Route path='/sony' component={ProductListSony} />
          <Route path='/vivo' component={ProductListVivo} />
          <Route path='/accessories' component={ProductListAccessories} />
          
          <Route path='/contact' component={Contact} />
          <Route path='/cart' component={Cart} />
          <Route component={PageNotFound} />
        </Switch>
          <Copyright/>
          <Model/>
          <ServiceForm/>
          <ServiceFormComplete />
      </React.Fragment>
    )
  }
}
