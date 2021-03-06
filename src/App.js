import './Styles/custom.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Subscribe from './Pages/Subscribe/Subscribe';
import LearnMore from './Pages/LearnMore/LearnMore';
import AddService from './Pages/AddService/AddService';
import Book from './Pages/Book/Book/Book';
import ManageBookings from './Pages/ManageBookings/ManageBookings';
import MyBookings from './Pages/MyBookings/MyBookings';
import Services from './Pages/Home/Services/Services';
import AuthProvider from './contexts/AuthProvider/AuthProvider';



function App() {
  return (
    <div className="">

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/book/:id">
              <Book></Book>
            </PrivateRoute>
            <PrivateRoute path="/subscribe">
              <Subscribe></Subscribe>
            </PrivateRoute>
            <PrivateRoute path="/learnmore">
              <LearnMore></LearnMore>
            </PrivateRoute>
            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/mybookings/:email">
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute path="/managebookings">
              <ManageBookings></ManageBookings>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
