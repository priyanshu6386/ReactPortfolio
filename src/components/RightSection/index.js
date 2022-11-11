import './index.css';
import Project from './Project/index'

const RightSection = () => {
  return (
    <div className="RightSection">
      <div className="Projects">
        <p className="section-title">Projects</p>
        <Project
          name="Calculator App"
          year="2019"
          techStack={["HTML", "CSS", "Bootstrap", "JavaScript"]}
					point1="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
          point2="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
        />
				 <Project
          name="Order Status Management App"
          year="2021"
          techStack={["HTML", "CSS", "Bootstrap", "React.js"]}
					point1="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
          point2="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
        />
				 <Project
          name="Registration App"
          year="2019"
          techStack={["HTML", "CSS", "JavaScript"]}
					point1="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
          point2="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
        />
      </div>
      <hr />
      <div className="Achievements">
        <p className="section-title">Achievements</p>
        <ul>
					<li>Secured 1rank in acciojob contest</li>
					<li>Get certified in C++ </li>
					<li>Certified in Java</li>
				</ul>
      </div>
			<hr />
      <div className="Languages">
        <p className="section-title">Languages</p>
        <ul>
					<li>English</li>
					<li>Hindi</li>
				</ul>
      </div>
    </div>
  );
};

export default RightSection;
