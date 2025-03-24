import { useState,  useRef } from 'react';
import Header from './Header';
import MainRender from './MainRender';
import './App.css';


function App() {
//state for showInput and toggle it’s value between true and false depending on if the textarea is clicked or not.
const [showInput, setShowInput] = useState(false);
//states for our title input and textarea
const [textValue, setTextValue] = useState('');
const [titleValue, setTitleValue] = useState('');
// States to track input focus
const [textFocused, setTextFocused] = useState(false);
const [titleFocused, setTitleFocused] = useState(false);
// Ref for textarea focus
const textAreaRef = useRef(null);



  return (
    <>
      <Header />
      <MainRender 
        textValue = {textValue}
        titleValue = {titleValue}
        showInput = {showInput}
        textAreaRef={textAreaRef}
        onShowInput = {(state) => setShowInput(state)}
        onTextChange={(value) => setTextValue(value)}
        onTitleChange={(value) => setTitleValue(value)}
        onTextFocus={(state) => setTextFocused(state)}
        onTitleFocus={(state)=>setTitleFocused(state)}
      />
    </>
  )
}

export default App
