import { createPortal } from "react-dom";
import { useState } from "react";

const inputClass = "px-5 py-2 outline-none border-2 border-blue-500 rounded mt-3"
const labelClass = "font-semibold mt-5 text-white"



const BugModal = ({ setModal }) => {
    const [bugInfo, setBugInfo] = useState({
        ProjectName: "",
        Description: "",
        DevId: null
    })



    function handleSubmitBugInfo(event) {
        setModal(prevState => !prevState)
        event.preventDefault();
        console.log("Save button clicked")
        console.log(bugInfo)
    }

    return createPortal(
        <div className="bg-blue-200 absolute top-20 left-[800px] w-[350px] h-[350px] z-100 border-2 border-gray-300 p-5 rounded
            shadow-lg shadow-blue-500/50 backdrop-saturate-50"
        >
            <form>
                <label className={labelClass}>Project Name: </label> <br />
                <input
                    className={inputClass}
                    placeholder="Project Name"
                    onChange={(event) => {
                        setBugInfo((prevState) => ({...prevState, ProjectName: event.target.value}))
                    }}
                />
                <label className={labelClass} >Description: </label> <br />
                <input
                    className={inputClass}
                    placeholder="Description"
                    onChange={(event) => {
                        setBugInfo((prevState) => ({...prevState, Description: event.target.value}))
                    }}
                /> <br />
                <label className={labelClass} >Dev Id: </label> <br />
                <input
                    className={inputClass}
                    placeholder="Dev Id"
                    onChange={(event) => {
                        setBugInfo((prevState) => ({...prevState, DevId: Number(event.target.value)}))
                    }}
                />
                <button className="outline-none border-none text-white font-semibold px-10 py-2 rounded bg-blue-500
                    mt-3"
                    onClick={handleSubmitBugInfo}
                >
                    Save
                </button>
            </form>
        </div>,
        document.getElementById("bug-modal")
    )
}

export default BugModal;