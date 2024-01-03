
import './App.css';
import { useState } from 'react';
import { marked } from 'marked';


function App() {
  const [markdown, setMarkdown] = useState('');

  function handleTextChange(event) {
    let newMarkdown = event.target.value;
    setMarkdown(newMarkdown);
    // console.log(newMarkdown);
  };

  function getMarkdownPreview() {
    return { __html: marked(markdown) };
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Markdown Previewer
        </h1>

        <h3>create and preview markdown</h3>

      </header>
      <div id="textareaPanel">
        <div id="inputDiv">

        <p className="pWhite">write your markdown here:</p>
        <textarea
          id="inputBox"
          value={markdown}
          onChange={handleTextChange}
          />
          </div>

<div id="outputDiv">

        <p className="pWhite">a preview appears here:</p>
        <div
          id="outputBox"
          dangerouslySetInnerHTML={getMarkdownPreview()}
          />
          </div>
      </div>

    </div>
  );
}

export default App;
