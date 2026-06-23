import Link from "next/link";
import { getDesignProjects, deleteDesign, reorderDesign } from "@/lib/actions/design";
import DesignList from "./DesignList";

export const dynamic = "force-dynamic";

export default async function AdminDesign() {
  const projects = await getDesignProjects();

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: 32,
        }}
      >
        <div>
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
            Design
          </h1>
        </div>
        <Link
          href="/admin/design/new"
          style={{
            padding: "10px 20px",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            background: "var(--ink)",
            color: "var(--bg)",
            textDecoration: "none",
          }}
        >
          + Add New
        </Link>
      </div>

      <DesignList
        items={projects}
        onReorder={reorderDesign}
        onDelete={deleteDesign}
      />
    </div>
  );
}
