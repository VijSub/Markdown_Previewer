import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

const Editor = ({ content, handleTextareaChange }) => <textarea value={content} onChange={handleTextareaChange} />

const App= () => {
  const [content, setContent] = React.useState("Hi hoe")
  
  const handleTextareaChange = (event) => {
    setContent(event.target.value)
  }
  return (
  <div className="main">
    <Editor content={content} handleTextareaChange={handleTextareaChange}/>
  </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#app"))
