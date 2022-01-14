import logo from './logo.svg';
import './App.css';
import Router from './router/Router';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Bookdetails from './components/Bookdetails';
import BookDescription from './components/Bookdescription';
import Cart from './components/Cart';


function App() {
  return (
    <div>
      {/* <Header/> */}
      {/* <Bookdetails/> */}
      {/* <BookDescription/> */}
      <Cart/>
      <Footer/>
      {/* <Router/> */}
      {/* <SignUp/>
      <Login/> */}
    </div>
  );
}

export default App;
