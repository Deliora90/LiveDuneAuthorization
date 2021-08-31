import { HashRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import Header from './components/Header/Header';

function App() {
  return (
    <HashRouter>
      <Header />
      <AppRouter />
    </HashRouter>
  );
}

export default App;
