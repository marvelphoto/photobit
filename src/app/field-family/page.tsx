"use client";

import styles from "@/styles/pages/field-family.module.scss";
import { useState } from "react";
import Image from "next/image";

export default function FieldFamilyPage() {
    const imgArr: string[] = ["a", "b", "c", "d", "e", "f", "h", "i", "j"];
    const totalItems = imgArr.length;
    const visibleCount = 6;
    const [startIndex, setStartIndex] = useState(totalItems);
    const [selected, setSelected] = useState(imgArr[1]);
    const [isAnimating, setIsAnimating] = useState<"left" | "right" | null>(
        null
    );

    const arrowHandle = (direction: "left" | "right") => {
        setIsAnimating(direction);
        setTimeout(() => setIsAnimating(null), 400);

        setTimeout(
            () =>
                setStartIndex((prevIndex) => {
                    if (direction === "right")
                        return (prevIndex + 1) % totalItems;
                    else return (prevIndex - 1 + totalItems) % totalItems;
                }),
            400
        );
    };

    const visibleArr = Array.from(
        { length: visibleCount },
        (_, i) => imgArr[(startIndex + i) % totalItems]
    );

    console.log(visibleArr);
    return (
        <div>
            <div className="explanation">
                <h3>가족사진</h3>
                <h4>가족의 소중한 순간을, 마음에 새기다</h4>
                <p>
                    다양한 크기로 담아낸 가족의 사랑과 웃음, 화목함의 순간.
                    <br />
                    따뜻한 감성이 살아있는 추억을 사진에 담아드립니다.
                </p>
            </div>

            <div className={styles.contents}>
                <h4>크기</h4>
                <ul>
                    <li>
                        <div>11r 가족사진</div>
                        <p>11 x 14 (inch)</p>
                    </li>
                    <li>
                        <div>16r 가족사진</div>
                        <p>16 x 20 (inch)</p>
                    </li>
                    <li>
                        <div>20r 가족사진</div>
                        <p>20 x 24 (inch)</p>
                    </li>
                    <li>
                        <div>24r 가족사진</div>
                        <p>24 x 36 (inch)</p>
                    </li>
                </ul>
                <div className={styles.exampleContainer}>
                    <div className={styles.selectedExam}>
                        <Image
                            src={`/images/photos/${selected}.jpg`}
                            alt="가족사진 확대"
                            width={230}
                            height={130}
                        />
                    </div>
                    <span onClick={() => arrowHandle("left")}>
                        <Image
                            src="/images/icon-arrow.png"
                            alt="왼쪽 화살표"
                            width={100}
                            height={100}
                        />
                    </span>
                    <ul
                        className={`${styles.examList}  ${
                            isAnimating === "left" ? styles.left : ""
                        } ${isAnimating === "right" ? styles.right : ""}`}
                    >
                        {visibleArr.map((item: string, index: number) => {
                            return (
                                <li
                                    key={index}
                                    onClick={() => setSelected(item)}
                                >
                                    <Image
                                        src={`/images/photos/${item}.jpg`}
                                        alt="가족사진 목록"
                                        width={230}
                                        height={130}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                    <span onClick={() => arrowHandle("right")}>
                        <Image
                            src="/images/icon-arrow.png"
                            alt="오른쪽 화살표"
                            width={100}
                            height={100}
                        />
                    </span>
                </div>
            </div>
        </div>
    );
}
// style={{ transform: "translate(96px, 0)" }}
