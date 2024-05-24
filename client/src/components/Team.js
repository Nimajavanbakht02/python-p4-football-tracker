function Team({team}) {
    return (
            <li>
                 <h1>team: {team.id}</h1>
                <h2>name: {team.team_name}</h2>
                <h2>wins: {team.wins}</h2>
                <h2>losses: {team.losses}</h2>
            </li>
    )
}

export default Team