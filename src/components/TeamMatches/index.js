import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamUrl: '',
    latestMatch: {},
    recentMatches: [],
    isLoading: true,
    color: '',
  }

  componentDidMount() {
    this.setstatevalues()
  }

  getmatchdetails = item => ({
    umpires: item.umpires,
    result: item.result,
    manOfTheMatch: item.man_of_the_match,
    id: item.id,
    date: item.date,
    venue: item.venue,
    competingTeam: item.competing_team,
    competingTeamLogo: item.competing_team_logo,
    firstInnings: item.first_innings,
    secondInnings: item.second_innings,
    matchStatus: item.match_status,
  })

  setstatevalues = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const element = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const content = await element.json()
    const teamMatchUrl = content.team_banner_url
    const latestMatchDetails = this.getmatchdetails(
      content.latest_match_details,
    )
    const recentMatchesDetails = content.recent_matches.map(item =>
      this.getmatchdetails(item),
    )
    this.setState({
      teamUrl: teamMatchUrl,
      latestMatch: latestMatchDetails,
      recentMatches: recentMatchesDetails,
      color: id,
      isLoading: false,
    })
  }

  render() {
    const {color, isLoading, teamUrl, latestMatch, recentMatches} = this.state
    return isLoading ? (
      <div data-testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      <div className={`teammatch-container ${color}`}>
        <div className="subs">
          <img src={teamUrl} className="team-squad-icon" alt="team banner" />
          <h1 className="teammatch-text">Latest Matches</h1>
          <LatestMatch item={latestMatch} />
          <ul className="matchcard-container">
            {recentMatches.map(element => (
              <MatchCard item={element} key={element.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default TeamMatches
