import './App.scss';
import AppNavigator from './components/appNavigator/AppNavigator';
import RouteRenderer from './router/routes';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <AppNavigator />
        <RouteRenderer />
      </Router>
    </div>
  );
}

export default App;
