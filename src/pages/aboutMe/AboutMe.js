import { Typography } from '@material-ui/core';
import './aboutMe.scss';

export default function AboutMe() {
  const technologies = ["ReactJS", "Angular2+", "Javascript [NodeJS/Browser(V8)]", "HTML", "CSS", "SQL", "Java", "ExpressJS", "Python"];
  const ratings = ["Proficient", "Proficient", "Proficient", "Intermediate", "Intermediate", "Intermediate", "Intermediate*", "Beginner", "Intermediate"]
  return (
    <div>
      <Typography variant="h3" component="h3" className="title" > Full Stack Web Developer </Typography>
      <Typography variant="h5" component="p" className="title-para">
        A passionate web developer with 5+ years of experience designing and developing web applications.
      </Typography>
      <br></br>
      <br></br>


      <Typography variant="h4" component="h4" className="heading">
        Technologies
      </Typography>
      <br></br>
      <table className="tech-table">
        <tr>
          <th>Technology</th>
          <th className="rating">Proficiency</th>
        </tr>
        {technologies.map((technology, index) => {
          return (
            <tr>
              <td>
                {technology}
              </td>
              <td className="rating">
                {ratings[index]}
              </td>
            </tr>
          )
        })}
      </table>

    </div>
  );
};