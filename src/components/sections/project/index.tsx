import { Col, Row } from "react-bootstrap";
import ProjectCard from "./project.card";
import { PROJECTS } from "helpers/data";
import { useTranslation } from "react-i18next";

type Tlanguage = "vi" | "en";

const Project = () => {
  const { t, i18n } = useTranslation();
  const currenLanguage = i18n.resolvedLanguage as Tlanguage;

  return (
    <>
      <Row>
        <Col xs={12}>
          {/* Sử dụng hàm 't' để lấy dữ liệu từ tệp JSON của bạn */}
          <h3 className="text-center">{t("Project.title")}</h3>
          <h6 className="text-center mb-md-5 mb-2">{t("Project.context")}</h6>
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {PROJECTS?.map((item) => {
          return (
            <Col md={4} className="project-card" key={item.id}>
              <ProjectCard
                imgPath={item.imgPath}
                title={item.title[currenLanguage]}
                description={item.description[currenLanguage]}
                githubLink={item.githubLink}
                demoLink={item.demoLink}
              />
            </Col>
          );
        })}
      </Row>
      <div className="mb-7"></div>
    </>
  );
};

export default Project;
