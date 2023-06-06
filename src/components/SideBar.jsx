import BugImage from "../assets/bug-report.png"


const SideBar = ({ setSideClicks }) => {

    function handleClickedTicket() {
        setSideClicks((prevTicket) => (
            {...prevTicket, 
            dashboard:false, 
            tickets: true, 
            admin: false
            }
        ))
    }

    function handleClickDashboard() {
        setSideClicks((prevTicket) => (
            {...prevTicket, 
            dashboard:true, 
            tickets: false, 
            admin: false
            }
        ))
    }

    function handleClickedAdmin() {
        setSideClicks((prevTicket) => (
            {...prevTicket, 
            dashboard:false, 
            tickets: false, 
            admin: true
            }
        ))
    }

    return (
        <div className="w-[13%] border-r-1 border-gray-300 min-h-screen flex flex-col items-center p-5 shadow-lg shadow-gray-600/50">
            <img src={BugImage} alt="bug image" className="w-[80px] mb-10"/>

            <div className="flex flex-col gap-2 text-gray-500 mb-10">
                <h5 className="mb-4 hover:font-semibold hover:text-lg cursor-pointer" onClick={handleClickDashboard}>Dashboard</h5>
                <h5 className="mb-4 hover:font-semibold hover:text-lg cursor-pointer" onClick={handleClickedTicket}>Tickets</h5>
                <h5 className="mb-4 hover:font-semibold hover:text-lg cursor-pointer" onClick={handleClickedAdmin}>Administration</h5>
            </div>
            <div className="h-[0.5px] bg-gray-300 px-[121px] mb-5"/>
            <button className="outline-none border-none px-3 py-2 bg-red-500 text-white font-bold w-2/3
                rounded
            ">
                Logout
            </button>
        </div>
    )
}

export default SideBar;