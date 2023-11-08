import "./resume.css";
import { MainInfo } from "./mainInfo";
import { Education } from "./education";
import { Reference } from "./reference";
import { Languages } from "./languages";
import { Skills } from "./skills";
import { Additional } from "./additional";
import { EdCourse } from "./educaionCource";
import { Qualities } from "./qualities";

export const Resume = () => {
  return (
    <>
      <MainInfo />
      <Education />
      <Reference />
      <Languages />
      <Skills />
      <Additional />
      <EdCourse />
      <Qualities />
    </>
  );
};
