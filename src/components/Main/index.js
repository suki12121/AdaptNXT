import Header from '../Header'
import SideBar from '../SideBar'
import MainBody from '../MainBody'
import './index.css'

const Main = () => (
  <div className="output-bg">
    <Header />
    <div className="output-bg1">
      <SideBar />
      <MainBody />
    </div>
  </div>
)

export default Main
