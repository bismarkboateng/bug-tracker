import { createPortal } from "react-dom";


const BugInfo = ({ setBugInfo }) => {
    return createPortal(
        <div>
            <form className="">
                <label>Project Name: </label>
                <input 
                    onChange={() => {}}
                    value=""
                /> <br />

                <label>Description: </label>
                <input 
                    onChange={() => {}}
                    value=""
                /> <br />

                <label>Contributors: </label>
                <input 
                    onChange={() => {}}
                    value=""
                /> <br />

                <label>Fixed: </label>
                <input 
                    onChange={() => {}}
                    value=""
                />
            </form>
        </div>,
        document.getElementById("bug-detail")
    )
}


export default BugInfo;