import "@/styles/pages/about.scss";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div>
            <div className="explanation">
                <h3>포토빛</h3>
                <h4>빛으로 감성을 채우고 아름다운 순간을 담는 포토빛</h4>
            </div>

            <div className="contents">
                <div className="firstFloor">
                    <h2>
                        PHOTO <span>BIT</span>
                    </h2>
                    <div>
                        <Image src="/images/about/11.jpg" alt="main background" fill quality={90} />
                    </div>
                </div>

                <div className="secondFloor">
                    <div>
                        <Image src="/images/about/2.jpg" alt="main background" fill quality={90} />
                    </div>
                    <p>
                        출장사진, 증명·여권사진, 프로필, 복원사진, 가족사진,
                        <br />
                        웨딩사진까지—당신의 소중한 순간을 담아내는 토탈 스튜디오, 포토빛.
                        <br />
                        <br />
                        최고의 퀄리티로 만족을 선사하며,
                        <br /> 네이버 ‘인물 리터칭’ 고객 만족 1위, 고객 만족도 99%를 자랑합니다.
                    </p>
                </div>

                <div className="thirdFloor">
                    <div>
                        <Image src="/images/about/3.jpg" alt="main background" fill quality={90} />
                    </div>
                    <p>
                        2017년부터 국내에서 보기 힘든
                        <br />
                        크로마키 특수 촬영 기법을 도입해 배경의 한계를 뛰어넘었습니다.
                        <br />
                        <br />
                        야외 촬영 없이도 원하는 분위기를 자유롭게 연출하며,
                        <br /> 세상 어디에도 없는 특별한 한 컷을 완성합니다.
                    </p>
                </div>
            </div>
        </div>
    );
}
