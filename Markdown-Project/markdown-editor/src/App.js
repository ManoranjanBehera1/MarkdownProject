import React, { useState, useEffect } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import './App.css';
import { marked } from 'marked';

const App = () => {
  const [markdown, setMarkdown] = useState('');
  const [html, setHtml] = useState('');  

  useEffect(() => {    
    setHtml(marked(markdown));
  }, [markdown]);

  return (
    <div className="app">      
      <div className="container">
        <Editor markdown={markdown} setMarkdown={setMarkdown} />
        <Preview html={html} />
      </div>
    </div>
  );
};

export default App;
