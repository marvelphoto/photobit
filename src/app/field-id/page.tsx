import styles from "@/styles/pages/field-id.module.scss";
import Image from "next/image";

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
                    <Image
                        src={`/images/photos/증명/증명1.webp`}
                        alt="증명이미지"
                        width={314}
                        height={452}
                        quality={90}
                    />
                </li>
                <li>
                    <Image
                        src={`/images/photos/증명/증명2.webp`}
                        alt="증명이미지"
                        width={314}
                        height={452}
                        quality={90}
                    />
                </li>
                <li>
                    <Image
                        src={`/images/photos/증명/증명3.webp`}
                        alt="증명이미지"
                        width={314}
                        height={452}
                        quality={90}
                    />
                </li>
                <li>
                    <Image
                        src={`/images/photos/증명/증명4.webp`}
                        alt="증명이미지"
                        width={314}
                        height={452}
                        quality={90}
                    />
                </li>

                <li>
                    <Image
                        src={`/images/photos/증명/증명5.webp`}
                        alt="증명이미지"
                        width={314}
                        height={452}
                        quality={90}
                    />
                </li>
                <li>
                    <span>
                        A delicate
                        <br /> touch of refinement
                    </span>
                </li>
                <li>
                    <Image
                        src={`/images/photos/증명/증명7.webp`}
                        alt="증명이미지"
                        width={314}
                        height={452}
                        quality={90}
                    />
                </li>
                <li>
                    <Image
                        src={`/images/photos/증명/증명8.webp`}
                        alt="증명이미지"
                        width={314}
                        height={452}
                        quality={90}
                    />
                </li>

                <li>
                    <Image
                        src={`/images/photos/증명/증명9.webp`}
                        alt="증명이미지"
                        width={314}
                        height={452}
                        quality={90}
                    />
                </li>
                <li>
                    <Image
                        src={`/images/photos/증명/증명10.webp`}
                        alt="증명이미지"
                        width={314}
                        height={452}
                        quality={90}
                    />
                </li>
                <li>
                    <Image
                        src={`/images/photos/증명/증명11.webp`}
                        alt="증명이미지"
                        width={314}
                        height={452}
                        quality={90}
                    />
                </li>
                <li>
                    <span>
                        Authentic <br />
                        &emsp;&emsp;&emsp;&ensp;Beauty
                    </span>
                </li>

                <li>
                    <Image
                        src={`/images/photos/증명/증명12.webp`}
                        alt="증명이미지"
                        width={314}
                        height={452}
                        quality={90}
                    />
                </li>
                <li>
                    <Image
                        src={`/images/photos/증명/증명13.webp`}
                        alt="증명이미지"
                        width={314}
                        height={452}
                        quality={90}
                    />
                </li>
                <li>
                    <Image
                        src={`/images/photos/증명/증명14.webp`}
                        alt="증명이미지"
                        width={314}
                        height={452}
                        quality={90}
                    />
                </li>
                <li>
                    <Image
                        src={`/images/photos/증명/증명15.webp`}
                        alt="증명이미지"
                        width={314}
                        height={452}
                        quality={90}
                    />
                </li>
            </ul>
        </div>
    );
}
