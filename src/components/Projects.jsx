const Projects = () => {
    return (
        <div className="ml-4 mt-[-60px] z-[100] border-1 rounded w-[98%] h-[300px] shadow-lg shadow-gray-350/50
            bg-white
        ">
            <div className="flex flex-row justify-between">
                <h5 className="ml-4 py-3 text-xl" >Projects</h5>
                <button className="bg-blue-500 text-white px-3 py-2 border-none outline-none rounded font-semibold
                  mr-2 mt-2"
               >
                    Report Bug
                </button>
            </div>
            <div className="h-[0.5px] bg-gray-300 px-[121px] mb-5 w-full mt-3"/>

            <table className="table-auto w-full text-center">
                <tr>
                    <th>Project Name</th>
                    <th>Description</th>
                    <th>Contributors</th>
                    <th>Fixed</th>
                </tr>
                <tr className="border-y-3 border-gray-400">
                    <td className="text-blue-400 font-bold">Bug Tracker</td>
                    <td>A Project Management Tool</td>
                    <td>Bicode</td>
                    <td>False</td>
                </tr>
            </table>
        </div>
    )
}

export default Projects;