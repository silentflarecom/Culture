import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { AdminApiTester } from "./components/AdminApiTester";
import { Card } from "@/components/ui/Card";
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
                <h1 className={styles.title}>衙绘云契 · 系统管理后台</h1>
                <p className={styles.subtitle}>欢迎, 管理员 {session?.user?.name}</p>
            </header>

            {/* Top Stats */}
            <section className={styles.statsGrid}>
                <Card variant="glass" padding="md" className={styles.statCard}>
                    <div className={styles.statLabel}>总注册工匠</div>
                    <div className={styles.statValue}>{usersCount}</div>
                </Card>
                <Card variant="glass" padding="md" className={styles.statCard}>
                    <div className={styles.statLabel}>图腾提取次数</div>
                    <div className={styles.statValue}>{extractCount}</div>
                </Card>
                <Card variant="glass" padding="md" className={styles.statCard}>
                    <div className={styles.statLabel}>云契授权申请</div>
                    <div className={styles.statValue}>{authCount}</div>
                </Card>
            </section>

            <div className={styles.splitLayout}>
                {/* Pending Authorizations */}
                <Card variant="glass" className={styles.tableSection}>
                    <h2 className={styles.sectionTitle}>待签核契约 (人工审核)</h2>
                    {pendingAuths.length === 0 ? (
                        <p className={styles.emptyState}>卷帙清空，暂无待审契约</p>
                    ) : (
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>文创巧思</th>
                                    <th>寻源觅迹</th>
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
                                                <button className={styles.btnApprove}>赐准</button>
                                                <button className={styles.btnReject}>批驳</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </Card>

                {/* Recent Users */}
                <Card variant="glass" className={styles.tableSection}>
                    <h2 className={styles.sectionTitle}>新晋工匠</h2>
                    {recentUsers.length === 0 ? (
                        <p className={styles.emptyState}>暂无新工匠造访</p>
                    ) : (
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>名号</th>
                                    <th>职级</th>
                                    <th>入籍时辰</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentUsers.map((u) => (
                                    <tr key={u.id}>
                                        <td>
                                            <div style={{ fontWeight: 500 }}>{u.name || "未定名"}</div>
                                            <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{u.email}</div>
                                        </td>
                                        <td>
                                            <span className={u.role === "ADMIN" ? styles.roleAdmin : styles.roleUser}>
                                                {u.role === "ADMIN" ? "典史" : "工匠"}
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
                </Card>
            </div>
            <AdminApiTester />
        </main>
    );
}
