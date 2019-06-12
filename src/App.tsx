import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import EventHandler from "./components/EventHandler";
import EventHandle from "./components/EventHandle";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./common/Header";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          {/* <Route exact path="/" component={Counter} /> */}
          <Route path="/counter" component={Counter} />
          <Route path="/condition" component={ConditionalRender} />
        </Switch>
      </BrowserRouter>
      {/* <ListRender /> */}
      {/* <ConditionalRender /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <EventHandler /> */}
      {/* <EventHandle /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Kotresh" fullName="KOTRESH M R">
        <p>This An Paragrape Element</p>
      </Greet>
      <Greet name="Shwetha" fullName="SHWETHA M M">
        <button>Action</button>
      </Greet>
      <Greet name="Taanvi" fullName="TAANVI M K" />
      <Welcome name="Kotresh" fullName="KOTRESH M R" />
      <Welcome name="Shwetha" fullName="SHWETHA M M" />
      <Welcome name="Taanvi" fullName="TAANVI M K">
        <button>Action</button>
      </Welcome> */}
      {/* <Hello /> */}
    </div>
  );
};

export default App;
