import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import dns from "dns"; // Bạn có thể bỏ comment dòng này nếu cần dns setup
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/server-options.html#server-options
// dns.setDefaultResultOrder("verbatim");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  // server: { // Phần này dành cho dev server, không ảnh hưởng đến deploy
  //   port: 3000,
  // },
  // ⭐️ ĐÂY LÀ PHẦN QUAN TRỌNG NHẤT CHO VITE:
  // Đặt base path trùng với tên repository của bạn trên GitHub
  base: "/khang-portfolio",
});
