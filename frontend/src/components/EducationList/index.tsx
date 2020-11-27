import React, { useState, useEffect } from "react";
import "./index.css";
import { Education } from "../Education";
import { Education as EducationModel } from "../../types";

export const EducationList = (props: {}) => {
  const [educationList, setEducationList] = useState<
    Array<EducationModel & { isActive?: boolean }>
  >([
    {
      id: 0,
      school: "",
      startDate: "",
      endDate: "",
      city: "Voronezh",
      description: "",
      degree: "",
    },
  ]);

  return (
    <div className="widget-education__list">
      <Education education={educationList[0]} />
    </div>
  );
};
