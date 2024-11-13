import { Container, Stack, Typography } from "@mui/material";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdComputer } from "react-icons/md";
import styled from "@emotion/styled";

const experience = [
  {
    date: "Nov 2023 - Present",
    title: "Software Engineer",
    subtitle: "EtherSec, London, United Kingdom",
    description: "Technical discussion on warehouse management system",
  },
  {
    date: "Dec 2022 - Sept 2023",
    title: "Software Engineer (Programming)",
    subtitle: "Edvance Technology, Hong Kong",
    description:
      "Web Development using React, Redux, JavaScript, Python, MongoDB",
  },
  {
    date: "Sept 2022 - Dec 2022",
    title: "Software Developer",
    subtitle: "SOS Group, Hong Kong",
    description: "App Development using Mule4",
  },
  {
    date: "Aug 2021 - Oct 2021",
    title: "Web Developer Intern",
    subtitle: "Zpiral, Hong Kong",
    description: "Web Development using WordPress, WooCommerce",
  },
  {
    date: "Jun 2021 - Jul 2021",
    title: "Software Engineer Intern",
    subtitle: "Inncorn Technology, Hong Kong",
    description: "Machine Learning",
  },
];

const MyContainer = styled(Container)(({ theme }) => ({
  padding: "2.8rem",
}));

function Experience() {
  return (
    <MyContainer id="experience" maxWidth={false}>
      <Stack direction="column" alignItems={"center"} justifyContent={"center"}>
        <Typography variant="h4">Experience</Typography>
        <VerticalTimeline lineColor="#384E77">
          {experience.map((e, index) => {
            return (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{ background: `${e.style || ""}`, color: "#000" }}
                contentArrowStyle={{
                  borderRight: `7px solid  ${e.style || "#fff"}`,
                }}
                date={e.date}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<MdComputer />}
              >
                <Typography
                  variant="h5"
                  className="vertical-timeline-element-title"
                  color={e.focus ? "#fff" : "#000"}
                >
                  {e.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  className="vertical-timeline-element-subtitle"
                  color={e.focus ? "#fff" : "#000"}
                >
                  {e.subtitle}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color={e.focus ? "#fff" : "#000"}
                >
                  {e.description}
                </Typography>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </Stack>
    </MyContainer>
  );
}

export default Experience;
