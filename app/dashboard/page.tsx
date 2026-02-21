import Link from "next/link";
import styles from "./page.module.css";

export default function DashboardPage() {
    return (
        <main className={styles.container}>
            <header className={`animate-fade-in ${styles.header}`}>
                <div>
                    <h1 className={styles.title}>合规授权控制台</h1>
                    <p className={styles.subtitle}>直连全国官府古建管理单位，实现 3 个工作日极速维权与商用授权</p>
                </div>
                <Link href="/studio" className="btn-secondary">
                    + 新建 AI 提取设计
                </Link>
            </header>

            {/* Stats Summary */}
            <section className={`animate-slide-up stagger-1 ${styles.statsGrid}`}>
                <div className={`glass-panel ${styles.statCard}`}>
                    <div className={`${styles.statIcon} ${styles.blueIcon}`}>📄</div>
                    <div>
                        <div className={styles.statValue}>12</div>
                        <div className={styles.statLabel}>已提交申请总数</div>
                    </div>
                </div>
                <div className={`glass-panel ${styles.statCard}`}>
                    <div className={`${styles.statIcon} ${styles.greenIcon}`}>✓</div>
                    <div>
                        <div className={styles.statValue}>8</div>
                        <div className={styles.statLabel}>已通过确权授权</div>
                    </div>
                </div>
                <div className={`glass-panel ${styles.statCard}`}>
                    <div className={`${styles.statIcon} ${styles.goldIcon}`}>⏳</div>
                    <div>
                        <div className={styles.statValue}>4</div>
                        <div className={styles.statLabel}>内乡县衙审批中</div>
                    </div>
                </div>
            </section>

            {/* Table Area */}
            <section className={`animate-slide-up stagger-2 ${styles.tableContainer} glass-panel`}>
                <div className={styles.tableHeader}>
                    <h2 className={styles.tableTitle}>最近申请及审批进度</h2>
                </div>

                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>文创设计项 / 提取来源</th>
                            <th>申请确权人</th>
                            <th>管理单位</th>
                            <th>状态</th>
                            <th>审批追踪 (3天闭环)</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Row 1 - Pending */}
                        <tr>
                            <td>
                                <div style={{ fontWeight: 500, color: "var(--text-primary)" }}>国潮云龙手机壳</div>
                                <div style={{ fontSize: "0.85rem" }}>元素提取: 内乡现衙正脊</div>
                            </td>
                            <td>独立设计师 User</td>
                            <td>内乡县衙博物馆</td>
                            <td>
                                <span className={`${styles.badge} ${styles.badgePending}`}>审批中 (Day 2)</span>
                            </td>
                            <td>
                                <div className={styles.processFlow}>
                                    <div className={`${styles.step} ${styles.stepDone}`}></div>
                                    <div className={`${styles.stepLine} ${styles.lineActive}`}></div>
                                    <div className={`${styles.step} ${styles.stepActive}`}></div>
                                    <div className={styles.stepLine}></div>
                                    <div className={styles.step}></div>
                                </div>
                                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "4px" }}>
                                    专家合规复核中
                                </div>
                            </td>
                            <td>
                                <button className="btn-secondary" style={{ padding: "0.4rem 0.8rem", fontSize: "0.85rem" }}>
                                    查看回执
                                </button>
                            </td>
                        </tr>

                        {/* Row 2 - Approved */}
                        <tr>
                            <td>
                                <div style={{ fontWeight: 500, color: "var(--text-primary)" }}>平遥县衙朱涂帆布袋</div>
                                <div style={{ fontSize: "0.85rem" }}>元素提取: 平遥县衙大堂彩绘</div>
                            </td>
                            <td>独立设计师 User</td>
                            <td>平遥古城管委会</td>
                            <td>
                                <span className={`${styles.badge} ${styles.badgeApproved}`}>已授权</span>
                            </td>
                            <td>
                                <div className={styles.processFlow}>
                                    <div className={`${styles.step} ${styles.stepDone}`}></div>
                                    <div className={`${styles.stepLine} ${styles.stepDone}`}></div>
                                    <div className={`${styles.step} ${styles.stepDone}`}></div>
                                    <div className={`${styles.stepLine} ${styles.stepDone}`}></div>
                                    <div className={`${styles.step} ${styles.stepDone}`}></div>
                                </div>
                                <div style={{ fontSize: "0.75rem", color: "var(--success)", marginTop: "4px" }}>
                                    已获得商用数字版权
                                </div>
                            </td>
                            <td>
                                <button className="btn-primary" style={{ padding: "0.4rem 0.8rem", fontSize: "0.85rem" }}>
                                    下载授权书
                                </button>
                            </td>
                        </tr>

                        {/* Row 3 - Approved */}
                        <tr>
                            <td>
                                <div style={{ fontWeight: 500, color: "var(--text-primary)" }}>惊堂木U盘 / 漆画</div>
                                <div style={{ fontSize: "0.85rem" }}>元素提取: 霍州署惊堂木构造</div>
                            </td>
                            <td>独立设计师 User</td>
                            <td>霍州署文物保管所</td>
                            <td>
                                <span className={`${styles.badge} ${styles.badgeApproved}`}>已授权</span>
                            </td>
                            <td>
                                <div className={styles.processFlow}>
                                    <div className={`${styles.step} ${styles.stepDone}`}></div>
                                    <div className={`${styles.stepLine} ${styles.stepDone}`}></div>
                                    <div className={`${styles.step} ${styles.stepDone}`}></div>
                                    <div className={`${styles.stepLine} ${styles.stepDone}`}></div>
                                    <div className={`${styles.step} ${styles.stepDone}`}></div>
                                </div>
                                <div style={{ fontSize: "0.75rem", color: "var(--success)", marginTop: "4px" }}>
                                    已获得商用数字版权
                                </div>
                            </td>
                            <td>
                                <button className="btn-primary" style={{ padding: "0.4rem 0.8rem", fontSize: "0.85rem" }}>
                                    下载授权书
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </main>
    );
}
