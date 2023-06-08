const Admin = () => {

    const adminStyle = "p-2 hover:bg-gray-300 cursor-pointer"
    return (
        <div className="w-full">
            <div className="h-[200px] bg-blue-400 w-full p-5">
                <h1 className="font-bold text-white text-2xl">Administration Tab</h1>
            </div>

            <div className="ml-5 mt-[-60px] z-[100] border-1 rounded w-[40%] h-[22%] shadow-lg shadow-gray-400/50
            bg-white p-3"
            >
                <h5>Organization</h5><hr className="mt-3 mb-3"/>
                <div className="w-full h-[140px] p-3 border-2 border-gray-200">
                    <p className={adminStyle}>James</p><hr className="w-full"/>
                    <p className={adminStyle}>Norman Lee</p><hr />
                    <p className={adminStyle}>Fisher</p>
                </div>
            </div>
        </div>
    )
}

export default Admin;