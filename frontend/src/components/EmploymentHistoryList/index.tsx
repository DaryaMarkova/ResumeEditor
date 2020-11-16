import React, { useState, useEffect } from "react";
import { EmploymentHistory } from "../EmploymentHistory/EmploymentHistory";
import { EmploymentHistory as Employment } from "../../types/";
import { DraggableList } from "../../shared/DraggableList/DraggableList";
import moment from "moment";
import "./style.css";

export const EmploymentHistoryList = (props: {
  onEmploymentListChanged?: (
    employmentList: Employment[],
    property: string
  ) => void;
}) => {
  const [employmentHistoryList, setEmploymentHistoryList] = useState<
    Array<Employment & { isActive?: boolean }>
  >([]);

  useEffect(() => {
    if (props.onEmploymentListChanged) {
      props.onEmploymentListChanged(employmentHistoryList, "employmentHistory");
    }
  }, [employmentHistoryList]);

  const onEmploymentHistoryChanged = (index: number, history: Employment) => {
    setEmploymentHistoryList(
      employmentHistoryList.map((_history, _index) =>
        _index == index ? history : _history
      )
    );
  };

  const getRenderedEmploymentHistory = (history: Employment) => {
    const index = employmentHistoryList.indexOf(history);

    return (
      <EmploymentHistory
        onEmploymentHistoryChanged={(_history) =>
          onEmploymentHistoryChanged(index, _history)
        }
        history={history}
      />
    );
  };

  return (
    <div className="widget-employmenthistory__list">
      <DraggableList
        items={employmentHistoryList}
        getItemInstance={() => {
          return {
            id: employmentHistoryList.length,
            jobTitle: "",
            employer: "",
            isActive: true,
            startDate: moment().format("MMMM YYYY"),
            endDate: "Present",
          };
        }}
        onItemsChanged={(items) =>
          setEmploymentHistoryList(items as Employment[])
        }
        getRenderedItem={(item) =>
          getRenderedEmploymentHistory(item as Employment)
        }
        getItemStyle={(isDragging: boolean, draggableStyle: any) =>
          draggableStyle
        }
      />
    </div>
  );
};
