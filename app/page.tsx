import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Background Animated Elements */}
      <div className={styles.bgOrbs}></div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="animate-slide-up stagger-1">
          <h1 className={styles.heroTitle}>
            官府古建数字文创 <br />
            <span className="text-gradient">AI 设计平台</span>
          </h1>
          <p className={styles.heroSubtitle}>
            一键提取古建之美，极速生成文创大作。<br />
            上传官府建筑照片，AI 智能捕捉雕花纹样与流光色彩，从设计到合规上架，仅需 3 个工作日。
          </p>
        </div>

        <div className={`animate-fade-in stagger-2 ${styles.ctaGroup}`}>
          <Link href="/studio" className="btn-primary animate-pulse">
            进入 AI 设计工坊
          </Link>
          <Link href="/dashboard" className="btn-secondary">
            查看合规授权闭环
          </Link>
        </div>
      </section>

      {/* The Core Shift: Pain Point vs Solution */}
      <section className="section container">
        <header className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>重塑古建文创生态</h2>
          <p className={styles.sectionSubtitle}>专攻“设计难、授权慢、同质化”痛点，聚焦官府建筑单一品类做专做精</p>
        </header>

        <div className={styles.comparison}>
          <div className={`${styles.comBox} ${styles.painPoint} glass-panel animate-slide-up stagger-3`}>
            <h3 className={styles.comTitle}>
              <span className="text-gradient">痛点 (Pain Points)</span>
            </h3>
            <ul className={styles.comList}>
              <li>传统设计依赖专业团队，成本高昂</li>
              <li>繁琐的线下审批，平均授权周期1-2个月</li>
              <li>缺乏针对性，市场文创产品同质化严重</li>
              <li>文化机构闭门造车，缺乏轻量化工具</li>
            </ul>
          </div>

          <div className={`${styles.comBox} ${styles.solution} glass-panel animate-slide-up stagger-4`}>
            <h3 className={styles.comTitle}>
              <span className="text-gradient">解决方案 (Our Solution)</span>
            </h3>
            <ul className={styles.comList}>
              <li>零门槛轻量级工具，人人皆可是文创设计师</li>
              <li>全线上合规授权，最快 <strong style={{ color: "var(--success)" }}>3个工作日</strong> 过审</li>
              <li>智能提取专属元素，保障独特性与在地文化</li>
              <li>一键生成手机壳、笔记本等高颜值实物图</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className={styles.featuresSection}>
        <div className="container">
          <header className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>平台核心能力</h2>
          </header>

          <div className={styles.grid}>
            <div className={`${styles.card} glass-panel`}>
              <div className={styles.cardIcon}>🏛️</div>
              <h3 className={styles.cardTitle}>元素智能提取</h3>
              <p className={styles.cardDesc}>
                采用 Google Nano 边缘大模型，精准识别县衙、府衙照片中的匾额字体、飞檐脊兽、木雕纹理与古建色彩，零干扰提取核心元素。
              </p>
            </div>

            <div className={`${styles.card} glass-panel`}>
              <div className={styles.cardIcon}>✨</div>
              <h3 className={styles.cardTitle}>一键文创生成</h3>
              <p className={styles.cardDesc}>
                无需专业设计技能。将提取的美学元素自动映射至 3D 产品模型（手机壳、帆布袋、明信片），即刻预览高品质实物效果。
              </p>
            </div>

            <div className={`${styles.card} glass-panel`}>
              <div className={styles.cardIcon}>⚖️</div>
              <h3 className={styles.cardTitle}>合规授权闭环</h3>
              <p className={styles.cardDesc}>
                直连管理单位。提交设计后，通过平台专属审批通道，由机构在线签章确权，大幅缩短确权路径，保护创作者收益。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer minimal */}
      <footer style={{ textAlign: "center", padding: "var(--spacing-xl)", color: "var(--text-muted)" }}>
        <p>© 2026 官府古建AI数字文创设计平台 | 挑战杯 & 计算机设计大赛专用项目</p>
      </footer>
    </main>
  );
}
