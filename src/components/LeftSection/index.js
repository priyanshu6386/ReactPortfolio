import "./index.css";
import Education from './Education/index'

const LeftSection = () => {
  return (
    <div className="LeftSection">
      <div className="Education">
        <p className="section-title">Education</p>
        <Education
          institute="M.D College Of Technology and Management"
          years="2020-2023"
          cgpa={7.5}
          point1="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
          point2="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
        />
				<Education
          institute="S.S.M.I.C"
          years="2019-2020"
          cgpa={6.1}
          point1="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
          point2="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
        />
				<Education
          institute="S.S.M.I.C"
          years="2017-2018"
          cgpa={8.1}
          point1="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
          point2="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
        />
      </div>
      <hr />
      <div className="Skill">
        <p className="section-title">Skills</p>
				<ul>
					<li>HTML</li>
					<li>CSS</li>
					<li>Bootstrap</li>
					<li>JavaScript</li>
					<li>React.js</li>
				</ul>
      </div>
    </div>
  );
};

export default LeftSection;
