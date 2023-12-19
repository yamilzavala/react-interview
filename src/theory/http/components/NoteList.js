import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const NoteList = () => {
    const [notes, setNotes] = useState([])

    useEffect(() => {        
        getNotes()
    }, [])

    const getNotes = async () => {
        try {
            const res = await axios.get('http://localhost:3001/notes')
            setNotes(res.data)                
        } catch (error) {
            alert(error)
        }
    }

    const deleteNote = async (id) => {       
            try {
                await axios.delete('http://localhost:3001/notes/' + id )
                getNotes()              
            } catch (error) {
                alert(error)
            }        
    }

    const renderedNotes = () => {
        notes.map((note, idx) => (
            <div key={idx}> 
                <p >{note.title} {note.content} {note.date} {note.author}</p>
                <button onClick={() => deleteNote(note.id)}>Delete</button>
                <Link to={`/edit/${note.id}`}>Edit</Link>
            </div>
        ))
    }


    return (
        <div>
            <h1>Note List</h1>
            {renderedNotes}
        </div>
    );
};

export default NoteList;