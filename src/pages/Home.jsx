
import iansPhoto from "../assets/Screen Shot 2023-04-19 at 11.19.09 AM.png"
export default function Home() {
  return (
    <div>
      <br />  
      <h1 >About Me</h1>
      <br />
      <h5>
        Hello everyone, welcome to my portfolio website.
      </h5>
      <div className="row">
      <p class="col-md-8">
        I am a University of Austin Full-Stack Web Development graduate 
        ready to jump on board with a team that could benifit from the skill-sets 
        I bring to the table. Enjoy parusing through my portfolio website taking note
        of the array of projects, the contact page, and more
      </p>
      <div className="col-md-4">
          <img
            src={iansPhoto} // Replace with your image URL
            alt="Photo of Ian Anderson"
            className="img-fluid"
            style={{ borderRadius: '6.5%' }}
          />
        </div>
      </div>
    </div>
  );
}
