import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';
import Todo from './components/Todo';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <Router>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route exact path='/todo'>
          <Todo />
        </Route>
        
      </Router>
    </>
  );
}

export default App;
