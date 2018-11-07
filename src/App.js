import React from "react";
import { render } from "react-dom";
import UserForm from "./components/UserForm";

class App extends React.Component {
  render() {
    return <UserForm />;
  }
}

render(<App />, document.getElementById("root"));
