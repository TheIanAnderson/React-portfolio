
import iansPhoto1 from '../assets/1.png'
import iansPhoto2 from '../assets/2.png'
import iansPhoto3 from '../assets/3.png'
export default function Projects() {
  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="col-md-6">
          <h1>Movie Poster and Trailer Generator</h1>
          <p>
          In this project, my teammates and I were challenged to create multiple API calls using jQuery and a few older tools 0to develop a useful web app. We encountered several issues when calling and populating accurate information, as well as ensuring that the data loaded quickly. One of my favorite aspects was how we were able to utilize YouTube's API and some CSS packages to create a carousel of movie trailers based on users' searches at the bottom!
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="row">
        <div className="col-md-6">
          <h1>Weather App</h1>
          <p>

          In the development of this weather app, I set out to create a straightforward yet efficient tool that retrieves weather information based on user searches. The app boasts features such as saving past searches, providing comprehensive data including humidity, temperature, and wind speeds, and delivering a 5-day weather forecast.

Among the most gratifying aspects of this project were the learning experiences it offered. Navigating through errors, honing my debugging skills, and applying newly acquired JavaScript logic during the creation process were particularly enjoyable and contributed significantly to my skill development.
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="row">
        <div className="col-md-6">
          <h1>Password Generator</h1>
          <p>
            This is another project completed in school to learn about JavaScript logic, as well as DOM features like alerts. In this site you'll be able to choose from a list of parameters to have it create a password length, capitol and lowercase letters, numbers and special characters.
          </p>
        </div>
        <br />
      <br />
      <br />
      <br />
      <br />
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










// export default function About() {
//   return (
//     <div>
//       <h1>Portfolio</h1>
//       <p>
//         Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
//         Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
//         mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
//         lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
//         imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
//         in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
//       </p>
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//     </div>
//   );
// }
