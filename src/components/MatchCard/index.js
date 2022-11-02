// Write your code here

import './index.css'

const MatchCard = props => {
  const {each} = props
  const {competingTeam, result, competingTeamLogo, matchStatus} = each

  const winClassname = matchStatus === 'Won' ? 'Lost' : 'win'

  return (
    <li className="Match-card">
      <img
        className="logo1"
        alt={`competing team ${competingTeam}`}
        src={competingTeamLogo}
      />
      <p className="head">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={winClassname}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
