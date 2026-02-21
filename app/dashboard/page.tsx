"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css";

// A simple Number Ticker Component
const NumberTicker = ({ end, duration = 2000, prefix = "", suffix = "", isFloat = false }: { end: number, duration?: number, prefix?: string, suffix?: string, isFloat?: boolean }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // easeOutQuart
            const easeOut = 1 - Math.pow(1 - percentage, 4);
            const currentCount = end * easeOut;

            setCount(currentCount);

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return <span>{prefix}{isFloat ? count.toFixed(1) : Math.floor(count)}{suffix}</span>;
};


export default function DashboardPage() {
    return (
        <main className={styles.container}>
            {/* Top Bar matching requirements */}
            <header className={`animate-fade-in ${styles.header}`}>
                <div className={styles.headerTitleArea}>
                    <h1 className={styles.title}>衙绘云契 · 数字资产管理后台</h1>
                    <span className={styles.badge}>文物保护单位专属视角</span>
                </div>

                <div className={styles.headerActions}>
                    <div className={styles.notificationBubble}>
                        <span className={styles.icon}>🔔</span>
                        <span className={styles.pulseCount}>3</span>
                        <span className={styles.notifText}>条待处理授权</span>
                    </div>
                </div>
            </header>

            {/* Data Overview Cards with Number Ticker */}
            <section className={`animate-slide-up stagger-1 ${styles.statsGrid}`}>
                <div className={`glass-panel ${styles.statCard}`}>
                    <div className={styles.statLabel}>累计提取元素数量</div>
                    <div className={styles.statValue}>
                        <NumberTicker end={1284} /> <span className={styles.unit}>个</span>
                    </div>
                </div>

                <div className={`glass-panel ${styles.statCard}`}>
                    <div className={styles.statLabel}>已授权文创 SKU</div>
                    <div className={styles.statValue}>
                        <NumberTicker end={356} /> <span className={styles.unit}>款</span>
                    </div>
                </div>

                <div className={`glass-panel ${styles.statCard} ${styles.statHighlight}`}>
                    <div className={styles.statLabel}>平均授权周期</div>
                    <div className={`${styles.statValue} ${styles.timeHighlight}`}>
                        <NumberTicker end={2.8} isFloat={true} /> <span className={styles.unit}>天</span>
                        <span className={styles.statSubtag}>行业平均 45 天</span>
                    </div>
                </div>

                <div className={`glass-panel ${styles.statCard}`}>
                    <div className={styles.statLabel}>预估分润收益</div>
                    <div className={styles.statValue}>
                        <NumberTicker end={245000} prefix="¥" />
                    </div>
                </div>
            </section>

            {/* Main Content Area - Authorization Timeline Tracking */}
            <section className={`animate-slide-up stagger-2 ${styles.timelineSection} glass-panel`}>
                <header className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>文创产品授权流转追踪</h2>
                    <span className={styles.filterTag}>当前正在处理 (1)</span>
                </header>

                <div className={styles.timelineItem}>
                    <div className={styles.itemInfo}>
                        <h3>平遥县衙朱涂帆布袋</h3>
                        <p>申请人: 独立设计师 张维 <span className={styles.dateInfo}>| 提交于: 10小时前</span></p>
                    </div>

                    {/* Timeline Flow */}
                    <div className={styles.timeline}>
                        {/* Step 1 */}
                        <div className={`${styles.step} ${styles.stepCompleted}`}>
                            <div className={styles.stepCircle}>✓</div>
                            <div className={styles.stepTitle}>申请提交</div>
                            <div className={styles.stepTime}>09:00</div>
                        </div>

                        <div className={`${styles.stepLine} ${styles.lineCompleted}`}></div>

                        {/* Step 2 */}
                        <div className={`${styles.step} ${styles.stepCompleted}`}>
                            <div className={styles.stepCircle}>✓</div>
                            <div className={styles.stepTitle}>AI 查重比对通过</div>
                            <div className={styles.stepTime}>09:05</div>
                        </div>

                        <div className={`${styles.stepLine} ${styles.lineActive}`}></div>

                        {/* Step 3 - Active with Pulse */}
                        <div className={`${styles.step} ${styles.stepActive}`}>
                            <div className={styles.stepCirclePulse}>
                                <div className={styles.innerCircle}></div>
                            </div>
                            <div className={styles.stepTitle}>电子合同签署</div>
                            <div className={styles.stepTime}>等待签章...</div>
                            <button className={`btn-primary ${styles.signBtn}`}>进入签章</button>
                        </div>

                        <div className={styles.stepLine}></div>

                        {/* Step 4 */}
                        <div className={`${styles.step} ${styles.stepPending}`}>
                            <div className={styles.stepCircle}></div>
                            <div className={styles.stepTitle}>授权码发放</div>
                            <div className={styles.stepTime}>-</div>
                        </div>
                    </div>
                </div>

                {/* Recently Completed (Visual Context) */}
                <div className={`${styles.timelineItem} ${styles.itemCompleted}`}>
                    <div className={styles.itemInfo}>
                        <h3>大堂彩绘书签系列</h3>
                        <p>申请人: 文创工作室 <span className={styles.dateInfo}>| 完成于: 昨天</span></p>
                    </div>

                    <div className={styles.timeline}>
                        <div className={`${styles.step} ${styles.stepCompleted}`}>
                            <div className={styles.stepTitle}>申请提交</div>
                        </div>
                        <div className={`${styles.stepLine} ${styles.lineCompleted}`}></div>
                        <div className={`${styles.step} ${styles.stepCompleted}`}>
                            <div className={styles.stepTitle}>AI 查重比对通过</div>
                        </div>
                        <div className={`${styles.stepLine} ${styles.lineCompleted}`}></div>
                        <div className={`${styles.step} ${styles.stepCompleted}`}>
                            <div className={styles.stepTitle}>电子合同签署</div>
                        </div>
                        <div className={`${styles.stepLine} ${styles.lineCompleted}`}></div>
                        <div className={`${styles.step} ${styles.stepCompleted}`}>
                            <div className={styles.stepTitle}>授权码发放</div>
                        </div>
                    </div>

                    <div className={styles.authCode}>
                        授权码: <span>PY2026-000451X</span>
                    </div>
                </div>

            </section>
        </main>
    );
}
