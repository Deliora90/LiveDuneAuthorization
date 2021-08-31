import { HashRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from './components/Header';

function App() {
  return (
    <HashRouter>
      <Header />
      <AppRouter />
    </HashRouter>
  );
}

export default App;
