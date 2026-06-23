import { createPhotography } from "@/lib/actions/photography";
import PhotographyForm from "../PhotographyForm";

export default function NewPhotography() {
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
          Photography
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
          New Series
        </h1>
      </div>
      <PhotographyForm onSave={createPhotography} />
    </div>
  );
}
