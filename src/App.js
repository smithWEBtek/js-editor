import React from 'react';
import './App.css';

function App() {
  const [jsonData, setJsonData] = React.useState("")
  const handleInputChange = (event) => {
    event.preventDefault()
    setJsonData(event.target.value)
  }

  const replacements = {
    tilepoolfrac: "dropdownselect",      
    dropdownselectfrac: "dropdownselect",      
    TilePoolTemplate: "TilePool2",
    tilepool: "dropdownselect",
  }

  const copyUpdatedData = () => {
    let inputTextArea = document.getElementById("copy-text-input");
    navigator.clipboard.writeText(inputTextArea.value)
    inputTextArea.innerText('Updated JSON copied to clipboard')
  }

  React.useEffect(() => {
    setJsonData(jsonData.replace(/tilepool|TilePoolTemplate|tilepoolfrac|dropdownselectfrac/g, matched => replacements[matched]));
  },[jsonData])

  return (
    <div className="App">
        <textarea
          id="copy-text-input" 
          type="text" 
          style={{height: '400px', width: '1000px'}}
          value={jsonData}
          placeholder={'Paste JSON here, then click Copy to Clipboard below'}
          onChange={handleInputChange}
        />
        <p>
          <button onClick={copyUpdatedData}>Copy to clipboard</button>
        </p>
    </div>
  );
}

export default App;
