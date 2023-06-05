import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022(apr) - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Sataiva Technologies
          </h4>
          <p>
          Developed and maintained web applications using React.js, Redux, and JavaScript
Worked with AWS services including S3, AppSync, DynamoDB, Lambda, and IAM role to build scalable and secure applications
,Implemented responsive web design and UI/UX design principles to enhance user experience
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 ( jan ) - 2022 ( mar )"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Developer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Thinroot Software
          </h4>
          <p>Working with senior developers to implement new features and designs using React.js
          Writing clean, maintainable code and adhering to established coding standards
          Conducting code reviews and debugging issues as needed</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            K Ramakrishnan college of technology
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p>Electrical and Electronic Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            KAP viswanathan hr sec school
          </h3>
          <p>Higher Secondary School Certificate</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Dhanalakshmi matric hr sec school
          </h3>
          <p>Secondary School Leaving Certificate</p>
        </VerticalTimelineElement>
      

      </VerticalTimeline>
    </div>
  );
}

export default Experience;
