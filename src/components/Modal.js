import React,{useState} from "react";

export default function Modal({title,stitle,desc,sdesc,snotes}) {
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const myFunction=(e)=>{
    if(e.target.id==="title")
    stitle(e.target.value);
    else
    sdesc(e.target.value);
 
}
const clickFunc=(e)=>{
    e.preventDefault();
    
    if(title!=='' && desc!==''){
        snotes((note)=>{
            return(
                [
                {title:title,
                desc:desc,
                id:new Date().getTime()},...note]
            )
        })
        stitle("");
        sdesc("");
        setShowModal(false);
    }
    else{
      setErrorMessage('Title and description are required.');
    }
    stitle("");
    sdesc("");
}
  return (
    <>
    <div className="createbutton flex justify-center ">
    <button
        className="bg-pink-500 flex text-white   active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Create Note
        <ion-icon  name="add-outline"></ion-icon>
      </button>
      
    </div>
      
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className=" items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Pen Down
                  </h3>
                  {errorMessage? 
                  <>
                  
                  <button
                    className="p-1 ml-auto  border-0 text-black  float-left text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setErrorMessage("")}
                  >
                    <span className=" text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                  <p className="error text-xl bg-red-500">{errorMessage}</p>
                  </>:null}
                </div>
                {/*body*/}
                <div className=" ">
            <form className="bg-white  rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  " 
                    value={title} id="title" onChange={myFunction} type="text" placeholder="Title" />
                </div>
                <div className="mb-6">

                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                    <textarea  rows="8" cols="80" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                     value={desc} onChange={myFunction}  id="desc" placeholder="Write your thoughts here..."></textarea>


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
                    onClick={clickFunc}
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
    </>
  );
}