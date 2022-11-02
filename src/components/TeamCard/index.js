// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {each} = props
  const {id, name, teamImageUrl} = each

  return (
    <Link to={`/team-matches/${id}`} className="link-item">
      <li className="card">
        <img className="image" alt={name} src={teamImageUrl} />
        <p className="name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
