import { initialContacts } from "./data";

export const contacts = (state = initialContacts, action) => state;

export const getContacts = state => state.contacts;
