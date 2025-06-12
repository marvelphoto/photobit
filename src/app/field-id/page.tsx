import styles from "@/styles/pages/field-id.module.scss";

export default function FieldIdPage() {
    return (
        <div>
            <div className="explanation">
                <h3>증명·여권·운전사진</h3>
                <h4>공식적인 사진일수록, 나다움을 담다</h4>
                <p>
                    국내 [네이버 후기] ‘인물리터칭 보정 1위’의 기술력과 고객 만족도 99%의 섬세한 터치로,
                    자연스러운 아름다움을 찾아드립니다.
                    <br /> 증명사진, 여권사진, 운전면허사진 —— 단순한 기록을 넘어, 오랜 시간 스스로에게 만족할
                    한 컷을 완성하세요.
                </p>
            </div>

            <ul className={styles.contents}>
                <li>
                    <img src={`/images/photos/증명/증명1.jpg`} alt="증명이미지" />
                </li>
                <li>
                    <img src={`/images/photos/증명/증명2.jpg`} alt="증명이미지" />
                </li>
                <li>
                    <img src={`/images/photos/증명/증명3.jpg`} alt="증명이미지" />
                </li>
                <li>
                    <img src={`/images/photos/증명/증명4.jpg`} alt="증명이미지" />
                </li>

                <li>
                    <img src={`/images/photos/증명/증명5.jpg`} alt="증명이미지" />
                </li>
                <li>
                    <span>
                        A delicate
                        <br /> touch of refinement
                    </span>
                </li>
                <li>
                    <img src={`/images/photos/증명/증명7.jpg`} alt="증명이미지" />
                </li>
                <li>
                    <img src={`/images/photos/증명/증명8.jpg`} alt="증명이미지" />
                </li>

                <li>
                    <img src={`/images/photos/증명/증명9.jpg`} alt="증명이미지" />
                </li>
                <li>
                    <img src={`/images/photos/증명/증명10.jpg`} alt="증명이미지" />
                </li>
                <li>
                    <img src={`/images/photos/증명/증명11.jpg`} alt="증명이미지" />
                </li>
                <li>
                    <span>
                        Authentic <br />
                        &emsp;&emsp;&emsp;&ensp;Beauty
                    </span>
                </li>

                <li>
                    <img src={`/images/photos/증명/증명12.jpg`} alt="증명이미지" />
                </li>
                <li>
                    <img src={`/images/photos/증명/증명13.jpg`} alt="증명이미지" />
                </li>
                <li>
                    <img src={`/images/photos/증명/증명14.jpg`} alt="증명이미지" />
                </li>
                <li>
                    <img src={`/images/photos/증명/증명15.jpg`} alt="증명이미지" />
                </li>
            </ul>
        </div>
    );
}
