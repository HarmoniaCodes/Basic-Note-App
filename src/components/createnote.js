import { useState } from "react";

function CreateNote(props) {
  // note handler
  const [note, setNote] = useState({
    noteTitle: "",
    noteContent: "",
  });

  function handleChange(event) {
    //create a destructured object to handle note changes
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        // add new note to existing array with spread
        ...prevNote,
        [name]: value,
      };
    });
  }

  function passNote(event) {
    //get props from note
    props.onAdd(note);
    //set the note state back to the empty strings
    setNote({
      title: "",
      content: "",
    });
    //don't refresh the page
    event.preventDefault();
  }

  return (
    //create controlled inputs
    <div className="addNote">
      <form>
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="What's on your mind?"
          value={note.content}
          onChange={handleChange}
        />
        <button onClick={passNote}>Add Note</button>
      </form>
    </div>
  );
}

export default CreateNote;
