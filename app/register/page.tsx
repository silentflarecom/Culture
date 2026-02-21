"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";

export default function RegisterPage() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");

        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "注册失败，请稍后再试");
            }

            setSuccess("注册成功！即将跳转到登录页面...");
            setTimeout(() => {
                router.push("/login");
            }, 1500);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className={styles.container}>
            <div className={`${styles.authBox} glass-panel animate-slide-up`}>
                <h1 className={styles.title}>创建设计账号</h1>
                <p className={styles.subtitle}>加入平台，一键生成属于您的数字文创</p>

                {error && <div className={styles.errorMsg}>{error}</div>}
                {success && <div className={styles.successMsg}>{success}</div>}

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="name">您的称呼</label>
                        <input
                            id="name"
                            type="text"
                            className={styles.input}
                            placeholder="独立设计师 李白"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="email">邮箱地址</label>
                        <input
                            id="email"
                            type="email"
                            className={styles.input}
                            placeholder="libai@culture.ai"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="password">设置密码</label>
                        <input
                            id="password"
                            type="password"
                            className={styles.input}
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            minLength={6}
                        />
                    </div>

                    <button
                        type="submit"
                        className={`btn-primary ${styles.submitBtn}`}
                        disabled={loading}
                    >
                        {loading ? "注册中..." : "同意协议并注册"}
                    </button>
                </form>

                <span className={styles.linkText}>
                    已有账号？ <Link href="/login">直接登录</Link>
                </span>
            </div>
        </main>
    );
}
