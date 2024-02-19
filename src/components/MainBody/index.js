import {LuImport, LuRefreshCcw} from 'react-icons/lu'
import {MdOutlineKeyboardDoubleArrowRight, MdOutlinePrint} from 'react-icons/md'
import {IoIosArrowDown} from 'react-icons/io'
import {RiFilterLine} from 'react-icons/ri'
import {IoSearch} from 'react-icons/io5'
import {FaSackDollar} from 'react-icons/fa6'
import {LiaLessThanSolid, LiaGreaterThanSolid} from 'react-icons/lia'
import {RxCross2} from 'react-icons/rx'

import {CgArrowsScrollV} from 'react-icons/cg'

import './index.css'

const MainBody = () => (
  <div>
    <div className="no-bg">
      <div className="item-bg9911">
        <p className="side-heading11">Orders</p>
        <RxCross2 className="icon-sidebar11" />
      </div>
      <div className="item-bg99111">
        <p className="passage-bg">Pending</p>
        <p>Accepted</p>
        <p>AWBCredited</p>
        <p>Ready To Ship</p>
        <p>Shipped</p>
        <p>Completed</p>
        <p>Cancelled</p>
      </div>
    </div>
    <div className="main-bg">
      <div className="main-bg1">
        <div className="main-bg12">
          <div className="button-bg">
            <LuImport className="icon" />
            <p className="icon1">Import Orders</p>
          </div>
          <div className="button-bg">
            <MdOutlineKeyboardDoubleArrowRight className="icon2" />
            <p className="icon21">Accept</p>
          </div>
          <div className="button-bg">
            <MdOutlinePrint className="icon2" />
            <p className="icon21">print</p>
            <IoIosArrowDown className="icon2" />
          </div>
        </div>
        <div className="button-bg1">
          <LuRefreshCcw className="icon21" />
          <p className="icon211">Refresh</p>
        </div>
      </div>
      <div className="main-bg2">
        <div className="item-bg">
          <p> </p>
          <input type="checkbox" />
          <div className="item-bg1">
            <p>Channel</p>
            <CgArrowsScrollV />
            <RiFilterLine />
          </div>
          <div className="item-bg1">
            <p>OrderNo</p>
            <div>
              <CgArrowsScrollV />
              <IoSearch />
            </div>
          </div>
          <div className="item-bg1">
            <p>OrderDate</p>
            <div>
              <CgArrowsScrollV />
              <IoSearch />
            </div>
          </div>
          <div className="item-bg1">
            <p>City</p>
            <CgArrowsScrollV />
          </div>
          <div className="item-bg1">
            <p>Customer Name</p>
            <IoSearch />
          </div>
          <div className="item-bg1">
            <p>Order Value</p>
            <CgArrowsScrollV />
          </div>
          <div className="item-bg1">
            <p>Status</p>
            <CgArrowsScrollV />
          </div>
          <div className="item-bg1">
            <p>Operation</p>
          </div>
        </div>
        <div>
          <div className="item-bg">
            <p>+</p>
            <input type="checkbox" />
            <div className="item-bg1">
              <FaSackDollar />
            </div>
            <div className="item-bg1">
              <p className="order-no">#TN67933hh6</p>
            </div>
            <div className="item-bg1">
              <p>2024-02-19</p>
            </div>
            <div className="item-bg1">
              <p>Lucknow</p>
            </div>
            <div className="item-bg1">
              <p>Abhisheak Dixit</p>
            </div>
            <div className="item-bg1">
              <p>0.0</p>
            </div>
            <div className="item-bg1">
              <button type="button" className="pending-button">
                pending
              </button>
            </div>
            <div className="item-bg1">
              <p className="icon21">Actions</p>
              <IoIosArrowDown className="icon2" />
            </div>
          </div>
        </div>
        <div>
          <div className="item-bg">
            <p>+</p>
            <input type="checkbox" />
            <div className="item-bg1">
              <FaSackDollar />
            </div>
            <div className="item-bg1">
              <p className="order-no">#TN67933hh6</p>
            </div>
            <div className="item-bg1">
              <p>2024-02-19</p>
            </div>
            <div className="item-bg1">
              <p>Lucknow</p>
            </div>
            <div className="item-bg1">
              <p>Abhisheak Dixit</p>
            </div>
            <div className="item-bg1">
              <p>0.0</p>
            </div>
            <div className="item-bg1">
              <button type="button" className="pending-button">
                pending
              </button>
            </div>
            <div className="item-bg1">
              <p className="icon21">Actions</p>
              <IoIosArrowDown className="icon2" />
            </div>
          </div>
        </div>
        <div>
          <div className="item-bg">
            <p>+</p>
            <input type="checkbox" />
            <div className="item-bg1">
              <FaSackDollar />
            </div>
            <div className="item-bg1">
              <p className="order-no">#TN67933hh6</p>
            </div>
            <div className="item-bg1">
              <p>2024-02-19</p>
            </div>
            <div className="item-bg1">
              <p>Lucknow</p>
            </div>
            <div className="item-bg1">
              <p>Abhisheak Dixit</p>
            </div>
            <div className="item-bg1">
              <p>0.0</p>
            </div>
            <div className="item-bg1">
              <button type="button" className="pending-button">
                pending
              </button>
            </div>
            <div className="item-bg1">
              <p className="icon21">Actions</p>
              <IoIosArrowDown className="icon2" />
            </div>
          </div>
        </div>
      </div>
      <div className="page-bg">
        <div className="page-bg1">
          <p className="page-button">
            <LiaLessThanSolid />
          </p>
          <p className="page-button page no">1</p>
          <p className="page-button">
            <LiaGreaterThanSolid />
          </p>
          <div className="item-bg1">
            <p className="icon21">20/Page</p>
            <IoIosArrowDown className="icon2" />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default MainBody
