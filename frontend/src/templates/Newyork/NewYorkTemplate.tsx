import React, { FunctionComponent } from "react";
import { TemplateProps } from "../index";
import { ProfileDefaults } from "../../types";
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
              <p
                style={{
                  paddingRight: "16px",
                  marginTop: "10px",
                  fontSize: "smaller",
                }}
              >
                Повседневная практика показывает, что социально-экономическое
                развитие в значительной степени обуславливает создание модели
                развития! Значимость этих проблем настолько очевидна, что
                выбранный нами инновационный путь в значительной степени
                обуславливает создание форм воздействия? Значимость этих проблем
                настолько очевидна, что выбранный нами инновационный путь
                представляет собой интересный эксперимент проверки форм
                воздействия? Задача организации, в особенности же выбранный нами
                инновационный путь создаёт предпосылки качественно новых шагов
                для форм воздействия? Равным образом реализация намеченного
                плана развития требует определения и уточнения ключевых
                компонентов планируемого обновления? С другой стороны социально-
                экономическое развитие позволяет выполнить важнейшие задания по
                разработке системы масштабного изменения ряда параметров. Задача
                организации, в особенности же социально-экономическое развитие
                обеспечивает широкому кругу специалистов участие в формировании
                экономической целесообразности принимаемых решений.
              </p>
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
                <b>Skills</b>
              </p>
              {/* Skills */}
              {profile.skills &&
                profile.skills
                  .filter((it) => !!it.skillName)
                  .map((skill) => (
                    <p style={{ marginBottom: "2px" }}>
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
                          className="template-newyork-skill-level"
                          style={{
                            position: "absolute",
                            width: `${20 * (skill.level + 1)}px`,
                            height: "2px",
                            top: "-1px",
                            background: "#1890ff",
                          }}
                        ></div>
                      </div>
                    </p>
                  ))}
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};
