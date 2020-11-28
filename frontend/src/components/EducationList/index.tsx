import React, { useState, useEffect } from "react";
import { Education } from "../Education";
import { Education as EducationModel } from "../../types";
import { DraggableList } from "../../shared/DraggableList/DraggableList";
import moment from "moment";
import "./index.css";

export const EducationList = (props: {
  onEducationListChanged?: (
    educationList: EducationModel[],
    property: string
  ) => void;
}) => {
  const [educationList, setEducationList] = useState<
    Array<EducationModel & { isActive?: boolean }>
  >([]);

  useEffect(() => {
    if (props.onEducationListChanged) {
      props.onEducationListChanged(educationList, "educationList");
    }
  }, [educationList]);

  const onEducationChanged = (index: number, education: EducationModel) => {
    setEducationList(
      educationList.map((_education, _index) =>
        _index == index ? education : _education
      )
    );
  };

  const getRenderedEducation = (education: EducationModel) => {
    const index = educationList.indexOf(education);
    return (
      <Education
        education={education as EducationModel}
        onEducationChanged={(education) =>
          onEducationChanged(index, education!)
        }
      />
    );
  };

  return (
    <div className="widget-education__list">
      <DraggableList
        items={educationList}
        getItemInstance={() => {
          return {
            id: educationList.length,
            school: "",
            startDate: moment().format("MMMM YYYY"),
            endDate: "Present",
            city: "Voronezh",
            description: "",
            degree: "",
            isActive: true,
          };
        }}
        onItemsChanged={(items) => setEducationList(items as EducationModel[])}
        getRenderedItem={(item) => getRenderedEducation(item as EducationModel)}
        getItemStyle={(isDragging: boolean, draggableStyle: any) =>
          draggableStyle
        }
      />
    </div>
  );
};
