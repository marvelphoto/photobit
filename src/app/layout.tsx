import type { Metadata } from "next";
import "../styles/global.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";
import Script from "next/script";

export const metadata: Metadata = {
    title: "포토빛",
    description: "빛으로 감성을 채우고 아름다운 순간을 담는 포토빛"
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <head>
                <Script
                    src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_MAP_API_KEY}`}
                    strategy="beforeInteractive"
                />
                <meta name="google-site-verification" content="hArxW4hgMtIArXUsR9YVfSXMrQE7z0qORA3or5DUWM8" />
            </head>
            <body>
                <Marquee />
                <div className="marquee-height"></div>
                <Header />
                <div className="header-height"></div>
                {children}
                <Footer />
            </body>
        </html>
    );
}
