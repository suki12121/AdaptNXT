import {MdFilterList} from 'react-icons/md'
import {IoMoonOutline} from 'react-icons/io5'
import {FaRegBell, FaAsymmetrik} from 'react-icons/fa'

import './index.css'

const Header = () => (
  <div className="header-bg">
    <div className="header-bg1">
      <img src="ashjnsas" alt="avatar" className="header-image" />
      <MdFilterList className="header-icon" />
    </div>
    <div className="header-bg2">
      <IoMoonOutline className="header-icon" />
      <FaRegBell className="header-icon" />
      <FaAsymmetrik className="header-icon" />
      <img src="ashjnsas" alt="avatar" className="header-image" />
    </div>
  </div>
)

export default Header
