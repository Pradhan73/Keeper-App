import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';

function CreateArea(props) {

    const [note, setInputNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setInputNote(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    function submitNote(event) {
        props.onAdd(note);
        setInputNote({
            title: "",
            content: ""
        });

        event.preventDefault();
    }


    return (
        <div>
            <form className="create-note">
                <input onChange={handleChange} name="title" value={note.title} placeholder="Title" />
                <textarea onChange={handleChange} name="content" value={note.content} placeholder="Take a note..." rows="3" />
                <button onClick={submitNote}><AddIcon /></button>
            </form>
        </div>
    );
}

export default CreateArea;