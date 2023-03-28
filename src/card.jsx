import React from "react";
export default function Card(props) {
  return (
    <>
      <div className="right col-10 col-sm-10 col-md-10 col-lg-4 col-xl-4 col-xxl-4">
        {props.display == -1 ? null : (
          <div className="box">
            <div className="center_content d-flex">
              <div className="image_right">
                <img src={props.arr[props.display].avatar}></img>
              </div>

              <div className="name d-flex">
                <h4>
                  {props.arr[props.display].first_name +
                    " " +
                    props.arr[props.display].last_name}
                </h4>
                <div className="circle"></div>
              </div>

              <p>{props.arr[props.display].email}</p>
              <h5>Your Plan: Standard </h5>
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
    </>
  );
}
