import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { PiFileSqlFill } from "react-icons/pi";
import { FaGitAlt } from "react-icons/fa6";
import { FaDocker } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { FaWix } from "react-icons/fa";
import { TbBrandFigma } from "react-icons/tb";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { FaJava } from "react-icons/fa";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styled from "@emotion/styled";

const MyContainer = styled(Container)(({ theme }) => ({
  padding: "2.8rem",
}));

const mySkills = [
  {
    type: "Frontend",
    skills: [
      {
        name: "React",
        icon: <FaReact />,
        color: "#58C4DC",
      },
      {
        name: "JavaScript",
        icon: <IoLogoJavascript />,
        color: "#F0DB4F",
      },
      {
        name: "Redux Toolkit",
        icon: <SiRedux />,
        color: "#BA8FFF",
      },
      {
        name: "HTML",
        icon: <FaHtml5 />,
        color: "#e34c26",
      },
      {
        name: "CSS",
        icon: <FaCss3Alt />,
        color: "#f06529",
      },
      {
        name: "Material UI",
        icon: <SiMui />,
        color: "#757ce8",
      },
    ],
  },
  {
    type: "Backend",
    skills: [
      {
        name: "Python",
        icon: <FaPython />,
        color: "#4584b6",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        color: "#589636",
      },
      {
        name: "SQL",
        icon: <PiFileSqlFill />,
        color: "#00758f",
      },
    ],
  },
  {
    type: "Others",
    skills: [
      {
        name: "Git",
        icon: <FaGitAlt />,
        color: "#c9510c",
      },
      {
        name: "Docker",
        icon: <FaDocker />,
        color: "#0db7ed",
      },
      {
        name: "Postman",
        icon: <SiPostman />,
        color: "#ef5b25",
      },
      {
        name: "WordPress",
        icon: <FaWordpress />,
        color: "#21759b",
      },
      {
        name: "Wix",
        icon: <FaWix />,
        color: "#464646",
      },
      {
        name: "Figma",
        icon: <TbBrandFigma />,
        color: "#A259FF",
      },
      {
        name: "C/C++",
        icon: <BiLogoCPlusPlus />,
        color: "#5E97D0",
      },
      {
        name: "Java",
        icon: <FaJava />,
        color: "#5382a1",
      },
    ],
  },
];

function Skills() {
  return (
    <MyContainer id="skills" maxWidth={false}>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Typography variant="h4" textAlign={"center"}>
          Skills
        </Typography>
        {mySkills.map((m, index) => (
          <Accordion key={index} sx={{ width: "100%" }}>
            <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
              <Typography>{m.type}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid
                container
                display="flex"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                {m.skills.map((s, index) => (
                  <Grid item key={index} xs={12} sm={4} md={3} lg={2}>
                    <Card>
                      <Avatar
                        sx={{
                          width: "100%",
                          height: "100%",
                          margin: "auto",
                          marginTop: 2,
                          color: s.color,
                          backgroundColor: "white",
                        }}
                      >
                        {s.icon}
                      </Avatar>
                      <CardContent>
                        <Typography variant="subtitle1" align="center">
                          {s.name}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>
    </MyContainer>
  );
}

export default Skills;
