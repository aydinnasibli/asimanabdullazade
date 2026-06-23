import { createDesign } from "@/lib/actions/design";
import DesignForm from "../DesignForm";

export default function NewDesign() {
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
          Design
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
          New Project
        </h1>
      </div>
      <DesignForm onSave={createDesign} />
    </div>
  );
}
