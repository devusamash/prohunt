import "./newGig.css";

export default function NewGig() {
  return (
    <div className="newGig">
      <h1 className="addGigTitle">New Gig</h1>
      <form className="addGigForm">
        <div className="addGigItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addGigItem">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="addGigItem">
          <label>Price</label>
          <input type="text" placeholder="$" />
        </div>
        <div className="addGigItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addGigButton">Create</button>
      </form>
    </div>
  );
}
