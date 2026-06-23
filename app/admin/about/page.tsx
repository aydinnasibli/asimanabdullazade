import { getAbout } from "@/lib/actions/about";
import AboutForm from "./AboutForm";

export const dynamic = "force-dynamic";

export default async function AdminAbout() {
  const about = await getAbout();

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
          About Page
        </h1>
      </div>
      <AboutForm initialData={about} />
    </div>
  );
}
