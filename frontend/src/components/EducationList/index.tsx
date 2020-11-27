import React, { useState, useEffect } from "react";
import { Education } from "../Education";
import { Education as EducationModel } from "../../types";
import "./index.css";

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
      isActive: true,
    },
  ]);

  const onEducationChanged = (index: number, education: EducationModel) => {
    setEducationList(
      educationList.map((_education, _index) =>
        _index == index ? education : _education
      )
    );
  };

  return (
    <div className="widget-education__list">
      <Education
        education={educationList[0]}
        onEducationChanged={(education) => onEducationChanged(0, education!)}
      />
    </div>
  );
};
