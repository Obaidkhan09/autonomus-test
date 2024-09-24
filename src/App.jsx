import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import AppRoutes from './routes';
import ErrorBoundary from './ReUseable/ErrorBoundries';
import Modal from './ReUseable/Modal';
import { Provider } from 'react-redux';
import store from './Store/store';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Provider store={store}>
            <Router>
              {/* Use the routes defined in routes.js */}
              <AppRoutes />
              <Modal />
            </Router>
        </Provider>
      </div>
    </ErrorBoundary>
  );
}

export default App;
