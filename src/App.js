import React, { useState } from "react";

import Modal from "./components/Modal";
import NoteList from "./components/NoteList";

import "./App.css";

export default function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [notes, setNotes] = useState(getNotesFromLs);
  const [editid, setEditid] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [setitle, setSetitle] = useState("");
  const [sedesc, setSedesc] = useState("");
  const notesPerPage = 6;
  localStorage.setItem("values", JSON.stringify(notes));

  const removeNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);

    setNotes(updatedNotes);
  }

  const editNote = (id) => {
    const noteToEdit = notes.find((elem) => elem.id === id);
  
    if (noteToEdit) {
      setShowModal(true);
      setSetitle(noteToEdit.title);
      setSedesc(noteToEdit.desc);
      setEditid(id);
    } 
  };
  
  const changeEdited = () => {
    const updatedNotes = notes.map((elem) => {
      if (editid === elem.id) {
        return {
          ...elem,
          title: document.getElementById("edittitle").value,
          desc: document.getElementById("editdesc").value,
        };
      } else {
        return elem;
      }
    });
    console.log(updatedNotes);
    setNotes(updatedNotes);
    setShowModal(false);
  };
  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = notes.slice(indexOfFirstNote, indexOfLastNote);
  console.log(currentNotes);
  return (
    <>
      {/* <NoteForm title={title} stitle={setTitle} desc={desc} sdesc={setDesc} /> */}
      {/* <Navbar mode={mode} toggle={toggle}/> */}

      <div className="mt-6">
        <Modal
          title={title}
          stitle={setTitle}
          desc={desc}
          sdesc={setDesc}
          notes={currentNotes}
          snotes={setNotes}
        />
        <h1 className="mb-3 text-2xl italic font-mono text-center mt-10">
          YOUR NOTES:-
        </h1>
        {notes.length === 0 ? (
          <div
            className="max-w-sm p-6  border flex justify-center rounded-lg shadow "
            id="notes"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              Oopsss :-({" "}
            </h5>

            <p className="mb-3 text-xl  ">
              You dont have any note yet.Create a new one.
            </p>
          </div>
        ) : (
          <div className=" flex justify-evenly " id="notes">
            {currentNotes.map((element) => {
              return (
                <NoteList
                  element={element}
                  key={element.id}
                  notes={currentNotes}
                  setNotes={setNotes}
                  editid={editid}
                  sedit={setEditid}
                  removeNote={removeNote}
                  editNote={editNote}
                  changeEdited={changeEdited}
                  setitle={setitle}
                  sedesc={sedesc}
                  setSetitle={setSetitle}
                  setSedesc={setSedesc}
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              );
            })}
          </div>
        )}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(notes.length / notesPerPage) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </>
  );
  function getNotesFromLs() {
    const savedNotes = JSON.parse(localStorage.getItem("values"));
    if (savedNotes) {
      return savedNotes;
    } else {
      return [];
    }
  }

  //
}
