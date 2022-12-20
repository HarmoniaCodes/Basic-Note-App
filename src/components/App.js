import { useState } from "react";
import "../App.css";
import Header from "./header";
import CreateNote from "./createnote";
import Note from "./note";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevNotes) => {
      //get the old notes and add the new one
      return [...prevNotes, note];
    });
  }
  function deleteNote(id) {
    //get array of previous notes then loop thru
    // return index of notes that don't include deleted note id
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <main>
      <Header />
      <CreateNote onAdd={addNote} />
      <div className="noteArea">
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
    </main>
  );
}

export default App;
