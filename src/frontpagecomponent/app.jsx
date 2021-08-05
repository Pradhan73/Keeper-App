import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import CreateArea from "./createArea"


function App() {
    const [notes, setNotes] = useState([]);

    function addNote(note) {
        setNotes(prevValue => {
            return [...prevValue, note];
        });

    }

    function deleteNote(id) {
        setNotes(prevValue => {
            return prevValue.filter((noteTtem, index) => {
                return index !== id;
            });
        });
    }


    return (
        <div>
            <Header />
            <CreateArea
                onAdd={addNote}
            />
            {notes.map((x, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={x.title}
                        content={x.content}
                        onDelete={deleteNote}
                    />
                );
            })}
            <Footer />
        </div>
    );
}
export default App;