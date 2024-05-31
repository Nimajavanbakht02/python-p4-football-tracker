import React, { useState } from "react";
import axios from "axios";

function CreateGameForm({ teams }) {
  const [date, setDate] = useState("");
  const [homeTeamId, setHomeTeamId] = useState(teams[0]?.id);
  const [awayTeamId, setAwayTeamId] = useState("");
  const [home_team_score, setHomeTeamScore] = useState("");
  const [away_team_score, setAwayTeamScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/games", {
        date,
        home_team_id: homeTeamId,
        away_team_id: awayTeamId,
        home_team_score,
        away_team_score,
      })
      .then((response) => {
        console.log(response.data);
        setDate("");
        setHomeTeamId("");
        setAwayTeamId("");
        setHomeTeamScore("");
        setAwayTeamScore("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <label>
        Home Team:
        <select
          value={homeTeamId}
          onChange={(e) => setHomeTeamId(e.target.value)}
        >
          {teams.map((team) => {
            return <option value={team.id}>{team.name}</option>;
          })}
        </select>
      </label>
      <label>
        Away Team:
        <select
          value={awayTeamId}
          onChange={(e) => setAwayTeamId(e.target.value)}
        >
          {teams.map((team) => {
            return <option value={team.id}>{team.name}</option>;
          })}
        </select>
      </label>
      <label>
        <label>
          Home Team Score:
          <input
            value={home_team_score}
            onChange={(e) => setHomeTeamScore(e.target.value)}
          />
        </label>
        <label>
          Away Team Score:
          <input
            value={away_team_score}
            onChange={(e) => setAwayTeamScore(e.target.value)}
          />
        </label>
        {/* Home Team Score:
               

                Away Team Score:
                <select value={away_team_score} onChange={e => setAwayTeamScore(e.target.value)}>
                    {teams.map(team => {
                        return <option value={team.away_team_score}>{team.away_team_score}</option>
                    })}
                </select> */}
      </label>
      <button type="submit">Create Game</button>
    </form>
  );
}

export default CreateGameForm;
