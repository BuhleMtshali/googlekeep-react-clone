import { useState, useRef, useEffect } from "react"; // ✅ Import useEffect
import Header from "./Header";
import MainRender from "./MainRender";
import { database } from "./Firebase"; // ✅ Correctly Import Firebase Database
import { ref, push, set, get, remove} from "firebase/database";
import "./App.css";

function App() {
  // State for user input
  const [showInput, setShowInput] = useState(false);
  const [textValue, setTextValue] = useState('');
  const [titleValue, setTitleValue] = useState('');
  
  // State for tracking input focus
  const [textFocused, setTextFocused] = useState(false);
  const [titleFocused, setTitleFocused] = useState(false);

  // State for saved notes
  const [notes, setNotes] = useState([]);

  // Ref for textarea focus
  const textAreaRef = useRef(null);

  // ✅ Function to save note
  const blurOut = () => {
    if (!textFocused && !titleFocused) {
      if (textValue.trim() !== '' || titleValue.trim() !== '') {
        setShowInput(false);
  
        let noteObj = {
          title: titleValue,
          text: textValue
        };
  
        const dbRef = ref(database, "data"); // Reference to "data" node in Firebase
        const newNoteRef = push(dbRef); // Generate a unique ID for the note
        set(newNoteRef, noteObj) // Save note to Firebase
          .then(() => {
            setNotes([...notes, { ...noteObj, id: newNoteRef.key }]); // Add the note with the Firebase ID
          })
          .catch(error => console.error("Error adding note:", error));
  
        setTextValue('');
        setTitleValue('');
      }
    }
  };

  const handleDelete = (id) => {
    // Remove from Firebase
    const dbRef = ref(database, `data/${id}`);
    remove(dbRef)
      .then(() => {
        // Remove from local state
        setNotes(notes.filter(note => note.id !== id));
      })
      .catch(error => console.error("Error deleting note:", error));
  };
  

  // ✅ Function to fetch notes
  const getData = () => {
    let notesArr = [];
    try {  
      const dbRef = ref(database, "data");
      get(dbRef).then(snapshot => {
        snapshot.forEach(note => {
          notesArr.push({ id: note.key, ...note.val() }); // Ensure each note has an ID
        });
  
        if (notesArr.length !== 0) {
          setNotes(notesArr);
        }
      });
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };
  

  // ✅ Fetch data when component mounts
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <MainRender 
        textValue={textValue}
        titleValue={titleValue}
        showInput={showInput}
        textAreaRef={textAreaRef}
        notes={notes}
        onDelete={handleDelete}
        onShowInput={setShowInput}
        onTextChange={setTextValue}
        onTitleChange={setTitleValue}
        onTextFocus={setTextFocused}
        onTitleFocus={setTitleFocused}
        onBlurOut={blurOut}
      />
    </>
  );
}

export default App;
