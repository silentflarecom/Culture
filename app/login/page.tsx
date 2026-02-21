"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const res = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });

        setLoading(false);

        if (res?.error) {
            setError(res.error);
        } else {
            router.push("/dashboard");
            router.refresh(); // Refresh state across components
        }
    };

    return (
        <main className={styles.container}>
            <div className={`${styles.authBox} glass-panel animate-slide-up`}>
                <h1 className={styles.title}>欢迎回归</h1>
                <p className={styles.subtitle}>登录古建文创 AI 设计与授权平台</p>

                {error && <div className={styles.errorMsg}>{error}</div>}

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="email">邮箱地址</label>
                        <input
                            id="email"
                            type="email"
                            className={styles.input}
                            placeholder="admin@culture.ai"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="password">密码</label>
                        <input
                            id="password"
                            type="password"
                            className={styles.input}
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className={`btn-primary ${styles.submitBtn}`}
                        disabled={loading}
                    >
                        {loading ? "登录中..." : "登录账号"}
                    </button>
                </form>

                <span className={styles.linkText}>
                    还没有账号？ <Link href="/register">立即注册</Link>
                </span>

                <span className={styles.linkText} style={{ marginTop: "0.5rem", fontSize: "0.8rem" }}>
                    管理员登录（仅限内部管理人员）：<Link href="/admin-login">进入管理员入口</Link>
                </span>
            </div>
        </main>
    );
}
