import React, { useCallback } from "react";
import { connect } from "react-redux";
import { getSupportValue, subjectChanged, contentChanged } from "../support";

const useValueChangeHandler = fn =>
  useCallback(evt => fn(evt.target.value), [fn]);

const SupportForm = ({
  subject,
  content,
  onSubjectChange,
  onContentChange
}) => {
  const handleSubjectChange = useValueChangeHandler(onSubjectChange);
  const handleContentChange = useValueChangeHandler(onContentChange);
  const preventDefault = useCallback(evt => evt.preventDefault(), []);

  return (
    <form className="SupportForm" onSubmit={preventDefault}>
      <input
        placeholder="Subject"
        type="text"
        value={subject}
        onChange={handleSubjectChange}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={handleContentChange}
      />
      <input type="submit" />
    </form>
  );
};

export default connect(
  getSupportValue,
  {
    onSubjectChange: subjectChanged,
    onContentChange: contentChanged
  }
)(SupportForm);
