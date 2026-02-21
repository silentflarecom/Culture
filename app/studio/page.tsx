"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import styles from "./page.module.css";

export default function StudioPage() {
    const [uploadState, setUploadState] = useState<"IDLE" | "EXTRACTING" | "DONE">("IDLE");
    const [generateState, setGenerateState] = useState<"IDLE" | "GENERATING" | "DONE">("IDLE");

    const [complexity, setComplexity] = useState(50);
    const [colorStrategy, setColorStrategy] = useState("玉脂原色");
    const [carrier, setCarrier] = useState("phone");

    const handleUpload = () => {
        setUploadState("EXTRACTING");
        // Simulate extraction delay
        setTimeout(() => {
            setUploadState("DONE");
        }, 3000);
    };

    const handleGenerate = () => {
        if (uploadState !== "DONE") return;
        setGenerateState("GENERATING");
        setTimeout(() => {
            setGenerateState("DONE");
        }, 1500);
    };

    // Calculate dynamic styles based on controls
    const dynamicFilter = `
        hue-rotate(${colorStrategy === "水墨晕染" ? '45deg' : '0deg'}) 
        saturate(${100 + complexity * 0.5}%) 
        contrast(${100 + complexity * 0.2}%)
    `;

    return (
        <main className={styles.container}>
            <header className={`animate-fade-in ${styles.header}`}>
                <h1 className={styles.title}>衙绘云契 · 灵感工作台</h1>
                <p className={styles.subtitle}>
                    阳光下的古建美学，轻盈的数字文创实验场
                </p>
            </header>

            <section className={styles.workspace}>
                {/* Left Column: Upload Area */}
                <div className={`${styles.columnLeft} glass-panel animate-slide-up stagger-1`}>
                    <h2 className={styles.panelTitle}>寻章摘句 (资产库)</h2>

                    <div className={styles.uploadBox} onClick={handleUpload}>
                        <div className={styles.uploadIcon}>📥</div>
                        <p>上传官府建筑构件影像<br />（如原木斗拱、雀替雕花）</p>
                        <span className={styles.uploadSub}>支持点击或拖拽</span>
                    </div>

                    <div className={styles.historyBox}>
                        <h3>过往灵感</h3>
                        <div className={styles.historyGrid}>
                            <div className={styles.historyImg} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542642598-632b490f05f7?auto=format&fit=crop&w=200&q=80')" }}></div>
                            <div className={styles.historyImg} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620663784119-0f089defc036?auto=format&fit=crop&w=200&q=80')" }}></div>
                            <div className={`${styles.historyImg} ${styles.historyEmpty}`}>+</div>
                        </div>
                    </div>
                </div>

                {/* Middle Column: Main Canvas */}
                <div className={`${styles.columnMiddle} animate-slide-up stagger-2`}>
                    {/* Header Progress Bar */}
                    <div className={styles.canvasHeader}>
                        <div className={styles.statusText}>
                            {uploadState === "IDLE" ? "静候素材载入..." :
                                uploadState === "EXTRACTING" ? "天公开物：AI 纹理精雕中..." :
                                    "图腾解析完毕，待付诸实现"}
                        </div>
                        <div className={styles.progressBarWrapper}>
                            <div className={`${styles.progressBar} ${uploadState === "EXTRACTING" ? styles.progressAnimating : uploadState === "DONE" ? styles.progressFull : ''}`}>
                                {uploadState === "EXTRACTING" && <div className={styles.progressParticles}></div>}
                            </div>
                        </div>
                    </div>

                    {/* Canvas Area */}
                    <div className={`${styles.canvasArea} glass-panel`}>
                        {uploadState === "DONE" && (
                            <div className={styles.mockupWrapper}>
                                {generateState === "GENERATING" && <div className={styles.magicDust}></div>}

                                {/* The Mockup Item */}
                                <div className={`${styles.mockupBase} ${carrier === 'phone' ? styles.mockupPhone : styles.mockupBag}`}>
                                    {generateState === "DONE" && (
                                        <div
                                            className={styles.extractedPattern}
                                            style={{ filter: dynamicFilter }}
                                        ></div>
                                    )}
                                </div>
                            </div>
                        )}
                        {uploadState !== "DONE" && (
                            <div className={styles.emptyCanvas}>
                                <span>画卷舒展区</span>
                            </div>
                        )}
                    </div>

                    {/* Action Bar */}
                    <div className={styles.canvasActions}>
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={handleGenerate}
                            disabled={uploadState !== 'DONE'}
                            className={styles.generateBtn}
                        >
                            ✨ 凝结文创
                        </Button>
                    </div>
                </div>

                {/* Right Column: Control Panel */}
                <div className={`${styles.columnRight} glass-panel animate-slide-up stagger-3`}>
                    <h2 className={styles.panelTitle}>机巧中枢 (控制面板)</h2>

                    <div className={styles.controlGroup}>
                        <label>纹样繁复度 ({complexity}%)</label>
                        <input
                            type="range"
                            min="0" max="100"
                            value={complexity}
                            onChange={(e) => setComplexity(Number(e.target.value))}
                            className={styles.neumorphicSlider}
                        />
                    </div>

                    <div className={styles.controlGroup}>
                        <label>重绘意境</label>
                        <div className={styles.toggleGroup}>
                            <button
                                className={`${styles.toggleBtn} ${colorStrategy === '玉脂原色' ? styles.activeToggle : ''}`}
                                onClick={() => setColorStrategy('玉脂原色')}
                            >
                                玉脂原色
                            </button>
                            <button
                                className={`${styles.toggleBtn} ${colorStrategy === '水墨晕染' ? styles.activeToggle : ''}`}
                                onClick={() => setColorStrategy('水墨晕染')}
                            >
                                水墨晕染
                            </button>
                        </div>
                    </div>

                    <div className={styles.controlGroup}>
                        <label>文创承载物</label>
                        <div className={styles.carrierGrid}>
                            <button
                                className={`${styles.carrierBtn} ${carrier === 'phone' ? styles.activeCarrier : ''}`}
                                onClick={() => setCarrier('phone')}
                            >
                                📱 冰裂纹壳
                            </button>
                            <button
                                className={`${styles.carrierBtn} ${carrier === 'bag' ? styles.activeCarrier : ''}`}
                                onClick={() => setCarrier('bag')}
                            >
                                👜 织锦行囊
                            </button>
                        </div>
                    </div>

                    <div style={{ marginTop: 'auto', paddingTop: 'var(--spacing-xl)' }}>
                        <Link href="/admin/dashboard" style={{ textDecoration: 'none', display: 'block' }}>
                            <Button variant="secondary" fullWidth className={styles.authLink}>
                                提交确权契约 ➜
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
