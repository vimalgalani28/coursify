import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./editor.css";

const RichtextEditor = ({ text, handleChange, error }) => {
  return (
    <div>
      <ReactQuill value={text} onChange={handleChange} bounds={`.editor`} />
      <p className="error paragraph1 light mt-2">{error}</p>
    </div>
  );
};

export default RichtextEditor;
