import { initialContacts } from "./data";

export default (state = initialContacts, action) => state;

export const getContacts = state => state.contacts;
