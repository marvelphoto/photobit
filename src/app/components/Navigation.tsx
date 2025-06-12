import styles from "./Navigation.module.scss";
import Link from "next/link";

interface NavProps {
    variant?: "header" | "footer";
}

export default function Navigation({ variant = "header" }: NavProps) {
    return (
        <nav className={`${styles.nav} ${styles[variant]}`}>
            <ul>
                <li>
                    <Link href="/about" legacyBehavior>
                        <a>포토빛</a>
                    </Link>
                </li>
                <li>
                    <Link href="/field-profile" legacyBehavior>
                        <a>프로필사진</a>
                    </Link>
                </li>

                <li>
                    <Link href="/field-id">증명·여권·운전사진</Link>
                </li>
                <li>
                    <Link href="/field-business">출장사진</Link>
                </li>
                <li>
                    <Link href="/field-family">가족사진</Link>
                </li>
                <li>
                    <Link href="/field-riglam">RIGLAM 졸업앨범</Link>
                </li>
                <li>
                    <Link href="/field-restore">복원사진</Link>
                </li>
                <li>
                    <Link href="/information">오시는 길</Link>
                </li>
            </ul>
        </nav>
    );
}
