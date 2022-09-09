import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import axios from "axios";

function App() {
  axios.defaults.baseURL = "http://localhost:2000/";

  return (
    <div className="bg-black flex">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
    </div>
  );
}

export default App;
