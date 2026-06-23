"use client";

import { useState } from "react";
import Link from "next/link";

interface SortableItem {
  _id: string;
  title: string;
  year: string;
  subtitle?: string;
}

interface SortableListProps {
  items: SortableItem[];
  basePath: string;
  onReorder: (ids: string[]) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}

export default function SortableList({
  items: initialItems,
  basePath,
  onReorder,
  onDelete,
}: SortableListProps) {
  const [items, setItems] = useState(initialItems);
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [overIndex, setOverIndex] = useState<number | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);

  const handleDragStart = (index: number) => {
    setDragIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    setOverIndex(index);
  };

  const handleDrop = async (index: number) => {
    if (dragIndex === null || dragIndex === index) {
      setDragIndex(null);
      setOverIndex(null);
      return;
    }

    const updated = [...items];
    const [moved] = updated.splice(dragIndex, 1);
    updated.splice(index, 0, moved);
    setItems(updated);
    setDragIndex(null);
    setOverIndex(null);

    await onReorder(updated.map((item) => item._id));
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this item?")) return;
    setDeleting(id);
    await onDelete(id);
    setItems(items.filter((item) => item._id !== id));
    setDeleting(null);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {items.map((item, index) => (
        <div
          key={item._id}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDrop={() => handleDrop(index)}
          onDragEnd={() => {
            setDragIndex(null);
            setOverIndex(null);
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            padding: "14px 16px",
            border: "1px solid var(--rule)",
            background:
              overIndex === index && dragIndex !== index
                ? "var(--bg-warm)"
                : "transparent",
            opacity: dragIndex === index ? 0.5 : 1,
            cursor: "grab",
            transition: "background 0.1s",
          }}
        >
          {/* Drag handle */}
          <span style={{ color: "var(--ink-faint)", fontSize: 14, flexShrink: 0 }}>
            ☰
          </span>

          {/* Content */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <span
              style={{
                fontSize: 14,
                color: "var(--ink)",
                display: "block",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {item.title}
            </span>
            {item.subtitle && (
              <span style={{ fontSize: 11, color: "var(--ink-faint)" }}>
                {item.subtitle}
              </span>
            )}
          </div>

          {/* Year */}
          <span
            style={{
              fontSize: 11,
              color: "var(--ink-light)",
              flexShrink: 0,
            }}
          >
            {item.year}
          </span>

          {/* Actions */}
          <Link
            href={`${basePath}/${item._id}`}
            style={{
              fontSize: 10,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--ink-mid)",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            Edit
          </Link>
          <button
            onClick={() => handleDelete(item._id)}
            disabled={deleting === item._id}
            style={{
              fontSize: 10,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#c44",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              flexShrink: 0,
              opacity: deleting === item._id ? 0.5 : 1,
            }}
          >
            {deleting === item._id ? "…" : "Delete"}
          </button>
        </div>
      ))}

      {items.length === 0 && (
        <p style={{ fontSize: 13, color: "var(--ink-faint)", padding: "24px 0" }}>
          No items yet. Add your first one.
        </p>
      )}
    </div>
  );
}
