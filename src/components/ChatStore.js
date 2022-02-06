import { makeAutoObservable } from "mobx";
import axios from "axios";

class ChatStore {
  rooms = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchRooms = async () => {
    try {
      const apiRooms = await axios.get(
        "https://coded-task-axios-be.herokuapp.com/rooms"
      );
      this.rooms = apiRooms.data;
    } catch (error) {
      console.log(error);
    }
  };

  createRoom = async (newRoom) => {
    // to do : call BE to create a room
    try {
      const addRooms = await axios.post(
        "https://coded-task-axios-be.herokuapp.com/rooms",
        newRoom
      );

      console.log(addRooms.data);
    } catch (error) {
      console.log(error);
    }
  };

  deleteRoom = async (id) => {
    // to do : call BE to delete a room
    try {
      await axios.delete(
        `https://coded-task-axios-be.herokuapp.com/rooms/${id}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  updateRoom = async (id, updatedRoom) => {
    try {
      await axios.put(
        `https://coded-task-axios-be.herokuapp.com/rooms/${id}`,
        updatedRoom
      );
    } catch (error) {
      console.log(error);
    }
  };
}

const chatStore = new ChatStore();
export default chatStore;
