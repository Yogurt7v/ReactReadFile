import React, { useState } from 'react'
import './App.css'

function App() {

  const [message , setMessage] = useState("")

  const read = () => {
      let file = document.getElementById('file').files[0];
      let reader = new FileReader();
      reader.readAsText(file);
      reader.onload = function(){
        setMessage(reader.result);
  }
  }

  return (
    <>
    {message ==="" && 
        <div className='container'>
        <h2>Upload a file</h2>
        <div className='wrapper'>
          <label htmlFor="file"  className='custom-file-upload'>
            <span>Choose a file</span>
            <input type="file" id='file' className="custom-file-input"/>
          </label>
          <button className='btn' onClick={read}>Read file</button>
        </div>
    </div>}


    {message !=="" && 
    <>
    <div className='message'>
        <p>{message}</p>
        <button className='btnClear' onClick={() => setMessage("")}>Clear</button>
    </div>
    </>}
    </>
  )
}

export default App
