import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../public/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../../public/assets/vendor/boxicons/css/boxicons.min.css";
import "../../public/assets/vendor/quill/quill.snow.css";
import "../../public/assets/vendor/quill/quill.bubble.css";
import "../../public/assets/vendor/remixicon/remixicon.css";
import "../../public/assets/vendor/simple-datatables/style.css";
import "../../public/assets/css/style.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "./globals.css";
import { PrimeReactProvider } from "primereact/api";
import { Inter, Open_Sans, Poppins } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "600", "700"],
});

export const metadata = {
  title: "Dashboard - NiceAdmin Bootstrap Template",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <PrimeReactProvider>
      <html lang="en">
        <body
          className={`${inter.className} ${openSans.className} ${poppins.className}`}
        >
          {children}
          <Script src="/assets/vendor/apexcharts/apexcharts.min.js"></Script>
          <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></Script>
          <Script src="/assets/vendor/chart.js/chart.umd.js"></Script>
          <Script src="/assets/vendor/echarts/echarts.min.js"></Script>
          <Script src="/assets/vendor/quill/quill.min.js"></Script>
          <Script src="/assets/vendor/simple-datatables/simple-datatables.js"></Script>
          <Script src="/assets/vendor/tinymce/tinymce.min.js"></Script>
          <Script src="/assets/vendor/php-email-form/validate.js"></Script>
          <Script src="/assets/js/main.js"></Script>
        </body>
      </html>
    </PrimeReactProvider>
  );
}
