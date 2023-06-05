import { SideBar } from "../components";
import { MainBar } from "../components";
import { useState } from "react";
import { TicketPage } from "../components";
import { Admin } from "../components";

const Dashboard = () => {
  const [sideClicks, setSideClicks] = useState({
    dashboard: false,
    tickets: false,
    admin: false
  })


  console.log(sideClicks)

  return (
    <div className="flex flex-row">
      <SideBar setSideClicks={setSideClicks}/>
      { sideClicks.dashboard && <MainBar />}
      { sideClicks.tickets && <TicketPage />}
      { sideClicks.admin && <Admin />}
    </div>
  )
}

export default Dashboard;