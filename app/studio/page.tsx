"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function StudioPage() {
    const [step, setStep] = useState<"IDLE" | "EXTRACTING" | "DONE">("IDLE");

    const handleUpload = () => {
        setStep("EXTRACTING");
        // Simulate AI extraction taking some time
        setTimeout(() => {
            setStep("DONE");
        }, 2500);
    };

    return (
        <main className={styles.container}>
            <header className={`animate-fade-in ${styles.header}`}>
                <h1 className={styles.title}>AI 设计工坊</h1>
                <p className={styles.subtitle}>
                    上传官府建筑（如县衙、府衙）实景图，AI边缘模型将自动提取结构与美学特征。
                </p>
            </header>

            <section className={styles.workspace}>
                {/* Left Panel: Upload / Image Input */}
                <div className={`glass-panel animate-slide-up stagger-1 ${styles.panel}`}>
                    <h2 className={styles.panelTitle}>
                        <span>1</span> 上传古建照片
                    </h2>
                    {step === "IDLE" ? (
                        <div className={styles.uploadArea} onClick={handleUpload}>
                            <div className={styles.uploadIcon}>📸</div>
                            <h3>点击或拖拽上传图片</h3>
                            <p style={{ color: "var(--text-muted)", marginTop: "0.5rem" }}>
                                支持 JPG, PNG (推荐清晰的飞檐、雕花局部)
                            </p>
                        </div>
                    ) : (
                        <div className={styles.uploadArea} style={{ borderColor: "var(--success)" }}>
                            {/* Mock Uploaded Image Placeholder */}
                            <div style={{ width: "100%", height: "100%", background: "url('https://images.unsplash.com/photo-1542642598-632b490f05f7?auto=format&fit=crop&q=80&w=800') center/cover", borderRadius: "8px" }} />
                        </div>
                    )}
                </div>

                {/* Right Panel: Extraction Results */}
                <div className={`glass-panel animate-slide-up stagger-2 ${styles.panel}`}>
                    <h2 className={styles.panelTitle}>
                        <span>2</span> AI 元素提取 (Google Nano)
                    </h2>

                    {step === "IDLE" && (
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", color: "var(--text-muted)" }}>
                            等待上传图片...
                        </div>
                    )}

                    {step === "EXTRACTING" && (
                        <div className={styles.loadingBox}>
                            <div className={styles.spinner}></div>
                            <p className="text-gradient">模型正在解析榫卯结构与漆画色彩...</p>
                        </div>
                    )}

                    {step === "DONE" && (
                        <div className="animate-fade-in" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                            <p style={{ color: "var(--success)", marginBottom: "1rem" }}>✓ 提取成功：内乡县衙仪门木雕</p>

                            <div className={styles.elementsGrid}>
                                <div className={styles.elementCard}>
                                    <div className={styles.colorSwatch} style={{ background: "#8B1C1C" }}></div>
                                    <div>
                                        <div style={{ fontWeight: 600 }}>官署朱红</div>
                                        <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>主色调</div>
                                    </div>
                                </div>
                                <div className={styles.elementCard}>
                                    <div className={styles.colorSwatch} style={{ background: "#D4AF37" }}></div>
                                    <div>
                                        <div style={{ fontWeight: 600 }}>匾额琉金</div>
                                        <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>辅助色</div>
                                    </div>
                                </div>
                                <div className={styles.elementCard} style={{ gridColumn: "span 2" }}>
                                    <span style={{ fontSize: "1.5rem", marginRight: "1rem" }}>🐲</span>
                                    <div>
                                        <div style={{ fontWeight: 600 }}>纹样：云龙莛蔓</div>
                                        <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>提取自正脊雕花</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Bottom Section: Generated Products */}
            {step === "DONE" && (
                <section className={`animate-slide-up ${styles.productsSection}`}>
                    <h2 className={styles.title} style={{ fontSize: "2rem", textAlign: "center" }}>一键生成文创设计</h2>
                    <p className={styles.subtitle} style={{ textAlign: "center", marginBottom: "var(--spacing-xl)" }}>
                        已将提取美学自动映射至以下实物载体
                    </p>

                    <div className={styles.productsGrid}>
                        <div className={`glass-panel ${styles.productCard}`}>
                            <div className={styles.productImageMock}>
                                📱
                                <div className={styles.productOverlayPattern} style={{ backgroundSize: "30px 30px" }}></div>
                            </div>
                            <h3>国潮云龙手机壳</h3>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>预估售价: ¥68.00</p>
                        </div>

                        <div className={`glass-panel ${styles.productCard}`}>
                            <div className={styles.productImageMock} style={{ aspectRatio: "1/1" }}>
                                👜
                                <div className={styles.productOverlayPattern} style={{ backgroundSize: "40px 40px" }}></div>
                            </div>
                            <h3>朱红帆布环保袋</h3>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>预估售价: ¥45.00</p>
                        </div>

                        <div className={`glass-panel ${styles.productCard}`}>
                            <div className={styles.productImageMock} style={{ aspectRatio: "4/3" }}>
                                📔
                                <div className={styles.productOverlayPattern} style={{ backgroundSize: "15px 15px", opacity: 0.1 }}></div>
                            </div>
                            <h3>古建烫金笔记本</h3>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>预估售价: ¥39.00</p>
                        </div>
                    </div>

                    <div className={styles.actionFooter}>
                        <Link href="/dashboard" className="btn-primary animate-pulse">
                            提交确权审批 (最快3日过审) →
                        </Link>
                    </div>
                </section>
            )}
        </main>
    );
}
