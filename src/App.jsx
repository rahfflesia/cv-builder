import "./App.css";
import "./styles/cv-component.css";
import General from "./components/input-components/General";
import ProfessionalSummary from "./components/input-components/ProfessionalSummary";
import CustomInformation from "./components/input-components/CustomInformation";
import Skills from "./components/input-components/Skills";
import Education from "./components/input-components/Education";
import Work from "./components/input-components/Work";
import ResumeHeader from "./components/cv-components/ResumeHeader";
import DefaultPicture from "../public/images/kaneki.jpg";
import ResumeProfessionalSummary from "./components/cv-components/ResumeProfessionalSummary";
import ResumeSkills from "./components/cv-components/ResumeSkills";
import ResumeCustomInformation from "./components/cv-components/ResumeCustomInformation";
import ResumeWorkExperience from "./components/cv-components/ResumeWorkExperience";
import ResumeEducation from "./components/cv-components/ResumeEducation";
import { useState } from "react";
import GeneralInfo from "./classes/generalInfo";
import CustomInfo from "./classes/customInfo";
import WorkExperience from "./classes/workExperience";
import EducationHistory from "./classes/educationHistory";
import exportPdf from "./utils/exportPdf";

function App() {
  /* Header state variables */
  const [latestGeneralInfo, setLatestGeneralInfo] = useState(
    new GeneralInfo(
      DefaultPicture,
      "Ken Kaneki",
      "kenkaneki@anteiku.com",
      "Tokyo, Japan",
      "7012341234"
    )
  );

  /* Professional summary state variables */
  const [latestSummary, setLatestSummary] = useState(
    "Results-driven Software Engineer with 5 years of experience designing, developing, and optimizing scalable applications and systems. Skilled in full-stack development, cloud technologies, and agile methodologies, with a strong focus on writing clean, maintainable code and delivering high-quality solutions that meet business needs. Adept at collaborating across cross-functional teams, solving complex technical challenges, and continuously learning new tools and frameworks to drive innovation and efficiency."
  );

  /* Skills state variables */
  const [skillsValues, setSkillsValues] = useState([
    "JavaScript",
    "TypeScript",
    "CSS",
    "HTML5",
    "Sass",
    "React",
    "Angular",
    "Less",
    "C",
    "Assembly",
    "Webpack",
    "Vite",
    "Git",
  ]);

  /* Custom information state variables */
  const [updatedCustomInfo, setUpdatedCustomInfo] = useState(
    new CustomInfo("FUN FACT", "I'm a one eyed ghoul.")
  );

  /* Work experience state variables */
  const [updatedWorkExperience, setUpdatedWorkExperience] = useState([
    new WorkExperience(
      "Microsoft",
      "Seattle, United States",
      "31/01/07",
      "20/11/23",
      "Software Engineer",
      "Developed and mantained software using mainly web technologies like JavaScript and TypeScript."
    ),
    new WorkExperience(
      "Boston Dynamics",
      "Boston, United States",
      "30/11/24",
      "08/08/25",
      "Low Level Engineer",
      "Developed drivers using mainly C and Assembly."
    ),
  ]);

  /* Education history state variables */
  const [updatedEducationHistory, setUpdatedEducationHistory] = useState([
    new EducationHistory(
      "Massachusetts Institute of Technology",
      "Massachusetts, United States",
      "20/08/22",
      "30/01/27",
      "Bachelor's in Computer Science",
      "As a computer science major, I’ve learned how to think critically and solve problems using computational approaches. I’ve studied programming languages, algorithms, and data structures to build efficient software, while also gaining an understanding of computer systems, networks, and operating systems. I’ve explored areas like databases, cybersecurity, and artificial intelligence, which showed me how computer science connects to real-world applications. Through these experiences, I’ve developed strong problem-solving, logical reasoning, and analytical skills."
    ),
  ]);

  return (
    <div className="app">
      <section className="data-section">
        <General setLatestGeneralInfo={setLatestGeneralInfo}></General>
        <ProfessionalSummary
          setLatestSummary={setLatestSummary}
        ></ProfessionalSummary>
        <Skills setSkillsValues={setSkillsValues}></Skills>
        <Education
          setUpdatedEducationHistory={setUpdatedEducationHistory}
        ></Education>
        <Work setUpdatedWorkExperience={setUpdatedWorkExperience}></Work>
        <CustomInformation
          setUpdatedCustomInfo={setUpdatedCustomInfo}
        ></CustomInformation>
        <button onClick={exportPdf}>Save as PDF</button>
      </section>
      <section className="cv-section" id="cv-component">
        <ResumeHeader generalDataObject={latestGeneralInfo}></ResumeHeader>
        <ResumeProfessionalSummary
          storedSummary={latestSummary}
        ></ResumeProfessionalSummary>
        <ResumeSkills skillsToRender={skillsValues}></ResumeSkills>
        <ResumeEducation
          educationHistoryArray={updatedEducationHistory}
        ></ResumeEducation>
        <ResumeWorkExperience
          workExperienceToRender={updatedWorkExperience}
        ></ResumeWorkExperience>
        <ResumeCustomInformation
          updatedCustomInfo={updatedCustomInfo}
        ></ResumeCustomInformation>
      </section>
    </div>
  );
}

export default App;
