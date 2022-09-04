import "./WorkCardStyles.css";

import React from "react";
import pro1 from "../assets/project1.png";
import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="wsk-cp-product">
            <div className="wsk-cp-img">
              <img
                src="https://3.bp.blogspot.com/-eDeTttUjHxI/WVSvmI-552I/AAAAAAAAAKw/0T3LN6jABKMyEkTRUUQMFxpe6PLvtcMMwCPcBGAYYCw/s1600/001-culture-clash-matthew-gianoulis.jpg"
                alt="Product"
                className="img-responsive"
              />
            </div>
            <div className="wsk-cp-text">
              <div className="category">
                <span>jhdfbjsdb</span>
              </div>
              <div className="title-product">
                <h3>heading</h3>
              </div>
              <div className="description-prod">
                <p>sldjfbdjk</p>
              </div>
              <div className="card-footer">
                <div className="wcf-left">
                  <span className="price">jhxcbsj joined</span>
                </div>
                <button className="button-74 wcf-right" role="button">
                  Chat
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="wsk-cp-product">
            <div className="wsk-cp-img">
              <img
                src="https://3.bp.blogspot.com/-eDeTttUjHxI/WVSvmI-552I/AAAAAAAAAKw/0T3LN6jABKMyEkTRUUQMFxpe6PLvtcMMwCPcBGAYYCw/s1600/001-culture-clash-matthew-gianoulis.jpg"
                alt="Product"
                className="img-responsive"
              />
            </div>
            <div className="wsk-cp-text">
              <div className="category">
                <span>jdsbkdnkk</span>
              </div>
              <div className="title-product">
                <h3>hello</h3>
              </div>
              <div className="description-prod">
                <p>hiiiii</p>
              </div>
              <div className="card-footer">
                <div className="wcf-left">
                  <span className="price">chai joined</span>
                </div>
                <button className="button-74 wcf-right" role="button">
                  Chat
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="wsk-cp-product">
            <div className="wsk-cp-img">
              <img
                src="https://3.bp.blogspot.com/-eDeTttUjHxI/WVSvmI-552I/AAAAAAAAAKw/0T3LN6jABKMyEkTRUUQMFxpe6PLvtcMMwCPcBGAYYCw/s1600/001-culture-clash-matthew-gianoulis.jpg"
                alt="Product"
                className="img-responsive"
              />
            </div>
            <div className="wsk-cp-text">
              <div className="category">
                <span>heya aarushi</span>
              </div>
              <div className="title-product">
                <h3>haaye</h3>
              </div>
              <div className="description-prod">
                <p>hello again</p>
              </div>
              <div className="card-footer">
                <div className="wcf-left">
                  <span className="price">unlimited joined</span>
                </div>
                <button className="button-74 wcf-right" role="button">
                  Chat
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="wsk-cp-product">
            <div className="wsk-cp-img">
              <img
                src="https://3.bp.blogspot.com/-eDeTttUjHxI/WVSvmI-552I/AAAAAAAAAKw/0T3LN6jABKMyEkTRUUQMFxpe6PLvtcMMwCPcBGAYYCw/s1600/001-culture-clash-matthew-gianoulis.jpg"
                alt="Product"
                className="img-responsive"
              />
            </div>
            <div className="wsk-cp-text">
              <div className="category">
                <span>hiiiiiii</span>
              </div>
              <div className="title-product">
                <h3>haaye</h3>
              </div>
              <div className="description-prod">
                <p>almost done</p>
              </div>
              <div className="card-footer">
                <div className="wcf-left">
                  <span className="price">done joined</span>
                </div>
                <button className="button-74 wcf-right" role="button">
                  Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
