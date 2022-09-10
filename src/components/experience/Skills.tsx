import React from "react";
import Subheader from "../shared/Subheader";
import IconSet from "./IconSet";
import ForumIcon from '@mui/icons-material/Forum';
import SoftIcon from "./SoftIcon";
import GroupsIcon from '@mui/icons-material/Groups';
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";

function Skills() {
  const langauges = [
    {
      name: "Python",
      link: "/images/python.svg",
    },
    {
      name: "Javascript",
      link: "/images/javascript.svg",
    },
    {
      name: "VBA",
      link: "/images/Excel.svg",
    },
    {
      name: "MATLAB",
      link: "/images/matlab.svg",
    },
    {
      name: "R",
      link: "/images/R.svg",
    },
  ];
  const techs = [
    {
        name: "SQL",
        link: "/images/sql.svg",
    },
    {
        name: "Git",
        link: "/images/git.svg"
    },
    {
        name: "React",
        link: "/images/react.svg",
    },
    {
        name: "Linux",
        link: "/images/linux.svg",
    },
    {
        name: "Microsoft Office",
        link: "/images/office.svg",
    }
  ]

  return (
    <div className="flex flex-col justify-evenly">
      <Subheader name="Programming Languages" />
      <div className="grid grid-cols-3 gap-4 md:grid-cols-5">
        {langauges.map((langauge) => (
          <IconSet name={langauge.name} link={langauge.link} key={langauge.name} />
        ))}
      </div>
      <Subheader name="Technologies and Tools" />
      <div className="grid grid-cols-3 gap-4 md:grid-cols-5">
        {techs.map((tech) => (
          <IconSet name={tech.name} link={tech.link} key={tech.name} />
        ))}
      </div>
      <Subheader name="Soft Skills" />
      <div className="grid grid-cols-3 gap-4 md:grid-cols-5">
            <SoftIcon name="Commincation" Icon={ForumIcon} />
            <SoftIcon name="Teamwork" Icon={GroupsIcon} />
            <SoftIcon name="Detail Oriented" Icon={ImageSearchIcon} />
            <SoftIcon name="Organization" Icon={FolderCopyIcon} />   
      </div>
    </div>
  );
}

export default Skills;
