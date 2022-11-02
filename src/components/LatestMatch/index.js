// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
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
  } = latestMatchDetails

  return (
    <div className="card1">
      <div className="main-details">
        <p className="text">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="venue">{result}</p>
      </div>
      <img
        className="image1"
        alt={`latest match ${competingTeam}`}
        src={competingTeamLogo}
      />
      <div className="innings-container">
        <p className="headings">First Innings</p>
        <p className="answers">{firstInnings}</p>
        <p className="headings">Second Innings</p>
        <p className="answers">{secondInnings}</p>
        <p className="headings">Man Of The Match</p>
        <p className="answers">{manOfTheMatch}</p>
        <p className="headings">Umpires</p>
        <p className="answers">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
