import React, { useState } from 'react';
import classes from './App.module.css';

function App() {
  const [jsonData, setJsonData] = useState("")
  const [copied, setCopied] = useState(false)
  const [buttonText, setButtonText] = useState('Copy to clipboard')

  const handleInputChange = (event) => {
    event.preventDefault()
    setCopied(false)
    setButtonText('Copy to clipboard')
    setJsonData(event.target.value)
  }
  
  const copyUpdatedData = () => {
    setCopied(true)
    setButtonText("COPY SUCCESSFUL")
    let inputTextArea = document.getElementById("copy-text-input");
    navigator.clipboard.writeText(inputTextArea.value)
    inputTextArea.innerText('Updated JSON copied to clipboard')
  }
  
  React.useEffect(() => {
    const replacements = {
      tilepoolfrac: "dropdownselect",      
      dropdownselectfrac: "dropdownselect",      
      TilePoolTemplate: "TilePool2",
      tilepool: "dropdownselect",
    }
    setJsonData(jsonData.replace(/tilepool|TilePoolTemplate|tilepoolfrac|dropdownselectfrac/g, matched => replacements[matched]));
  },[jsonData])

  return (
    <div className="App">
        <textarea
          id="copy-text-input" 
          type="text" 
          className={classes.inputBox}
          value={jsonData}
          placeholder={'Paste JSON here, then click Copy to Clipboard below'}
          onChange={handleInputChange}
        />
        <p>
          <button 
            onClick={copyUpdatedData}
            className={copied && classes.copied}
            >{buttonText}</button>
        </p>
    </div>
  );
}

export default App;
