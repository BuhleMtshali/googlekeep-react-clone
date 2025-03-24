import { useState, useRef } from 'react';
import Header from './Header';
import MainRender from './MainRender';
import './App.css';

function App() {
  // State to toggle input visibility
  const [showInput, setShowInput] = useState(false);
  
  // States for text input values
  const [textValue, setTextValue] = useState('');
  const [titleValue, setTitleValue] = useState('');

  // States to track input focus
  const [textFocused, setTextFocused] = useState(false);
  const [titleFocused, setTitleFocused] = useState(false);

  // Ref for textarea focus
  const textAreaRef = useRef(null);

  // State for saved notes
  const [notes, setNotes] = useState([]);

  // Handles when the user clicks away
  const blurOut = () => {
    if (!textFocused && !titleFocused) {
      if (textValue.trim() !== '' || titleValue.trim() !== '') {
        setShowInput(false);
        setNotes([...notes, { title: titleValue, text: textValue }]);
        setTextValue('');
        setTitleValue('');
      }
    }
  };

  return (
    <>
      <Header />
      <MainRender 
        textValue={textValue}
        titleValue={titleValue}
        showInput={showInput}
        textAreaRef={textAreaRef}
        notes={notes}
        onShowInput={setShowInput}
        onTextChange={setTextValue}
        onTitleChange={setTitleValue}
        onTextFocus={setTextFocused}
        onTitleFocus={setTitleFocused}
        onBlurOut={blurOut} // Pass blurOut function
      />
    </>
  );
}

export default App;
