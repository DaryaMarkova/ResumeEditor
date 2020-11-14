import React, { FunctionComponent } from "react";
import { TemplateProps } from "../index";
import { ProfileDefaults } from "../../types";
import classNames from "classnames";
import "./NewYorkTemplate.css";

export const NewYorkTemplate: FunctionComponent<TemplateProps> = ({
  profile,
  domRef,
}) => {
  return (
    <>
      <div className="template-newyork" ref={domRef}>
        <table
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            padding: "32px 26px 32px 26px",
          }}
          width="100%"
          cellSpacing="0"
          cellPadding="0"
        >
          <tr>
            <td>
              <table>
                <tr>
                  {profile.hasAvatar && (
                    <td style={{ paddingRight: "10px" }}>
                      <img
                        alt="avatar"
                        style={{
                          width: "70px",
                          height: "auto",
                          borderRadius: "6px",
                        }}
                        src="http://localhost:3005/assets/avatar.jpg"
                      />
                    </td>
                  )}

                  <td valign="middle">
                    <h2 style={{ padding: 0, margin: 0, fontWeight: 600 }}>
                      {profile.firstName || ProfileDefaults.firstName}&nbsp;
                      {profile.lastName || ProfileDefaults.lastName}
                    </h2>
                    <p style={{ margin: 0, fontSize: "small" }}>
                      {profile.jobTitle || ProfileDefaults.jobTitle}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td valign="top" style={{ paddingTop: "30px" }}>
              <p style={{ marginBottom: 0 }}>
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="user"
                  width="12px"
                  height="12px"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
                </svg>
                <b style={{ marginLeft: "4px" }}>Profile</b>
              </p>
              <div
                style={{
                  marginLeft: "16px",
                  marginRight: "16px",
                  marginTop: "10px",
                  fontSize: "smaller",
                  whiteSpace: "pre-wrap",
                }}
              >
                {profile.summary}
              </div>
              {/* Employment History */}
              <p style={{ marginTop: "16px" }}>
                <svg
                  width="10pt"
                  height="10pt"
                  viewBox="0 0 10 10"
                  version="1.1"
                >
                  <g id="surface1">
                    <path
                      stroke="none"
                      fill-rule="nonzero"
                      fill="rgb(0%,0%,0%)"
                      fill-opacity="1"
                      d="M 8.914062 2.867188 L 6.777344 2.867188 L 6.777344 1.90625 C 6.777344 1.6875 6.597656 1.507812 6.375 1.507812 L 3.625 1.507812 C 3.40625 1.507812 3.226562 1.6875 3.226562 1.90625 L 3.226562 2.867188 L 1.085938 2.867188 C 0.761719 2.871094 0.5 3.132812 0.5 3.457031 L 0.5 8.910156 C 0.5 9.234375 0.761719 9.5 1.085938 9.5 L 8.914062 9.5 C 9.238281 9.5 9.5 9.234375 9.5 8.910156 L 9.5 3.457031 C 9.5 3.132812 9.238281 2.871094 8.914062 2.867188 Z M 3.5 1.90625 C 3.5 1.839844 3.554688 1.785156 3.621094 1.785156 L 6.371094 1.785156 C 6.4375 1.785156 6.492188 1.839844 6.492188 1.90625 L 6.492188 2.867188 L 3.5 2.867188 Z M 1.085938 3.148438 L 8.914062 3.148438 C 9.082031 3.152344 9.21875 3.285156 9.21875 3.453125 L 9.21875 5.355469 L 5.984375 5.355469 L 5.984375 5.148438 C 5.984375 5.074219 5.953125 5 5.902344 4.949219 C 5.847656 4.894531 5.773438 4.867188 5.699219 4.867188 L 4.300781 4.867188 C 4.144531 4.867188 4.019531 4.992188 4.019531 5.148438 L 4.019531 5.359375 L 0.78125 5.359375 L 0.78125 3.460938 C 0.78125 3.378906 0.8125 3.296875 0.871094 3.242188 C 0.925781 3.183594 1.003906 3.148438 1.085938 3.148438 Z M 5.699219 5.148438 L 5.699219 5.847656 L 4.300781 5.847656 L 4.300781 5.148438 Z M 8.910156 9.214844 L 1.085938 9.214844 C 0.917969 9.214844 0.78125 9.078125 0.78125 8.910156 L 0.78125 5.640625 L 4.015625 5.640625 L 4.015625 5.851562 C 4.015625 5.925781 4.046875 6 4.097656 6.050781 C 4.152344 6.105469 4.226562 6.132812 4.300781 6.132812 L 5.699219 6.132812 C 5.855469 6.132812 5.980469 6.007812 5.980469 5.851562 L 5.980469 5.640625 L 9.21875 5.640625 L 9.21875 8.910156 C 9.21875 9.078125 9.082031 9.214844 8.914062 9.214844 Z M 8.910156 9.214844 "
                    />
                  </g>
                </svg>

                <b style={{ marginLeft: "4px" }}>Employment History</b>
              </p>
              <div style={{ marginLeft: "16px", marginTop: "10px" }}>
                {(profile.employmentHistory || []).map((history, index) => {
                  return (
                    <div key={index} style={{ marginTop: "4px" }}>
                      <b style={{ fontSize: "small" }}>{history.jobTitle}</b>
                      {history.employer && <b>&nbsp;at&nbsp;</b>}
                      <b style={{ fontSize: "small" }}>{history.employer}</b>
                      {history.jobTitle && history.employer && history.city && (
                        <b>,&nbsp;{history.city}</b>
                      )}
                      <div
                        style={{
                          fontSize: "smaller",
                          marginTop: "6px",
                          color: "rgb(152, 161, 179)",
                        }}
                      >
                        {history.startDate}&nbsp;&mdash;&nbsp;{history.endDate}
                      </div>
                      <p
                        style={{
                          fontSize: "smaller",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        {history.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </td>
            <td
              valign="top"
              style={{
                fontSize: "medium",
                paddingTop: "30px",
              }}
            >
              <p style={{ marginBottom: 0, fontSize: "smaller" }}>
                <b>Details</b>
              </p>
              <p
                style={{
                  padding: 0,
                  margin: 0,
                  marginTop: "10px",
                  fontSize: "small",
                }}
              >
                {profile.phone || ProfileDefaults.phone}
              </p>
              <p
                style={{
                  marginTop: 0,
                  paddingTop: 0,
                  fontSize: "small",
                  color: "rgb(33, 150, 243)",
                }}
              >
                {profile.email || ProfileDefaults.email}
              </p>
              <p
                style={{
                  marginBottom: "4px",
                  marginTop: "24px",
                  fontSize: "smaller",
                }}
              >
                {profile.skills && profile.skills.length > 0 && <b>Skills</b>}
              </p>
              {/* Skills */}
              {profile.skills &&
                profile.skills
                  .filter((it) => !!it.skillName)
                  .map((skill, index) => (
                    <div key={skill.id} style={{ marginBottom: "2px" }}>
                      <span style={{ fontSize: "small" }}>
                        {skill.skillName}
                      </span>
                      <div
                        style={{
                          position: "relative",
                          width: "100px",
                          height: "2px",
                          background: "rgb(242, 245, 250)",
                          borderRadius: "2px",
                          marginTop: "2px",
                        }}
                      >
                        <div
                          className={classNames(
                            "template-newyork-skill-level",
                            `skill-level-${skill.level + 1}-star`
                          )}
                          style={{
                            position: "absolute",
                            width: `${(skill.level + 1) * 20}px`,
                            height: "2px",
                            top: "-1px",
                            background: "#1890ff",
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};
