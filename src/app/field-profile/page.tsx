import styles from "@/styles/pages/field-profile.module.scss";
import Image from "next/image";

export default function FieldProfilePage() {
    const imgArrA: string[] = [
        "a-02",
        "a-03",
        "a-04",
        "a-05",
        "a-06",
        "a-07",
        "a-08",
        "a-09",
        "a-10",
        "a-11",
        "a-12",
        "a-13",
        "a-14",
        "a-15",
        "a-16",
        "a-17",

        "a-02",
        "a-03",
        "a-04",
        "a-05",
        "a-06",
        "a-07",
        "a-08",
        "a-09",
        "a-10",
        "a-11",
        "a-12",
        "a-13",
        "a-14",
        "a-15",
        "a-16",
        "a-17"
    ];

    const imgArrB: string[] = [
        "b-01",
        "b-05",
        "b-02",
        "b-03",
        "b-04",
        "b-06",
        "b-07",
        "b-08",
        "b-09",

        "b-01",
        "b-05",
        "b-02",
        "b-03",
        "b-04",
        "b-06",
        "b-07",
        "b-08",
        "b-09"
    ];
    return (
        <div className={styles.fieldProfile}>
            <div className={styles.profileA}>
                <div className="explanation">
                    <h3>프로필사진 A</h3>
                    <h4>베이직한 상반신 프로필 사진</h4>
                    <p>
                        자연스러운 조명과 균형 잡힌 구도로 담아내는, 당신만의 프로페셔널한 상반신 프로필 사진
                        촬영입니다.
                    </p>
                </div>
                <div className={`${styles.imgWrap} ${styles.first}`}>
                    {imgArrA.map((item: string, index: number) => {
                        return (
                            <div key={index}>
                                <Image
                                    src={`/images/photos/프로필/${item}.jpg`}
                                    width={600}
                                    height={828}
                                    alt="프로필 이미지 A"
                                    priority
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={styles.profileB}>
                <div className="explanation">
                    <h3>프로필사진 B</h3>
                    <h4>퍼스널 상반신+하반신 프로필 사진</h4>
                    <p>
                        당신의 퍼스널 브랜딩을 완성하는 상반신과 하반신 프로필 컷. 자연스러운 포즈와 세련된
                        무드로 전문성을 담는 프로필 사진 촬영입니다.
                    </p>
                </div>
                <div className={`${styles.imgWrap} ${styles.second}`}>
                    {imgArrB.map((item: string, index: number) => {
                        return (
                            <div key={index}>
                                <Image
                                    src={`/images/photos/프로필/${item}.jpg`}
                                    width={600}
                                    height={828}
                                    alt="프로필 이미지 B"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
