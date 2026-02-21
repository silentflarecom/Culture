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
            <div className={`${styles.authBox} glass-panel animate-slide-up`} style={{ borderTop: "3px solid var(--accent-red)" }}>
                <h1 className={styles.title} style={{ color: "var(--accent-red)" }}>管理员入口</h1>
                <p className={styles.subtitle}>官府古建文创平台 - 内部管控中心</p>

                {error && <div className={styles.errorMsg}>{error}</div>}

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="email">管理账号 (邮箱)</label>
                        <input
                            id="email"
                            type="email"
                            className={styles.input}
                            placeholder="Admin"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="password">管理密码</label>
                        <input
                            id="password"
                            type="password"
                            className={styles.input}
                            placeholder="Nanci00000"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className={`btn-primary ${styles.submitBtn}`}
                        style={{ background: "linear-gradient(135deg, var(--accent-red), #6B1515)", boxShadow: "0 4px 15px var(--accent-red-dim)" }}
                        disabled={loading}
                    >
                        {loading ? "验证身份中..." : "进入管控中心"}
                    </button>
                </form>

                <span className={styles.linkText}>
                    返回 <Link href="/login">普通用户登录</Link>
                </span>
            </div>
        </main>
    );
}
