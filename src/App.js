import './App.css';
import Nav from './components/Nav';
import Routes from './routes'

export default function App() {
  return (
    <div>
      <Nav />
      <div className="container">
        <Routes />
      </div>

    </div>
  );
};
