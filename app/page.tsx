import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Elegantly Spaced Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>

        <div className={`container ${styles.heroContent}`}>
          {/* Left: Typography driven by "Leave Blank" (留白) philosophy */}
          <div className={`${styles.heroText} animate-slide-up stagger-1`}>
            <h1 className={styles.title}>
              衙绘云契 <br />
              <span className={styles.titleHighlight}>阳光下的古建筑与数字文创</span>
            </h1>
            <p className={styles.subtitle}>
              让千年古建的木构与图腾，在云端重焕新生。<br />
              智能提取专属徽章，赋予文创产品灵魂的数字协定。
            </p>
            <div className={styles.ctaGroup}>
              <Link href="/studio">
                <Button variant="primary" size="lg">进入工坊</Button>
              </Link>
              <Link href="/admin/dashboard">
                <Button variant="secondary" size="lg">文创流转与确权</Button>
              </Link>
            </div>
          </div>

          {/* Right: Bright Version of Scanner Animation */}
          <div className={`${styles.heroGraphic} animate-fade-in stagger-2`}>
            <div className={styles.graphicContainer}>
              <div className={styles.graphicOriginal}></div>
              <div className={styles.graphicVector}></div>
              <div className={styles.graphicScanner}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional Scroll (画卷) Layout Features */}
      <section className={styles.scrollSection}>
        <div className="container" style={{ position: 'relative' }}>
          {/* Central Silk Thread (Timeline) */}
          <div className={styles.silkThread}></div>

          <header className={styles.sectionHeader}>
            <h2 className="animate-slide-up">国风雅韵，数字孪生</h2>
            <p className="animate-slide-up stagger-1">将传统建筑语汇转化为现代数字资产</p>
          </header>

          <div className={styles.scrollLayout}>
            {/* Scroll Feature 1: Image Left, Text Right */}
            <div className={`${styles.scrollItem} ${styles.scrollItemLeft} animate-slide-up`}>
              <div className={styles.scrollGraphic}>
                <div className={styles.watermarkNumber}>01</div>
                <Card variant="glass" padding="none" className={styles.graphicCard}>
                  <div className={styles.graphicPlaceholder}>
                    <span className={styles.iconCircleLg}>🌸</span>
                  </div>
                </Card>
              </div>
              <div className={styles.scrollText}>
                <h3>古建图腾 AI 精准释义</h3>
                <p>上传官署建筑构件照片，AI 自动进行语义解构，提取核心图案并转化为可无限放大的矢量图腾，彻底解放设计师的描线时间。</p>
              </div>
            </div>

            {/* Scroll Feature 2: Text Left, Image Right */}
            <div className={`${styles.scrollItem} ${styles.scrollItemRight} animate-slide-up`}>
              <div className={styles.scrollText}>
                <h3>自动溯源与云端确权</h3>
                <p>从灵感到实物，所有提取步骤与成品设计自动存证，一键生成合法商用授权书，保护原生文化版权。</p>
              </div>
              <div className={styles.scrollGraphic}>
                <div className={styles.watermarkNumber}>02</div>
                <Card variant="glass" padding="none" className={styles.graphicCard}>
                  <div className={styles.graphicPlaceholder}>
                    <span className={styles.iconCircleLg}>📜</span>
                  </div>
                </Card>
              </div>
            </div>

            {/* Scroll Feature 3: Image Left, Text Right */}
            <div className={`${styles.scrollItem} ${styles.scrollItemLeft} animate-slide-up`}>
              <div className={styles.scrollGraphic}>
                <div className={styles.watermarkNumber}>03</div>
                <Card variant="glass" padding="none" className={styles.graphicCard}>
                  <div className={styles.graphicPlaceholder}>
                    <div className={styles.visualRays}>
                      <div className={styles.ray}></div>
                      <div className={styles.ray}></div>
                      <div className={styles.ray}></div>
                    </div>
                  </div>
                </Card>
              </div>
              <div className={styles.scrollText}>
                <h3>轻巧的衍生品车间</h3>
                <p>即拖即用的 3D 样机映射，三分钟即可预览手机壳、折扇、茶盏上的图腾实际效果，立等可取的使用体验。</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
