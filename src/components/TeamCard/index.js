import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {content} = props
  const {id, name, teamImageUrl} = content
  return (
    <li className="item-container">
      <Link to={`/team-matches/${id}`} className="link">
        <div className="sub-item">
          <img src={teamImageUrl} alt={name} className="team-icon" />
          <p className="team-name">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
