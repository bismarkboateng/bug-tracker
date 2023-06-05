import { Projects } from "../components";
import { Statistics } from "../components";


const MainBar = () => {
    return (
        <div className="w-full">
            <div className="h-[200px] bg-blue-400 w-full p-5">
                <h1 className="font-bold text-white text-2xl">DASHBOARD</h1>
            </div>
            <Projects />
            <Statistics />
        </div>
    )
}

export default MainBar;