"use client";

import styles from "@/styles/pages/information.module.scss";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const Map = dynamic(() => import("../components/map/Map"), { ssr: false });

export default function FieldInformationPage() {
    useEffect(() => {
        // const map = document
    }, []);
    return (
        <div>
            <div className="explanation">
                <h3>오시는 길</h3>
                <h4>
                    <Image src="/images/icon-pin.png" alt="pin icon" width={32} height={32} />
                    서울특별시 구로구 경인로20길 9 2층 (1호선 오류동역 3번 출구 북광장 앞)
                </h4>
                <div className={styles.margin}>
                    <div></div>
                    <p>2nd floor, 9, Gyeongin-ro 20-gil, Guro-gu, Seoul, Republic of Korea</p>
                </div>
            </div>
            <div className={styles.contents}>
                <div className={styles.map}>
                    <Map latitude={37.495477} longitude={126.843953} />
                </div>
                <div className={styles.introForUseWrap}>
                    <div className={styles.introImg}></div>
                    <div className={styles.introDetailWrap}>
                        <div className={styles.introDetail}>
                            <div className={styles.title}>
                                <Image src="/images/icon-clock.png" alt="clock icon" width={32} height={32} />
                                이용 시간
                            </div>
                            <div className={styles.detailTime}>
                                <div>
                                    <span>매 일</span> 10:00 ~ 22:00
                                </div>
                                <div>
                                    <span>일 요 일</span> 14:00 ~ 22:00
                                </div>
                                <div>
                                    <span>공 휴 일</span> 10:00 ~ 22:00
                                </div>
                            </div>
                        </div>
                        <div className={styles.introDetail}>
                            <div className={styles.title}>
                                <Image src="/images/icon-phone.png" alt="phone icon" width={32} height={32} />
                                전화번호
                            </div>
                            <div className={styles.detailContact}>010 2076 9799</div>
                        </div>
                        <div className={styles.introDetail}>
                            <div className={styles.title}>
                                <Image src="/images/icon-info.png" alt="info icon" width={32} height={32} />
                                이용안내
                            </div>

                            <div className={styles.detailGuide}>
                                <Image
                                    src="/images/icon-toilet.png"
                                    alt="toilet icon"
                                    width={80}
                                    height={80}
                                />
                                남·여 화장실 구분
                            </div>
                        </div>
                        <div className={styles.introDetail}>
                            <div className={styles.title}>
                                <Image src="/images/icon-mail.png" alt="email icon" width={32} height={32} />
                                이메일
                            </div>
                            <div className={styles.detailContact}>photobit@naver.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
