import { DELETE_ENTRY, UPDATE_ENTRY } from "../../utils/mutations"
import { useQuery, useMutation } from '@apollo/client';
import { useState } from 'react';

function SingleEntry({ entry }) {

    const [formState, setFormState] = useState({ id: entry._id, mood: entry.mood, responseOne: entry.responseOne });
    const [editable, setEditable] = useState(false);
    const [updateEntry] = useMutation(UPDATE_ENTRY);
    const [deleteEntry] = useMutation(DELETE_ENTRY);

    const handleChange = (event) => {

        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });

    };

    async function handleUpdateEntry(id, mood, responseOne) {


        try {
            const { data } = await updateEntry({ variables: formState })
            window.location.reload();
        } catch (error) {
            throw Error(error);
        }
    }

    async function handleDeleteEntry(id) {
        try {
            const { data } = await deleteEntry({ variables: { id } })
            window.location.reload();
        } catch (error) {
            throw Error(error);
        }
    }


    return (
        <div className="entryLine">
            {!editable ? (
                <h1>Mood: {entry.mood === "happy" ? "😊"
                    : entry.mood === "sad" ? "🥺"
                        : entry.mood === "neutral" ? "😐"
                            : entry.mood === "hopeful" ? "😉"
                                : "😒"}  Your Story: {entry.responseOne}</h1>
            ) :
                (
                    <div>
                        <input style={{ cursor: "pointer" }} onChange={handleChange} name="mood" value={formState.mood} />
                        <input style={{ cursor: "pointer" }} onChange={handleChange} name="responseOne" value={formState.responseOne} />
                        <button style={{ cursor: "pointer" }} onClick={() => handleUpdateEntry(entry._id)}>💾</button>
                    </div>
                )
            }

            <h1 style={{ cursor: "pointer" }} className="iconButton" onClick={() => setEditable(!editable)}>✏️</h1>
            <h1 style={{ cursor: "pointer" }} className="iconButton1" onClick={() => handleDeleteEntry(entry._id)}>❌</h1>
        </div>
    )
}

export default SingleEntry;