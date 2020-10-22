import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Login from "./Login";
import { useStateValue } from "./StateProvider"; // CONTEXT API
import Chat from "./Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  //const[user,setUser]=useState(null); this is ignored becaouse we using context api for capture user
  // Add two files called StateProvider.js and reducer.js
  // change in appropriate index.js and app.js
  const [{ user }] = useStateValue(); // CONTEXT API
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}
export default App;
