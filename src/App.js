import React, { useEffect, useState } from "react";
import "./App.css";
import ProfileTable from "./componenets/ProfilData";

export default function App() {
  // first empty array and then will set with the data given in api
  const [arr, setArr] = useState([]);
  // card display first -1 that is nothingand then will set according to it's index to display particular user

  const [currentpage, setCurrentPage] = useState(1);
  const [totalpage, setTotalPage] = useState(0);

  function handlePageChange(i) {
    setCurrentPage(i);
    //fetching api and diplaying page according to the button clicked by user
    fetch(process.env.REACT_APP_URL+`page=${i}`)
      .then((response) => response.json())
      .then((json) => {
        setTotalPage(json.total_pages);

        if (i == 1) {
          json.data[0].access = "Owner";
          json.data[0].status = "Active";
          setArr(json.data);
        } else {
          setArr(json.data);
        }
      });
  }
  // Will render at first time when componenet mounts
  useEffect(() => handlePageChange(1), []);

  return (
    <>
      <div className="container-fluid row">

        <div className="left_part col-10 col-sm-10 col-md-10 col-lg-8 col-xl-8 col-xxl-8">
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
              {arr.map((list, i) => {
                return (
                  <tr className="item_loop " key={i}>
                    <td>
                      <div
                        className="name_list d-flex"
                        onMouseEnter={() => setDisplay(i)}
                        onMouseLeave={() => setDisplay(-1)}
                      >
                        <div className="profile_pic">
                          <img src={list.img}></img>
                        </div>
                        <div className="info">
                          <h6>{list.name}</h6>
                          <p>{list.email}</p>
                        </div>
                      </div>
                    </td>
                   
                    {list.access == "Owner" ? (
                      <>
                        <td>
                          <div className="owner_status">
                            <h6>Active</h6>
                          </div>
                        </td>
                        <td>
                          <div className="owner_access">
                            <h6>Owner</h6>
                          </div>
                        </td>
                        <td>
                          <div className="owner_lock">
                            <i class="fas fa-lock fa-xl"></i>
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
                              {list.status}
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
                          <div className="access_list ">
                            <div className="dropdown">
                              <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                {list.access}
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
        </div>

        <div className="right col-10 col-sm-10 col-md-10 col-lg-4 col-xl-4 col-xxl-4">


          {display == -1 ? null : (
            <div className="box">
              <div className="center_content d-flex">
                <div className="image_right">
                  <img src={arr[display].img}></img>
                </div>

                <div className="name d-flex">
                  <h4>
                    {arr[display].name}
                  </h4>
                  <div className="circle"></div>
                </div>
                <p>{arr[display].email}</p>
                <h4>Your Plan: Standard </h4>
                <button>Active User</button>
              </div>

              <h5>Plan Uses</h5>
              <div>
                <input type="range" id="range" />
              </div>

              <div className="numbers d-flex">
                <div className="clicks_reviewed">
                  <h3>2,450</h3>
                  <p>clicks reviewed</p>
                </div>
                <div className="border_between"></div>

                <div className="monthly_click">
                  <h3>5000</h3>
                  <p>Monthly clicks</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <ProfileTable
          arr={arr}
          currentpage={currentpage}
          totalpage={totalpage}
          handlePageChange={handlePageChange}
        />

      </div>
    </>
  );
}
