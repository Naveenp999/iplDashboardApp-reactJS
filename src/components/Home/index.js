import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {matchlist: [], isLoading: true}

  componentDidMount() {
    this.makelist()
  }

  makelist = async () => {
    const element = await fetch('https://apis.ccbp.in/ipl')
    const newobj = await element.json()
    const {teams} = newobj
    const newlist = teams.map(item => ({
      id: item.id,
      teamImageUrl: item.team_image_url,
      name: item.name,
    }))
    this.setState({matchlist: newlist, isLoading: false})
  }

  getiplDashboard = () => {
    const {matchlist} = this.state
    return (
      <div className="home-content-container">
        <div className="hori">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-icon"
          />
          <h1 className="heading">IPL DASHBOARD</h1>
        </div>
        <ul className="list-con">
          {matchlist.map(item => (
            <TeamCard content={item} key={item.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="container">
        {isLoading === true ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.getiplDashboard()
        )}
      </div>
    )
  }
}

export default Home
