
import { deleteNoteFromLocal } from "../utils/utils";
import React from 'react';
import axios from 'axios';

const NoteCard = (props) => {

    const fetchNotes = () => {
        const fetchData = async () => {
            try {
                console.log("response")
                response = await axios.get(
                    'https://firestore.googleapis.com/v1/projects/noted-eeafd/databases/(default)/documents/Notes', {
                        headers: {
                            'Authorization': `Bearer ----`
                        }
                    });
                console.log("Done")
                //setResponse(response.data);
                console.log(response)
            } catch (error) {
                console.log("error")
                console.error(error);
            }
        }
        let response = fetchData();
    }

    const deleteNote = () => {
        deleteNoteFromLocal(props.id);
    }

    return (
        <div className="noteCard" id={props.id}>
            <h3>{props.title}</h3>
            <p>{props.date}</p>
            <p>{props.text}</p>
            <button onClick={deleteNote} type="deleteNote">DELETE</button>
            <button onClick={fetchNotes} type="deleteNote">Fetch</button>
        </div>
    );
}

export default NoteCard;
