"use client";

import styles from "@/styles/pages/field-business.module.scss";
import { useState } from "react";
import Image from "next/image";

export default function FieldBusinessPage() {
    const imgArr: string[][] = [
        ["a", "b", "c", "d"],
        ["a", "b", "c", "d"],
        ["a", "b", "c", "d"],
        ["a", "b", "c", "d"]
    ];
    const [thumbnail, setThumbnail] = useState(["a", "b", "c", "d"]);

    const handleThumbnail = (list: number, item: string) => {
        const updatedThumbnail = [...thumbnail];
        updatedThumbnail[list] = item;

        setThumbnail(updatedThumbnail);
    };

    return (
        <div>
            <div className="explanation">
                <h3>출장사진</h3>
                <h4>어디서든, 전문가의 손길로 감동을 담다</h4>
                <p>
                    어디서든 전문적인 촬영으로, 중요한 순간을 세심하게 담아냅니다.
                    <br /> 출장 촬영을 통해, 귀하의 필요와 상황에 맞춘 고퀄리티 이미지를 제공하며, 가장
                    자연스럽고 프로페셔널한 모습을 완성해드립니다.
                </p>
            </div>

            <div className={styles.contents}>
                <div className={styles.type}>
                    <div className={styles.selectedImg}>
                        <img
                            src={`/images/photos/출장/취업박람회/${thumbnail[0]}.webp`}
                            alt="비즈니스 이미지"
                            width={230}
                            height={130}
                            // quality={90}
                        />
                    </div>
                    <div className={`${styles.typeDesc} explanation`}>
                        <h4>취업 박람회 사진</h4>

                        <p>
                            취업 박람회 현장 참가자의 전문성, 신뢰감을 더하는
                            <br /> 출장 촬영 서비스를 제공하고 있습니다.
                            <br />
                            현장에 최적화된 조명과 숙련도 높은 보정으로
                            <br />
                            기업이 신뢰할 수 있는 프로필을 완성해드립니다.
                        </p>
                    </div>
                    {imgArr[0].map((item, index) => {
                        return (
                            <div
                                className={`${styles.imgList} ${
                                    index === 1
                                        ? styles.secondImg
                                        : index === 2
                                        ? styles.thirdImg
                                        : index === 3
                                        ? styles.fourthImg
                                        : ""
                                }`}
                                key={index}
                                onClick={() => handleThumbnail(0, item)}
                            >
                                <Image
                                    src={`/images/photos/출장/취업박람회/${item}.webp`}
                                    alt="비즈니스 이미지"
                                    width={230}
                                    height={130}
                                />
                            </div>
                        );
                    })}
                </div>

                <div className={styles.type}>
                    <div className={`${styles.typeDesc} explanation`}>
                        <h4>웨딩 원판 스냅 사진</h4>
                        <p>
                            웨딩의 감동을 세련되게 기록하는 출장 촬영 서비스.
                            <br />
                            원판부터 스냅까지, 정교한 조명과 전문적인 연출로
                            <br />
                            품격 있는 웨딩 사진을 완성합니다. <br />
                            오래도록 변함없이 빛나는 아름다움을 담아드립니다.
                        </p>
                    </div>

                    <div className={styles.selectedImg}>
                        <img
                            src={`/images/photos/출장/웨딩/${thumbnail[1]}.webp`}
                            alt="비즈니스 이미지"
                            width={230}
                            height={130}
                            // quality={90}
                        />
                    </div>
                    {imgArr[1].map((item, index) => {
                        return (
                            <div
                                className={`${styles.imgList} ${
                                    index === 1
                                        ? styles.secondImg
                                        : index === 2
                                        ? styles.thirdImg
                                        : index === 3
                                        ? styles.fourthImg
                                        : ""
                                }`}
                                key={index}
                                onClick={() => handleThumbnail(1, item)}
                            >
                                <Image
                                    src={`/images/photos/출장/웨딩/${item}.webp`}
                                    alt="비즈니스 이미지"
                                    width={230}
                                    height={130}
                                />
                            </div>
                        );
                    })}
                </div>

                <div className={styles.type}>
                    <div className={styles.selectedImg}>
                        <img
                            src={`/images/photos/출장/고희연/${thumbnail[2]}.webp`}
                            alt="비즈니스 이미지"
                            width={230}
                            height={130}
                            // quality={100}
                        />
                    </div>
                    <div className={`${styles.typeDesc} explanation`}>
                        <h4>고희연 사진</h4>
                        <p>
                            고희연, 가족의 사랑과 축복이 가득한 뜻깊은 순간.
                            <br />
                            출장 촬영으로 품격 있는 연출과 세심한 보정까지 더해,
                            <br />
                            오랫동안 간직할 소중한 기록을 완성합니다.
                        </p>
                    </div>
                    {imgArr[2].map((item, index) => {
                        return (
                            <div
                                className={`${styles.imgList} ${
                                    index === 1
                                        ? styles.secondImg
                                        : index === 2
                                        ? styles.thirdImg
                                        : index === 3
                                        ? styles.fourthImg
                                        : ""
                                }`}
                                key={index}
                                onClick={() => handleThumbnail(2, item)}
                            >
                                <Image
                                    src={`/images/photos/출장/고희연/${item}.webp`}
                                    alt="비즈니스 이미지"
                                    width={230}
                                    height={130}
                                />
                            </div>
                        );
                    })}
                </div>

                <div className={styles.type}>
                    <div className={`${styles.typeDesc} explanation`}>
                        <h4>기업체 행사사진</h4>
                        <p>
                            기업체 행사에서 중요한 순간을 담아냅니다. <br />
                            전문 촬영 장비와 섬세한 연출을 통해,
                            <br /> 행사 분위기와 핵심적인 장면을 고퀄리티로 담아
                            <br /> 기업의 이미지를 돋보이는 사진을 제공합니다.
                        </p>
                    </div>
                    <div className={styles.selectedImg}>
                        <img
                            src={`/images/photos/출장/기업/${thumbnail[3]}.webp`}
                            alt="비즈니스 이미지"
                            width={230}
                            height={130}
                            // quality={100}
                        />
                    </div>
                    {imgArr[3].map((item, index) => {
                        return (
                            <div
                                className={`${styles.imgList} ${
                                    index === 1
                                        ? styles.secondImg
                                        : index === 2
                                        ? styles.thirdImg
                                        : index === 3
                                        ? styles.fourthImg
                                        : ""
                                }`}
                                key={index}
                                onClick={() => handleThumbnail(3, item)}
                            >
                                <Image
                                    src={`/images/photos/출장/기업/${item}.webp`}
                                    alt="비즈니스 이미지"
                                    width={230}
                                    height={130}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
