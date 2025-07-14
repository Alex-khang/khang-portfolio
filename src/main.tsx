import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "styles/global.scss"; // Đảm bảo đường dẫn này đúng
import Layout from "@/layout"; // Đảm bảo đường dẫn này đúng
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "pages/home"; // Đảm bảo đường dẫn này đúng
import ProjectPage from "pages/project"; // Đảm bảo đường dẫn này đúng
import AboutPage from "pages/about"; // Đảm bảo đường dẫn này đúng
import { AppContextProvider } from "components/context/app.context"; // Đảm bảo đường dẫn này đúng
import "@/i18n"; // Đảm bảo đường dẫn này đúng và file i18n của bạn đã được cấu hình bên dưới

// ⭐️ ĐÂY LÀ PHẦN QUAN TRỌNG NHẤT CHO REACT ROUTER:
// Thêm basename vào createBrowserRouter và trùng với tên repository của bạn
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/project",
          element: <ProjectPage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
      ],
    },
  ],
  {
    basename: "/khang-portfolio/", // 👈 Thêm dòng này
  }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </StrictMode>
);
