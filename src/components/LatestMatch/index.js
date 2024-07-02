import './index.css'

const LatestMatch = props => {
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
  return (
    <div className="latest-match-container">
      <div className="horizantal">
        <div className="horizantal-sub">
          <p className="competing-team-name">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="latest-match-names">{venue}</p>
          <p className="latest-match-names">{result}</p>
        </div>
        <div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="latest-match-logo"
          />
        </div>
      </div>
      <hr className="line" />
      <div className="match-statistics">
        <p className="latest-match-text">First Innings</p>
        <p className="latest-match-names">{firstInnings}</p>
        <p className="latest-match-text">Second Innings</p>
        <p className="latest-match-names">{secondInnings}</p>
        <p className="latest-match-text">Man Of The Match</p>
        <p className="latest-match-names">{manOfTheMatch}</p>
        <p className="latest-match-text">Umpires</p>
        <p className="latest-match-names">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
