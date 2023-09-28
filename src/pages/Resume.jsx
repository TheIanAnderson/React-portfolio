import resumePhoto from '../assets/resume.png'
export default function About() {
  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="col-md-6">
          <h1>Resume Download</h1>
          <p>
            By clicking this link you'll be lead to a pdf with my current resume. Once on that page, simply click download and you'll have my expansive resume in your downloads folder!
          </p>
        </div>
        <div className="col-md-6">
          <div className="card" style={{ width: '100%' }}>
            <img className="card-img-top" src={resumePhoto} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Click link to check it out!</h5>
              <p className="card-text">Some features on site may be disabled currently...</p>
              <a href="https://docs.google.com/document/d/1BReIWPflg414AUgFj9uJEUFOlfsx_RarVecf4N4DdmA/edit?usp=sharing" className="btn btn-primary">Visit</a>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}