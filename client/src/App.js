import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//react bootstrap
import { Container } from 'react-bootstrap';
//react router
import { BrowserRouter as Router, Route } from 'react-router-dom';
// components
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomeScreens from './Screens/HomeScreens';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import ProfileScreen from './Screens/ProfileScreen';
import ShippingScreen from './Screens/ShippingScreen';
import PaymentScreen from './Screens/PaymentScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';
import OrderScreen from './Screens/OrderScreen';
import UserListScreen from './Screens/UserListScreen';
import UserEditScreen from './Screens/UserEditScreen';
import ProductListScreen from './Screens/ProductListScreen';
import ProductEditScreen from './Screens/ProductEditScreen';
import OrderListScreen from './Screens/OrderListScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route exact path='/' component={HomeScreens} />
          <Route exact path='/login' component={LoginScreen} />
          <Route exact path='/register' component={RegisterScreen} />
          <Route exact path='/profile' component={ProfileScreen} />
          {/* // ? user list screen and edit screen */}
          <Route exact path='/admin/userlist' component={UserListScreen} />
          <Route exact path='/admin/user/:id/edit' component={UserEditScreen} />
          {/* // ? product list screen and edit screen */}
          <Route exact path='/admin/productlist' component={ProductListScreen} />
          <Route exact path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route
            exact
            path='/admin/productlist/:pageNumber'
            component={ProductListScreen}
          />
          {/* // ? order list screen */}
          <Route exact path='/admin/orderlist' component={OrderListScreen} />

          <Route exact path='/payment' component={PaymentScreen} />
          <Route exact path='/placeorder' component={PlaceOrderScreen} />
          <Route exact path='/order/:id' component={OrderScreen} />
          <Route exact path='/shipping' component={ShippingScreen} />
          <Route exact path='/product/:id' component={ProductScreen} />
          <Route exact path='/cart/:id?' component={CartScreen} />
          <Route exact path='/search/:keyword' component={HomeScreens} />
          <Route exact path='/page/:pageNumber' component={HomeScreens} />
          <Route exact path='/search/:keyword/page/:pageNumber' component={HomeScreens} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
