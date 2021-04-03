import React from "react";
import 'line-awesome/dist/line-awesome/css/line-awesome.css';
import smababhouria from'./avatar.png';

import './nav.css';

export const Navbar = () => {
  return (
  <>

    <input type='checkbox' id='nav-toggle' />
    {/* Side bar  menu */}
    <div className='sidebar'>
       <div className='sidebar-brand'>
          <h2><span className='lab la-accusoft'></span><span>Accusoft</span></h2>
       </div>
        <div className='sidebar-menu'>

          <ul>
            <li>
              <a href='/' className="active" ><span className='las la-igloo'></span><span>Dashboard</span></a>
            </li>

            <li>
              <a href='/'><span className='las la-users'></span><span>Customers</span> </a>
            </li>

            <li>
              <a href='/'><span className='las la-clipboard-list'></span><span>Projects</span></a>
            </li>

            <li>
              <a href='/'><span className='las la-shopping-bag'></span> <span>Orders</span></a>
            </li>

            <li>
              <a href='/'><span className='las la-receipt'></span><span>Inventory</span> </a>
            </li>

            <li>
              <a href='/'><span className='las la-user-circle'></span><span>Accounts</span> </a>
            </li>

            <li>
              <a href='/'><span className='las la-clipboard-list'></span><span>Tasks</span> </a>
            </li>

          </ul>

        </div>

    </div>

      {/* main content  */}
      <div className='main-content'>
       <header>

         <h2>
           <label for = "nav-toggle">
            <span className='las la-bars'></span>
           </label>
            Dashboard
         </h2>

         <div className='search-wrapper'>
           <span className='las la-search'></span>
           <input type='search' placeholder='Search here' />
         </div>

         <div className = 'user-wrapper'>
            <img src={smababhouria} width='50px' height='50px' alt=''/>

            <div>
              <h4>Samba bhouria</h4>
              <small>Super amdin</small>
            </div>

         </div>
       </header>

       <main>
         <div className='cards'>
           <div className='card-single'>
             <div>
               <h1>54</h1>
               <span>Customers</span>
             </div>
             <div>
               <span className='las la-users'></span>
             </div>
           </div>

           <div className='card-single'>
             <div>
               <h1>79</h1>
               <span>Projects</span>
             </div>
             <div>
               <span className='las la-clipboard-list'></span>
             </div>
           </div>

           <div className='card-single'>
             <div>
               <h1>124</h1>
               <span>orders</span>
             </div>
             <div>
               <span className='las la-shopping-bag'></span>
             </div>
           </div>


           <div className='card-single'>
             <div>
               <h1>$6k</h1>
               <span>Income</span>
             </div>
             <div>
               <span className='lab la-google-wallet'></span>
             </div>
           </div>

         </div>

         <div className='recent-grid'>
           <div className='projects'>
              <div className='card'>
                <div className='card-header'>
                  <h3>Recent projects</h3>
                  <button>
                    See all <span className='las la-arrow-right'></span>
                  </button>
                </div>
                <div className='card-body'>
                  <div className='table-responsive'>
                      <table width='100%'>
                          <thead>
                            <tr>
                              <td>Project title</td>
                              <td>Departement</td>
                              <td>Status</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>UI/UX Design</td>
                              <td>UI teams</td>
                              <td>
                                <span className='status purple'></span>
                                review
                              </td>
                            </tr>
                            <tr>
                              <td>Web development</td>
                              <td>Front end</td>
                              <td>
                                <span className='status pink'></span>
                                in progress
                              </td>
                            </tr>
                            <tr>
                              <td>Ushop app</td>
                              <td>Mobile teams</td>
                              <td>
                                <span className='status orange'></span>
                                pending
                              </td>
                            </tr>

                            <tr>
                              <td>UI/UX Design</td>
                              <td>UI teams</td>
                              <td>
                                <span className='status purple'></span>
                                review
                              </td>
                            </tr>
                            <tr>
                              <td>Web development</td>
                              <td>Front end</td>
                              <td>
                                <span className='status pink'></span>
                                in progress
                              </td>
                            </tr>
                            <tr>
                              <td>Ushop app</td>
                              <td>Mobile teams</td>
                              <td>
                                <span className='status orange'></span>
                                pending
                              </td>
                            </tr>

                            <tr>
                              <td>UI/UX Design</td>
                              <td>UI teams</td>
                              <td>
                                <span className='status purple'></span>
                                review
                              </td>
                            </tr>
                            <tr>
                              <td>Web development</td>
                              <td>Front end</td>
                              <td>
                                <span className='status pink'></span>
                                in progress
                              </td>
                            </tr>
                            <tr>
                              <td>Ushop app</td>
                              <td>Mobile teams</td>
                              <td>
                                <span className='status orange'></span>
                                pending
                              </td>
                            </tr>

                          </tbody>
                      </table>
                  </div>
              </div>
             </div>
           </div>

           <div className='customers'>
           <div className='card'>
           <div className='card-header'>
                  <h3>New customer</h3>
                  <button>
                    See all <span className='las la-arrow-right'></span>
                  </button>
                </div>
                <div className='card-body'>
                  <div className='customer'>
                    <div className='info'>
                      <img src={smababhouria} width='40px' height='40px' alt =''/>
                      <div>
                        <h4>Samba Bhouria</h4>
                        <smal>CEO Excert</smal>
                      </div>
                    </div>

                    <div className='contact'>
                      <span className='las la-user-circle'></span>
                      <span className='las la-comment'></span>
                      <span className='las la-phone'></span>
                    </div>

                  </div>

                  <div className='customer'>
                    <div className='info'>
                        <img src={smababhouria} width='40px' height='40px' alt =''/>
                        <div>
                          <h4>Samba Bhouria</h4>
                          <smal>CEO Excert</smal>
                        </div>
                      </div>

                      <div className='contact'>
                        <span className='las la-user-circle'></span>
                        <span className='las la-comment'></span>
                        <span className='las la-phone'></span>
                      </div>

                  </div>

                  <div className='customer'>
                    <div className='info'>
                        <img src={smababhouria} width='40px' height='40px' alt =''/>
                        <div>
                          <h4>Samba Bhouria</h4>
                          <smal>CEO Excert</smal>
                        </div>
                      </div>

                      <div className='contact'>
                        <span className='las la-user-circle'></span>
                        <span className='las la-comment'></span>
                        <span className='las la-phone'></span>
                      </div>
                  </div>

                  <div className='customer'>
                    <div className='info'>
                        <img src={smababhouria} width='40px' height='40px' alt =''/>
                        <div>
                          <h4>Samba Bhouria</h4>
                          <smal>CEO Excert</smal>
                        </div>
                      </div>

                      <div className='contact'>
                        <span className='las la-user-circle'></span>
                        <span className='las la-comment'></span>
                        <span className='las la-phone'></span>
                      </div>
                  </div>

                  <div className='customer'>
                    <div className='info'>
                        <img src={smababhouria} width='40px' height='40px' alt =''/>
                        <div>
                          <h4>Samba Bhouria</h4>
                          <smal>CEO Excert</smal>
                        </div>
                      </div>

                      <div className='contact'>
                        <span className='las la-user-circle'></span>
                        <span className='las la-comment'></span>
                        <span className='las la-phone'></span>
                      </div>

                  </div>

                  <div className='customer'>
                    <div className='info'>
                        <img src={smababhouria} width='40px' height='40px' alt =''/>
                        <div>
                          <h4>Samba Bhouria</h4>
                          <smal>CEO Excert</smal>
                        </div>
                      </div>

                      <div className='contact'>
                        <span className='las la-user-circle'></span>
                        <span className='las la-comment'></span>
                        <span className='las la-phone'></span>
                      </div>

                    </div>

                  <div className='customer'>
                    <div className='info'>
                        <img src={smababhouria} width='40px' height='40px' alt =''/>
                        <div>
                          <h4>Samba Bhouria</h4>
                          <smal>CEO Excert</smal>
                        </div>
                      </div>

                      <div className='contact'>
                        <span className='las la-user-circle'></span>
                        <span className='las la-comment'></span>
                        <span className='las la-phone'></span>
                      </div>
                  </div>

                </div>
              </div>
          </div>

         </div>

       </main>
     </div>
   </>
  )
}
