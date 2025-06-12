import styles from "@/styles/components/footer.module.scss";
import Nav from "./Navigation";

export default function Footer() {
    // console.log(variant);
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContents}>
                <Nav variant="footer" />
                <div className={styles.information}>
                    <div className={styles.article}>
                        <h3>PHOTOBIT Studio</h3>
                        <a>photobit.co.kr</a>
                    </div>
                    <ul>
                        <li>
                            <span>OWNER</span>김종욱
                        </li>
                        <li>
                            <span>BUSINESS NUMBER</span>
                            {`533-19-00064`}
                        </li>
                        <li>
                            <span>TEL</span>010 2076 9799
                        </li>
                        <li>
                            <span>EMAIL</span>photobit@naver.com
                        </li>
                        <li>
                            <span>ADD</span>서울특별시 구로구 경인로 20길 9 2층
                            (1호선 오류동역 3번 출구 북광장 앞)
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
