import UserProfile from './components/UserProfile/index'
import './App.css'

const userDetails = [
  {
    id: 1,
    imageurl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    id: 2,
    imageurl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Frontend Developer',
  },
  {
    id: 3,
    imageurl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Full Stack Developer',
  },
  {
    id: 4,
    imageurl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'ML Developer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">User Profile</h1>
    <ul>
      {userDetails.map(eachItem => (
        <UserProfile key={eachItem.id} userDetails={eachItem} />
      ))}
    </ul>
  </div>
)

export default App
