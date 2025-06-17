"use client";

import styles from "@/styles/pages/field-wedding.module.scss";
// import Link from "next/link";
// import { useEffect, useState } from "react";
import Image from "next/image";

export default function FieldWeddingPage() {
    // const [modalHandle, setModalHandle] = useState(false);

    // useEffect(() => {
    //     if (localStorage.getItem("time") === null) setModalHandle(true);
    //     else {
    //         const timeCheck = Number(localStorage.getItem("time"));
    //         if (Date.now() - timeCheck > 86400000) {
    //             setModalHandle(true);
    //             const Time = String(Date.now());
    //             localStorage.setItem("time", Time);
    //         } else {
    //             setModalHandle(false);
    //         }
    //     }
    // }, []);

    // useEffect(() => {
    //     if (modalHandle) document.body.style.overflow = "hidden";
    //     else document.body.style.overflow = "auto";
    // }, [modalHandle]);

    // const modalTimerHandle = () => {
    //     const Time = String(Date.now());
    //     setModalHandle(false);
    //     localStorage.setItem("time", Time);
    // };

    // const imgArr: string[] = ["a", "b", "c", "d", "e", "f", "h", "i", "j"];
    // const totalItems = imgArr.length;
    // const visibleCount = 5;
    // const [startIndex, setStartIndex] = useState(totalItems);
    // const [isAnimating, setIsAnimating] = useState<"left" | "right" | null>(null);

    // const arrowHandle = (direction: "left" | "right") => {
    //     setIsAnimating(direction);
    //     setTimeout(() => setIsAnimating(null), 400);

    //     setTimeout(
    //         () =>
    //             setStartIndex((prevIndex) => {
    //                 if (direction === "right") return (prevIndex + 1) % totalItems;
    //                 else return (prevIndex - 1 + totalItems) % totalItems;
    //             }),
    //         400
    //     );
    // };

    // const visibleArr = Array.from({ length: visibleCount }, (_, i) => imgArr[(startIndex + i) % totalItems]);

    return (
        <div className={styles.wedding}>
            {/* <div className={`${styles.swedModalWrap} ${modalHandle ? styles.view : styles.hide}`}>
                <div className={styles.swedModal}>
                    <Link href="https://www.sewede.com/index.html" target="_blank">
                        <Image src="/images/photos/j.jpg" alt="modal" width={540} height={500} />
                    </Link>

                    <div className={styles.btnWrap}>
                        <div onClick={modalTimerHandle}>오늘 하루 그만 보기</div>
                        <div
                            onClick={() => {
                                setModalHandle(false);
                            }}
                        >
                            닫기
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="explanation">
                <h3>RIGLAM 졸업앨범</h3>
                <h4>추억을 빛내는 디지털 앨범 RIGLAM —</h4>
                <p>
                    RIGLAM은 졸업의 감성을,
                    <br />더 가볍고 스마트하게 담은 디지털 졸업앨범입니다.
                </p>
                <p>
                    모교 소개부터 학급별 프로필, 졸업사진, 행사 영상, 친구들의 메시지까지 —
                    <br />
                    종이 앨범의 감성을, 모바일 속에 담았습니다.
                </p>
                <p>
                    언제 어디서나, 시간과 장소에 구애 없이 꺼내볼 수 있는 졸업앨범. <br />
                    학생은 더 감각적으로, 학교는 더 간편하게 추억을 전달할 수 있습니다.
                </p>
            </div>

            <div className={styles.contents}>
                <Image
                    src="/images/photos/riglam.jpg"
                    alt=""
                    width={1920} // 실제 이미지 비율에 맞게
                    height={1080}
                    style={{ width: "100%", height: "auto", cursor: "pointer" }}
                />
                {/* <Image src="/images/photos/riglam.jpg" alt="" width={100} height={100} /> */}
            </div>

            <div className="explanation" style={{ marginTop: "80px", marginBottom: "200px" }}>
                <h3>추억을 빛내는 디지털 앨범</h3>

                <p>
                    RIGLAM은 Remember(기억)와 Glow + Glamorous(반짝임, 감각)의 조합으로
                    <br />
                    &quot;추억을 감각적으로 빛내는 디지털 졸업앨범&quot;이라는 의미를 담고 있습니다.
                </p>
                <p>
                    단순한 기록을 넘어,
                    <br />
                    소중한 순간을 감성적으로 저장하고 나누는 새로운 방식의 졸업 앨범.
                    <br />
                    RIGLAM에서 당신의 마지막 학교 추억을 반짝이게 남겨보세요.
                </p>
            </div>

            <div
                className="explanation"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    fontSize: "24px",
                    marginBottom: "200px"
                }}
            >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Image
                        src="/images/icon-phone.png"
                        alt="phone icon"
                        width={28}
                        height={28}
                        style={{ opacity: 0.4 }}
                    />
                    <h5>문의 전화</h5>
                    <h6>010 2076 9799</h6>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                    <Image
                        src="/images/icon-mail.png"
                        alt="email icon"
                        width={28}
                        height={28}
                        style={{ opacity: 0.4 }}
                    />
                    <h5>이메일</h5>

                    <h6>photobit@naver.com</h6>
                </div>
            </div>
        </div>
    );
}
