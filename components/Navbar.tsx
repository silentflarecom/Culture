"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import styles from "./Navbar.module.css";

export function Navbar() {
    const { data: session, status } = useSession();

    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.brand}>
                <span style={{ fontSize: '1.2em' }}>🏮</span> 衙绘云契
            </Link>

            <div className={styles.links}>
                <Link href="/studio" className={styles.navLink}>
                    AI 设计工坊
                </Link>
                <Link href="/dashboard" className={styles.navLink}>
                    合规追踪
                </Link>
            </div>

            <div className={styles.authGroup}>
                {status === "loading" ? (
                    <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>加载中...</span>
                ) : session ? (
                    <>
                        <span className={styles.userName}>
                            {session.user?.name || session.user?.email}
                            {/* @ts-ignore */}
                            {session.user?.role === "ADMIN" && (
                                <span className={styles.adminBadge}>ADMIN</span>
                            )}
                        </span>
                        {/* @ts-ignore */}
                        {session.user?.role === "ADMIN" && (
                            <Link href="/admin" className="btn-secondary" style={{ padding: "0.4rem 1rem", fontSize: "0.85rem" }}>
                                管理后台
                            </Link>
                        )}
                        <button
                            onClick={() => signOut({ callbackUrl: '/' })}
                            className="btn-secondary"
                            style={{ padding: "0.4rem 1rem", fontSize: "0.85rem" }}
                        >
                            登出
                        </button>
                    </>
                ) : (
                    <>
                        <Link href="/login" className={styles.navLink}>
                            登录
                        </Link>
                        <Link href="/register" className="btn-primary" style={{ padding: "0.4rem 1.2rem", fontSize: "0.9rem" }}>
                            注册
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
}
