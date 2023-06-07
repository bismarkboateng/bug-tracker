import BugInfo from "../constant";

const TicketPage = () => {
    return (
        <div className="w-full">
            <div className="h-[200px] bg-blue-400 w-full p-5">
                <h1 className="font-bold text-white text-2xl">Tickets</h1>
            </div>

            <div className="ml-5 mt-[-60px] z-[100] border-1 rounded w-[98%] h-[80%] shadow-lg shadow-gray-500/50
            bg-white"
            >
                <table className="table-auto w-full text-center ">
                    <tr className="border-b-2 border-gray-100">
                        <th>Project Name</th>
                        <th>Ticket</th>
                        <th>Status</th>
                        <th>DatesOutstanding</th>
                        <th>Priority</th>
                    </tr>
                    { BugInfo.map((bug) => (
                        <tr className="border-b-2 border-gray-100 p-5 hover:bg-blue-400 hover:text-white hover:cursor-pointer">
                            <td className="hover:text-white">{bug.ProjectName}</td>
                            <td> { bug.Ticket } </td>
                            <td> { bug.Status } </td>
                            <td> { bug.DatesOutstanding } </td>
                            <td> { bug.Priority } </td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}

export default TicketPage;