import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ChatRoom from "./components/ChatRoom";
import ChatRoomsList from "./components/ChatRoomsList";
import { Route, Routes } from "react-router-dom";
import chatStore from "./components/ChatStore";
import { observer } from "mobx-react";

const App = () => {
  chatStore.fetchRooms();

  return (
    <div className="__main">
      <div className="main__chatbody">
        <center>
          <Routes>
            <Route
              path="/room/:roomSlug"
              element={<ChatRoom rooms={chatStore.rooms} />}
            />
            <Route
              exact
              path="/"
              element={<ChatRoomsList rooms={chatStore.rooms} />}
            />
          </Routes>
        </center>
      </div>
    </div>
  );
};

export default observer(App);
