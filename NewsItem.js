import React from "react";
const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          right: '0'
        }}>
        </div>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "90%" }}>{source} </span>
        <img src={!imageUrl ? "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202404/luna-crater-india-gujarat-29040519-16x9_0.jpg?VersionId=UMUk7By27cxeR11lBQOMEclrpRABsnZa&size=690:388" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text " style={{ color: "red" }}> By {!author ? "Unknown" : author} on{" "} {new Date(date).toLocaleTimeString()} </small>
          </p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary" > Readmore </a>
        </div>
      </div>
    </div>
  );

}

export default NewsItem;
