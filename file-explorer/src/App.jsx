
import './App.css';
import { useState } from 'react';
import explorer from './data/FolderData';
import Folder from './components/Folder';

function App() {

   const [ExplorerData,setExplorerData]=useState(explorer)

   
   
  return (
    <div className="App">
    <h1>📁 File Explorer</h1>
    <Folder explorer={ExplorerData} />
  </div>
  );
}

export default App;
