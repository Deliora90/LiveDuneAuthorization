import { useReducer } from "react";
import { HashRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import Header from './components/Header/Header';
import { UserReducer, initialState } from "./state/UserReducer";
import { UserContext } from "./state/UserContext";

function App() {
  const [userState, dispatchUser] = useReducer(UserReducer, initialState);

  return (
    <UserContext.Provider value={{ userState, dispatchUser }}>
      <HashRouter>
        <Header />
        <AppRouter />
      </HashRouter>
    </UserContext.Provider>
  );
}

export default App;
