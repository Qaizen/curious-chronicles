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
        <div>
            {!editable ? (
                <p>Mood: {entry.mood === "happy" ? "😊" : entry.mood === "sad" ? "🥺" : "😒"}  Your Story: {entry.responseOne}</p>
            ) :
                (
                    <>
                        <input onChange={handleChange} name="mood" value={formState.mood} />
                        <input onChange={handleChange} name="responseOne" value={formState.responseOne} />
                        <button onClick={() => handleUpdateEntry(entry._id)}>💾</button>
                    </>
                )
            }

            <p className="pUpdate" onClick={() => setEditable(!editable)}>✏️</p>
            <p className="pDelete" onClick={() => handleDeleteEntry(entry._id)}>❌</p>
        </div>
    )
}

export default SingleEntry;