"use client";

import SortableList from "@/components/admin/SortableList";

interface FilmItem {
  _id: string;
  title: string;
  year: string;
  type: string;
  duration: string;
}

export default function FilmList({
  items,
  onReorder,
  onDelete,
}: {
  items: FilmItem[];
  onReorder: (ids: string[]) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}) {
  const mapped = items.map((item) => ({
    _id: item._id,
    title: item.title,
    year: item.year,
    subtitle: `${item.type} · ${item.duration}`,
  }));

  return (
    <SortableList
      items={mapped}
      basePath="/admin/film"
      onReorder={onReorder}
      onDelete={onDelete}
    />
  );
}
