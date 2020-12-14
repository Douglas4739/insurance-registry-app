
import './App.css';
import { LoginPage, NewUserForm, ContentPage, itemCardCondensed, itemCardExpanded } from './template';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <LoginPage />
        <Route path='/NewUserForm' component={NewUserForm} />
        <Route path='/ContentPage' component={ContentPage} />
      </div>
    </Router>
  );
}

export default App;
