"use client";

import styles from "@/styles/pages/information.module.scss";
import { useEffect, useRef } from "react";

import Image from "next/image";

export default function FieldInformationPage() {
    const mapRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const script = document.createElement("script");
        script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_MAP_API_KEY}`;
        script.async = true;
        script.onload = () => {
            if (window.naver && mapRef.current) {
                new window.naver.maps.Map(mapRef.current, {
                    center: new window.naver.maps.LatLng(37.495477, 126.843953),
                    zoom: 55
                });
            }
        };

        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
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
                    <div ref={mapRef} style={{ width: "100%", height: "400px" }} />
                    {/* <Map latitude={37.495477} longitude={126.843953} /> */}
                </div>
                <div className={styles.introForUseWrap}>
                    <div className={styles.introImg}>
                        <img src="/images/photos/정보/info.jpg" alt="사진관 위치" />
                    </div>
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
