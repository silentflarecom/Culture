import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import styles from "./page.module.css";

export default async function AdminDashboard() {
    const session = await getServerSession(authOptions);

    // Fetch real data from the DB
    const usersCount = await prisma.user.count();
    const recentUsers = await prisma.user.findMany({
        orderBy: { createdAt: "desc" },
        take: 5,
    });

    const extractCount = await prisma.extraction.count();

    const authCount = await prisma.authorization.count();
    const pendingAuths = await prisma.authorization.findMany({
        where: { status: "PENDING_REVIEW" },
        include: { user: true },
        orderBy: { createdAt: "asc" }
    });

    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>系统管理后台</h1>
                <p className={styles.subtitle}>欢迎, 管理员 {/* @ts-ignore */}{session?.user?.name}</p>
            </header>

            {/* Top Stats */}
            <section className={styles.statsGrid}>
                <div className={`glass-panel ${styles.statCard}`}>
                    <div className={styles.statLabel}>总注册用户</div>
                    <div className={styles.statValue}>{usersCount}</div>
                </div>
                <div className={`glass-panel ${styles.statCard}`}>
                    <div className={styles.statLabel}>AI 提取元素次数</div>
                    <div className={styles.statValue}>{extractCount}</div>
                </div>
                <div className={`glass-panel ${styles.statCard}`}>
                    <div className={styles.statLabel}>全网授权申请数</div>
                    <div className={styles.statValue}>{authCount}</div>
                </div>
            </section>

            <div className={styles.splitLayout}>
                {/* Pending Authorizations */}
                <section className={`glass-panel ${styles.tableSection}`}>
                    <h2 className={styles.sectionTitle}>待处理的授权申请 (人工审核)</h2>
                    {pendingAuths.length === 0 ? (
                        <p className={styles.emptyState}>暂无需要审核的授权申请</p>
                    ) : (
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>申请文创</th>
                                    <th>提取来源</th>
                                    <th>申请人</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pendingAuths.map((auth) => (
                                    <tr key={auth.id}>
                                        <td>{auth.designName}</td>
                                        <td>{auth.origin}</td>
                                        <td>{auth.user.name || auth.user.email}</td>
                                        <td>
                                            <div className={styles.actionGroup}>
                                                <button className={styles.btnApprove}>通过</button>
                                                <button className={styles.btnReject}>驳回</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </section>

                {/* Recent Users */}
                <section className={`glass-panel ${styles.tableSection}`}>
                    <h2 className={styles.sectionTitle}>新注册用户</h2>
                    {recentUsers.length === 0 ? (
                        <p className={styles.emptyState}>暂无用户注册</p>
                    ) : (
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>名称</th>
                                    <th>角色</th>
                                    <th>注册时间</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentUsers.map((u) => (
                                    <tr key={u.id}>
                                        <td>
                                            <div style={{ fontWeight: 500 }}>{u.name || "未命名"}</div>
                                            <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{u.email}</div>
                                        </td>
                                        <td>
                                            <span className={u.role === "ADMIN" ? styles.roleAdmin : styles.roleUser}>
                                                {u.role}
                                            </span>
                                        </td>
                                        <td style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                                            {u.createdAt.toLocaleDateString('zh-CN')}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </section>
            </div>
        </main>
    );
}
