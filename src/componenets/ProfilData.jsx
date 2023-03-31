import React, { useState } from "react";
import Card from "./Card";

export default function ProfileTable(props) {
  const [display, setDisplay] = useState(-1);
  return (
    <>
      <div className="left-part col-10 col-sm-10 col-md-10 col-lg-8 col-xl-8 col-xxl-8">
        <table className="table no-border">
          <thead>
            <tr>
              <th scope="col-lg-2" className="heading">
                <h5>Name</h5>
              </th>
              <th scope="col-lg-8" className="heading">
                <h5>Status</h5>
              </th>
              <th scope="col-lg-2" className="heading">
                <h5>Access</h5>
              </th>
            </tr>
          </thead>
          <tbody>
            {props.arr.map((user_info, i) => {
              return (
                <tr className="item-loop " key={i}>
                  <td>
                    <div
                      className="name-list d-flex"
                      onMouseEnter={() => setDisplay(i)}
                      onMouseLeave={() => setDisplay(-1)}
                    >
                      <div className="profile-pic">
                        <img src={user_info.avatar}></img>
                      </div>
                      <div className="info">
                        <h6>
                          {user_info.first_name + " " + user_info.last_name}
                        </h6>
                        <p>{user_info.email}</p>
                      </div>
                    </div>
                  </td>

                  {user_info.access == "Owner" ? (
                    <>
                      <td>
                        <div className="owner-status">
                          <h6>Active</h6>
                        </div>
                      </td>
                      <td>
                        <div className="owner-access">
                          <h6>Owner</h6>
                        </div>
                      </td>
                      <td>
                        <div className="owner-lock">
                          <i className="fas fa-lock fa-xl"></i>
                        </div>
                      </td>
                    </>
                  ) : (
                    <>
                      <td>
                        {/* dropdown menu to show status */}

                        <div className="dropdown">
                          <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Inactive
                          </button>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton1"
                          >
                            <li>
                              <a className="dropdown-item" href="#">
                                Active
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <div className="access-list ">
                          <div className="dropdown">
                            <button
                              className="btn btn-secondary dropdown-toggle"
                              type="button"
                              id="dropdownMenuButton1"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Manager
                            </button>
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton1"
                            >
                              <li>
                                <a className="dropdown-item" href="#">
                                  Read
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                      <td>
                        <i className="fa fa-trash-o fa-xl"></i>
                      </td>
                    </>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* page navigation by onclicking the button*/}
        <div className="page-navigation">
          {[...Array(props.totalpage)].map((i, index) => (
            <button
              key={index}
              disabled={props.currentpage == index + 1 ? true : false}
              onClick={() => {
                props.handlePageChange(index + 1);
              }}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      {/* display card according to index number  */}
      <Card arr={props.arr} display={display} />
    </>
  );
}
