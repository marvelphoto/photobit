"use client";

import styles from "@/styles/pages/field-family.module.scss";
import { useState } from "react";

import Image from "next/image";

export default function FieldRestorePage() {
    const imgArr: string[] = [
        "복원-02",
        "복원-01메인",
        "복원-03",
        "복원-04",
        "복원-05",
        "복원-06",
        "복원-07",
        "복원-08",
        "복원-09",
        "복원-10",
        "복원-11",
        "복원-12"
    ];
    const totalItems = imgArr.length;
    const visibleCount = 6;
    const [startIndex, setStartIndex] = useState(totalItems);
    const [selected, setSelected] = useState(imgArr[1]);
    const [isAnimating, setIsAnimating] = useState<"left" | "right" | null>(null);

    const arrowHandle = (direction: "left" | "right") => {
        setIsAnimating(direction);
        setTimeout(() => setIsAnimating(null), 400);

        setTimeout(
            () =>
                setStartIndex((prevIndex) => {
                    if (direction === "right") return (prevIndex + 1) % totalItems;
                    else return (prevIndex - 1 + totalItems) % totalItems;
                }),
            400
        );
    };

    const visibleArr = Array.from({ length: visibleCount }, (_, i) => imgArr[(startIndex + i) % totalItems]);

    return (
        <div>
            <div className="explanation">
                <h3>복원 사진</h3>
                <h4>흐릿한 기억을 선명하게, 추억을 다시 만나다</h4>
                <p>
                    시간 속에 흐릿해진 추억을, 섬세하게 복원하여 다시 선명하게 되살립니다.
                    <br /> 잃어버린 순간들을 되찾아, 그때의 감동을 그대로 담아내는 복원사진으로, 당신만의
                    소중한 기억을 다시 만날 수 있습니다.
                </p>
            </div>
            <div className={styles.exampleContainer}>
                <div className={styles.selectedExam}>
                    <Image
                        src={`/images/photos/복원사진/${selected}.jpg`}
                        alt="복원사진 확대"
                        width={1500}
                        height={830}
                    />
                </div>
                <span onClick={() => arrowHandle("left")}>
                    <Image src="/images/icon-arrow.png" alt="왼쪽 화살표" width={100} height={100} />
                </span>
                <ul
                    className={`${styles.examList}  ${isAnimating === "left" ? styles.left : ""} ${
                        isAnimating === "right" ? styles.right : ""
                    }`}
                >
                    {visibleArr.map((item: string, index: number) => {
                        return (
                            <li key={index} onClick={() => setSelected(item)}>
                                <Image
                                    src={`/images/photos/복원사진/${item}.jpg`}
                                    width={1500}
                                    height={830}
                                    alt="복원 사진 이미지"
                                />
                            </li>
                        );
                    })}
                </ul>
                <span onClick={() => arrowHandle("right")}>
                    <Image src="/images/icon-arrow.png" alt="오른쪽 화살표" width={100} height={100} />
                </span>
            </div>
        </div>
    );
}
