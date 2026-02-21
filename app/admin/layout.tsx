import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(authOptions);

    // @ts-ignore
    if (!session || session.user?.role !== "ADMIN") {
        redirect("/login");
    }

    return (
        <div style={{ minHeight: "100vh", backgroundColor: "var(--bg-primary)" }}>
            {children}
        </div>
    );
}
