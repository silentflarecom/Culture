"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import styles from "../page.module.css";

export function AdminApiTester() {
    const [apiKey, setApiKey] = useState("");
    const [prompt, setPrompt] = useState("提取内乡县衙仪门正脊的色彩与纹理特征");
    const [response, setResponse] = useState<unknown>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleTest = async () => {
        if (!apiKey) {
            setError("请输入 Gemini Nano / Banana API Key");
            return;
        }

        setLoading(true);
        setError("");
        setResponse(null);

        try {
            // Calls the real extraction route to test our API integration
            const res = await fetch("/api/admin/test-ai", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ apiKey, prompt })
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "API 请求失败");
            }

            setResponse(data);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("未知错误");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card variant="glass" className={styles.tableSection} style={{ marginTop: "var(--spacing-xl)" }}>
            <h2 className={styles.sectionTitle}>
                <span style={{ marginRight: "0.5rem" }}>⚡</span>
                Gemini Nano / Banana API 连通性测试
            </h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: "var(--spacing-md)", fontSize: "0.95rem" }}>
                典史可在此处试演底层 AI 模型。连通之后，前台匠人于『灵感工作台』之祈请，方能上达天听、幻化实相，而非仅见幻影。
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "800px" }}>
                <div>
                    <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>
                        API Key (Session 临时存储)
                    </label>
                    <input
                        type="password"
                        value={apiKey}
                        onChange={e => setApiKey(e.target.value)}
                        placeholder="AIzaSy..."
                        className={styles.apiInput}
                    />
                </div>

                <div>
                    <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>
                        测试意境 / 图腾祈请
                    </label>
                    <textarea
                        value={prompt}
                        onChange={e => setPrompt(e.target.value)}
                        rows={3}
                        className={styles.apiTextarea}
                    />
                </div>

                <Button
                    variant="primary"
                    onClick={handleTest}
                    disabled={loading}
                    style={{ alignSelf: "flex-start" }}
                >
                    {loading ? "灵光流转中..." : "发端祈请"}
                </Button>

                {error && (
                    <div style={{ color: "var(--error)", background: "rgba(211, 61, 61, 0.1)", padding: "0.8rem", borderRadius: "8px" }}>
                        {error}
                    </div>
                )}

                {response !== null && (
                    <div style={{ background: "rgba(255,255,255,0.6)", padding: "1rem", borderRadius: "8px", border: "1px solid var(--glass-border)" }}>
                        <h4 style={{ color: "var(--success)", marginBottom: "0.5rem", fontFamily: "var(--font-serif)" }}>神明启示 - 幻彩结语 (JSON)</h4>
                        <pre style={{ overflowX: "auto", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                            {JSON.stringify(response as Record<string, unknown>, null, 2)}
                        </pre>
                    </div>
                )}
            </div>
        </Card>
    );
}
