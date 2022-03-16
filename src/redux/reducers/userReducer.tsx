import { Reducer } from "redux";
import typeData from "types/storeType";

const initialState = [
    { id: 0, Name: "Raman Sharma", DOB: '', salary: 0, gender:"male" },
    { id: 0, Name: "Raman Shar", DOB: '', salary: 0, gender:"male" },
  ];
  
 const userReducer: Reducer<typeData> = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_CONTACT":
        state = [...state, action.payload];
        return state;
      case "DELETE_CONTACT":
        const contactFilter = state.filter((contact) =>
          contact.id === action.payload ? null : contact
        );
        state = contactFilter;
        return state;
      case "UPDATE_CONTACT":
        const contactUpdate = state.filter((contact) =>
          contact.id === action.payload.id
            ? Object.assign(contact, action.payload)
            : contact
        );
        state = contactUpdate;
        return state;
      case "RESET_CONTACT":
        state = [{ name: null, email: null, phone: null }];
        return state;
      default:
        return state;
    }
  };
  export default userReducer
  