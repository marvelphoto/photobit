"use client";

import styles from "./Header.module.scss";
import Nav from "./Navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
        >
            <div>
                <Link href="/" style={{ width: "216px" }}>
                    <Image
                        className={styles.headerLogo}
                        src="/images/logo.svg"
                        alt="header logo"
                        width={216}
                        height={60}
                    />
                </Link>

                <Nav variant="header" />
            </div>
        </header>
    );
}
