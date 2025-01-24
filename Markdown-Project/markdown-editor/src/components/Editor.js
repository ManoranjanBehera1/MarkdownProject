import React from 'react';

const Editor = ({ markdown, setMarkdown }) => {
  const handleInputChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <textarea
      value={markdown}
      onChange={handleInputChange}
      placeholder="Type Markdown here..."
      className="editor"
    />
  );
};

export default Editor;
