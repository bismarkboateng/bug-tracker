import { SideBar } from "../components";
import { MainBar } from "../components";



const Dashboard = () => {
  
  return (
    <div className="flex flex-row">
      <SideBar />
      <MainBar />
    </div>
  )
}

export default Dashboard;