
import React from "react";
import '../styles/Notes.css';

export default function NoteList({ element,removeNote,editNote,changeEdited,setitle,sedesc,setSetitle,setSedesc,showModal,setShowModal}) {
  


  return (

    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-2xl  " id="note">

      <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-neutral-950">{element.title}</h5>

      <p className="mb-3 font-normal italic ">{element.desc}</p>
      <div className="flex items-center justify-around p-6 border-solid border-slate-200 rounded-b">
        <button
          className="text-white bg-red-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border-red-500 rounded"
          type="button"
          onClick={() => { removeNote(element.id) }}
        >
          <ion-icon name="trash-outline"></ion-icon>
        </button>
        <button
          className="bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() =>editNote(element.id) }
        >
          EDIT
        </button>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl text-red-500 font-semibold">
                      Happy Texting!!
                    </h3>
                    
                  </div>
                  
                  <div className=" ">
                    <form className="bg-white  rounded px-8 pt-6 pb-8 mb-4">
                      <div className="mb-4">
                        <label className="block text-gray-700  text-sm font-bold mb-2" htmlFor="title">
                          Title
                        </label>
                        <input className="block p-2.5  w-full text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "
                          id="edittitle" type="text" value={setitle} onChange={(e) => setSetitle(e.target.value)} placeholder="Title" />
                      </div>
                      <div className="mb-6 ">

                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-white ">Description</label>
                        <textarea rows="8" cols="80" className="block p-2.5 w-full text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                          id="editdesc" value={sedesc} onChange={(e) => setSedesc(e.target.value)} placeholder="Write your thoughts here..."></textarea>


                      </div>

                    </form>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => changeEdited()}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </div>

  )
}
