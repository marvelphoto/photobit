// import Image from "next/image";
import "@/styles/pages/home.scss";

export default function Home() {
    return (
        <div className="home">
            <img src="/images/main/1.webp" alt="main background" />
            <div>
                <p>
                    빛으로 감성을 채우고
                    <br />
                    아름다운 순간을 담는
                </p>
                <span>포토빛</span>
            </div>
        </div>
    );
}
