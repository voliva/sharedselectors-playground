const initialSupport = {
  subject: "",
  content: ""
};

export const subjectChanged = newSubject => ({
  type: "SUBJECT_CHANGED",
  payload: newSubject
});

export const contentChanged = newContent => ({
  type: "CONTENT_CHANGED",
  payload: newContent
});

export const support = (state = initialSupport, action) => {
  switch (action.type) {
    case "SUBJECT_CHANGED":
      return {
        ...state,
        subject: action.payload
      };
    case "CONTENT_CHANGED":
      return {
        ...state,
        content: action.payload
      };
    default:
      return state;
  }
};

export const getSupportValue = state => state.support;
