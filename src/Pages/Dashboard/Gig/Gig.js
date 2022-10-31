import { Link } from "react-router-dom";
import "./gig.css";
import Chart from "../../../components/Chart/Chart";
import { gigData } from "./GigDummyData";
import PublishIcon from "@mui/icons-material/Publish";

export default function Gig() {
  return (
    <div className="gig">
      <div className="gigTitleContainer">
        <h1 className="gigTitle">gig</h1>
        <Link to="/newgig">
          <button className="gigAddButton">Create</button>
        </Link>
      </div>
      <div className="gigTop">
        <div className="gigTopLeft">
          <Chart data={gigData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="gigTopRight">
          <div className="gigInfoTop">
            <img
              src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="gigInfoImg"
            />
            <span className="gigName">I will develop a website for you</span>
          </div>
          <div className="gigInfoBottom">
            <div className="gigInfoItem">
              <span className="gigInfoKey">id:</span>
              <span className="gigInfoValue">123</span>
            </div>
            <div className="gigInfoItem">
              <span className="gigInfoKey">sales:</span>
              <span className="gigInfoValue">5123</span>
            </div>
            <div className="gigInfoItem">
              <span className="gigInfoKey">active:</span>
              <span className="gigInfoValue">yes</span>
            </div>
            <div className="gigInfoItem">
              <span className="gigInfoKey">price:</span>
              <span className="gigInfoValue">100$</span>
            </div>
          </div>
        </div>
      </div>
      <div className="gigBottom">
        <form className="gigForm">
          <div className="gigFormLeft">
            <label>Gig Name</label>
            <input type="text" placeholder="I will develop a website for you" />
            <label>Status</label>
            <select name="Status" id="Status">
              <option value="yes">Live</option>
              <option value="no">Offline</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="gigFormRight">
            <div className="gigUpload">
              <img
                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="gigUploadImg"
              />
              <label for="file">
                <PublishIcon />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="gigButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
