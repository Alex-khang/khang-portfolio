import { Col, Row } from "react-bootstrap";
import AnimationLottie from "components/share/animation-lottie";
import codingJSON from "assets/lottie/coding.json";
import { DEVELOPMENT_LOTTIE } from "assets/lottie/string/development";
import { CONTACT_LOTTIE } from "assets/lottie/string/contact";
import GlowCard from "components/share/glow-card";
import { FaGraduationCap } from "react-icons/fa6";
import Divider from "components/sections/divider";
import { APP_DATA } from "helpers/data";
import SocialMedia from "components/sections/social.media";
import { useTranslation, Trans } from "react-i18next"; // Import hook và component

const About = () => {
  const { t } = useTranslation(); // Khởi tạo hook

  return (
    <>
      <Row>
        <Col md={6} xs={12}>
          <h3 className="text-center mb-md-5 mb-2">
            <Trans
              i18nKey="About.knowMeTitle"
              components={[<span className="brand-red" />]}
            />
          </h3>
          <div>
            <p>{t("About.intro1")}</p>
            <p>{t("About.intro2")}</p>
            <p>{t("About.intro3")}</p>
          </div>
          <div>
            <p>{t("About.activitiesTitle")}</p>
            <ul>
              <li>{t("About.activity1")}</li>
              <li>{t("About.activity2")}</li>
              <li>{t("About.activity3")}</li>
              <li>{t("About.activity4")}</li>
            </ul>
          </div>
          <div>
            <p className="text-center brand-red">"{t("About.quote")}"</p>
          </div>
        </Col>
        <Col
          md={6}
          xs={12}
          className="d-flex align-items-center justify-content-center"
        >
          <AnimationLottie width="80%" animationPath={codingJSON} />
        </Col>
      </Row>

      <Row>
        <Col
          md={6}
          xs={12}
          className="d-none d-md-flex align-items-center justify-content-center mt-md-5 mt-3"
        >
          <AnimationLottie
            width="50%"
            animationPath={JSON.parse(DEVELOPMENT_LOTTIE)}
          />
        </Col>
        <Col md={6} xs={12} className="mt-md-5 mt-3">
          <div className="d-flex flex-column align-items-center gap-3">
            <div>
              <h4 className="text-center brand-red">
                {t("About.educationTitle")}
              </h4>
            </div>
            <div>
              <GlowCard identifier={`experience-5`}>
                <div className="p-3 relative">
                  <div className="experience-container">
                    <div className="duration-text">
                      <p>{t("About.degreeDuration")}</p>
                    </div>
                    <div className="details">
                      <div className="icon">
                        <FaGraduationCap size={36} />
                      </div>
                      <div className="info">
                        <p className="title">{t("About.degreeTitle")}</p>
                        <p className="company">{t("About.universityName")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </div>
          </div>
        </Col>
      </Row>

      <Divider />

      <Row>
        <Col md={6} xs={12} className=" mt-md-5 mt-3">
          <h3 className="mb-md-5 mb-2">{t("About.findMeOn")}</h3>
          <SocialMedia
            facebook={APP_DATA.FACEBOOK_URL}
            github={APP_DATA.GITHUP_URL}
          />
        </Col>
        <Col
          md={6}
          xs={12}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <AnimationLottie
            width="50%"
            animationPath={JSON.parse(CONTACT_LOTTIE)}
          />
          <h4 className="text-center">{t("About.contactMe")}</h4>
        </Col>
      </Row>
      <div className="mb-5"></div>
    </>
  );
};

export default About;
