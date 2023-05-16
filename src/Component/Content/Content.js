import React from "react";
import style from "./Content.module.css";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SchoolIcon from "@mui/icons-material/School";
import DoNotDisturbAltTwoToneIcon from "@mui/icons-material/DoNotDisturbAltTwoTone";
export default function Content() {
  return (
    <div className={style.main}>
      <h1 style={{ color: "white" }}>
        Access curated courses worth ₹{" "}
        <span style={{ color: "red", textDecoration: "line-through" }}>
          <span style={{ color: "black", fontFamily: "'Roboto', sans-serif" }}>
            18,500
          </span>
        </span>{" "}
        at just{" "}
        <span style={{ color: " #0096FF", fontFamily: "'Roboto', sans-serif" }}>
          ₹ 99
        </span>{" "}
        per year!
      </h1>
      <div className={style.contentContainer}>
        <div className={style.content} style={{ color: "black" }}>
          <MenuBookIcon />
          <p style={{ color: "white" }}>
            <span>100+ </span> Job relevant courses
          </p>
        </div>
        <div className={style.content}>
          <AccessTimeIcon />
          <p style={{ color: "white" }}>
            <span>20,000+ </span>Hours of content
          </p>
        </div>
        <div className={style.content}>
          <LiveTvIcon />
          <p style={{ color: "white" }}>
            <span>Exclusive </span>webinar access
          </p>
        </div>
        <div className={style.content}>
          <SchoolIcon />
          <p style={{ color: "white" }}>
            Scholarship worth<span> ₹94,500 </span>
          </p>
        </div>
        <div className={style.content}>
          <DoNotDisturbAltTwoToneIcon />
          <p style={{ color: "white" }}>
            <span>Ad Free </span>learning experience
          </p>
        </div>
      </div>
    </div>
  );
}
