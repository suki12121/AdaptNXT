import {RiDashboard3Line, RiWechatChannelsLine} from 'react-icons/ri'
import {FaFileInvoice} from 'react-icons/fa'
import {AiOutlineOrderedList} from 'react-icons/ai'
import {MdOutlineLocalShipping} from 'react-icons/md'

import './index.css'

const SideBar = () => (
  <div className="sidebar-bg">
    <div className="sidebar-bg1">
      <div className="item-bg99">
        <RiDashboard3Line className="icon-sidebar" />
        <p className="side-heading">DashBoard</p>
      </div>
      <div className="item-bg99">
        <FaFileInvoice className="icon-sidebar" />
        <p className="side-heading">Inventory</p>
      </div>
      <div className="item-bg991">
        <AiOutlineOrderedList className="icon-sidebar1" />
        <p className="side-heading1">Orders</p>
      </div>
      <div className="item-bg99">
        <MdOutlineLocalShipping className="icon-sidebar" />
        <p className="side-heading">Shipping</p>
      </div>
      <div className="item-bg99">
        <RiWechatChannelsLine className="icon-sidebar" />
        <p className="side-heading">Channel</p>
      </div>
    </div>
  </div>
)

export default SideBar
