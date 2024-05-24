import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  const [teams, setTeams] = useState([])

  useEffect(() => {
  fetch('/teams')
  .then(response => response.json())
  .then(teamsData => setTeams(teamsData))
  }, [])

  return <div>
            <NavBar/>
            <Outlet context={{teams: teams}}/>
        </div>
}

export default App;
