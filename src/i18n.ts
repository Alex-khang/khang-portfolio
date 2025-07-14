import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

// ⭐️ ĐỊNH NGHĨA TÊN REPOSITORY CỦA BẠN Ở ĐÂY:
// Đảm bảo tên này khớp chính xác với tên repository trên GitHub của bạn
const REPO_NAME = "/deploy-web-react-vite/";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false, // Nên đặt là 'false' khi deploy production
    fallbackLng: "en", // Ngôn ngữ dự phòng nếu không tìm thấy ngôn ngữ người dùng
    lng: "en", // Ngôn ngữ mặc định khi khởi tạo
    interpolation: {
      escapeValue: false, // Không cần thoát giá trị trong React
    },
    // ⭐️ THÊM CẤU HÌNH 'backend' với 'loadPath' vào đây:
    backend: {
      // Đây là đường dẫn quan trọng giúp i18next-http-backend tìm thấy file dịch thuật.
      // Nó sẽ tạo ra các đường dẫn kiểu như:
      // /deploy-web-react-vite/locales/en/translation.json
      // /deploy-web-react-vite/locales/vi/translation.json
      loadPath: `${REPO_NAME}locales/{{lng}}/{{ns}}.json`,
    },
  });

export default i18n;
