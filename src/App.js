import './App.css';
import WelcomePage from './pages/welcomePage/welcomePage';
import RegisterPage from './pages/registerPage/registerPage';
import mapPage from './pages/mapPage/mapPage';
import ContactPage from './pages/contactPage/contactPage';
import endPage from './pages/endPage/endPage';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Route path="/" exact component={WelcomePage}/>
      <Route path="/regis" component={RegisterPage}/>
      <Route path="/map" component={mapPage}/>
      <Route path ="/contact" component={ContactPage}/>
      <Route path ="/end" component={endPage}/>
    </Router>
  )
}

export default App;
