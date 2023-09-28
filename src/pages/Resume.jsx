
import iansPhoto1 from '../assets/1.png'
import iansPhoto2 from '../assets/2.png'
import iansPhoto3 from '../assets/3.png'
export default function Projects() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1>Movie Poster and Trailer Generator</h1>
          <p>
            Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
            Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
            dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
            sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc,
            sed pretium risus rutrum eget. Nam consequat, ligula in faucibus
            vestibulum, nisi justo laoreet risus, luctus luctus mi lacus sit amet
            libero. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Mauris pretium condimentum tellus eget
            lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Donec placerat accumsan mi, ut congue neque placerat eu. Donec nec ipsum
            in velit pellentesque vehicula sit amet at augue. Maecenas aliquam
            bibendum congue. Pellentesque semper, lectus non ullamcorper iaculis,
            est ligula suscipit velit, sed bibendum turpis dui in sapien.
          </p>
        </div>
        <div className="col-md-6">
          <div className="card" style={{ width: '100%' }}>
            <img className="card-img-top" src={iansPhoto1} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Click link to check it out!</h5>
              <p className="card-text">Some features on site may be disabled currently...</p>
              <a href="https://theiananderson.github.io/Movie-Trailer-Search/" className="btn btn-primary">Visit</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h1>Weather App</h1>
          <p>
            Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
            Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
            dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
            sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc,
            sed pretium risus rutrum eget. Nam consequat, ligula in faucibus
            vestibulum, nisi justo laoreet risus, luctus luctus mi lacus sit amet
            libero. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Mauris pretium condimentum tellus eget
            lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Donec placerat accumsan mi, ut congue neque placerat eu. Donec nec ipsum
            in velit pellentesque vehicula sit amet at augue. Maecenas aliquam
            bibendum congue. Pellentesque semper, lectus non ullamcorper iaculis,
            est ligula suscipit velit, sed bibendum turpis dui in sapien.
          </p>
        </div>
        <div className="col-md-6">
          <div className="card" style={{ width: '100%' }}>
            <img className="card-img-top" src={iansPhoto2} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Click Link to try it out!</h5>
              <p className="card-text">This app will show you weather patterns and forcast in what ever city you search! Have fune!.</p>
              <a href="https://theiananderson.github.io/Weather-app/" className="btn btn-primary">Visit</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h1>Password Generator</h1>
          <p>
            Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
            Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
            dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
            sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc,
            sed pretium risus rutrum eget. Nam consequat, ligula in faucibus
            vestibulum, nisi justo laoreet risus, luctus luctus mi lacus sit amet
            libero. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Mauris pretium condimentum tellus eget
            lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Donec placerat accumsan mi, ut congue neque placerat eu. Donec nec ipsum
            in velit pellentesque vehicula sit amet at augue. Maecenas aliquam
            bibendum congue. Pellentesque semper, lectus non ullamcorper iaculis,
            est ligula suscipit velit, sed bibendum turpis dui in sapien.
          </p>
        </div>
        <div className="col-md-6">
          <div className="card" style={{ width: '100%' }}>
            <img className="card-img-top" src={iansPhoto3} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Click link below for a new password!</h5>
              <p className="card-text">Isn't it so inconvenient to have to think of a new password when you make an account somewhere? Yeah, we thought so. Check out our app to create you a custom password on a click!.</p>
              <a href="https://theiananderson.github.io/Password-Generator/" className="btn btn-primary">visit</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

