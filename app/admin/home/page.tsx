import { getHomeSettings } from "@/lib/actions/home";
import HomeForm from "./HomeForm";

export const dynamic = "force-dynamic";

export default async function AdminHome() {
  const settings = await getHomeSettings();

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <p
          style={{
            fontSize: 9,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--ink-light)",
            marginBottom: 12,
          }}
        >
          Manage
        </p>
        <h1
          className="font-display"
          style={{
            fontSize: "2rem",
            fontWeight: 300,
            fontStyle: "italic",
            color: "var(--ink)",
            letterSpacing: "-0.02em",
          }}
        >
          Home Page
        </h1>
      </div>
      <HomeForm initialData={settings} />
    </div>
  );
}
