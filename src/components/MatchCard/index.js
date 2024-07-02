import './index.css'

const MatchCard = props => {
  const {item} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = item
  const genre = matchStatus === 'Won' ? 'green' : 'red'
  return (
    <li className="match-card-container">
      <img
        src={competingTeamLogo}
        className="match-card-icon"
        alt={`competing team ${competingTeam}`}
      />
      <p className="team-names">{competingTeam}</p>
      <p className="result-description">{result}</p>
      <p className={`genre-result ${genre}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
