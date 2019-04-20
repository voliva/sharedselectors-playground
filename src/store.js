import { createStore, combineReducers } from "redux";
import companies from "./companies";
import contacts from "./contacts";
import support from "./support";

const rootReducer = combineReducers({
  companies,
  contacts,
  support
});
export default createStore(rootReducer);
