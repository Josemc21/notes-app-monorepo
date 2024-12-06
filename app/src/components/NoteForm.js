import React, { useRef, useState } from 'react'
import Togglable from './Togglable'

export default function NoteForm ({ addNote, handleLogout }) {
  const [newNote, setNewNote] = useState('')
  const togglableRef = useRef()

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    try {
      event.preventDefault()

      const noteObject = {
        content: newNote,
        important: false
      }

      if (noteObject.content !== '') {
        addNote(noteObject)
        setNewNote('')
        togglableRef.current.toggleVisibility()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Togglable buttonLabel='New Note' ref={togglableRef}>
      <h3>Create a new note</h3>

      <form onSubmit={handleSubmit}>
        <input
          data-test-id='new-note-input'
          placeholder='Write your note content'
          value={newNote}
          onChange={handleChange}
        />
        <button type='submit'>Save</button>
      </form>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </Togglable>
  )
}
