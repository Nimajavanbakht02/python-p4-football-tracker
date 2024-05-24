import Team from "./Team"
import { useOutletContext } from "react-router-dom"

function TeamsList() {
    const {teams} = useOutletContext()
    console.log(teams)
    const teamsComponents = teams.map(team => {
        return <Team key={team.id} team={team}/>
    })
    return <ul>
                {teamsComponents}
        </ul>
}

export default TeamsList