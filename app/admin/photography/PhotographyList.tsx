"use client";

import SortableList from "@/components/admin/SortableList";

interface PhotographyItem {
  _id: string;
  title: string;
  year: string;
  count: string;
  format: string;
}

export default function PhotographyList({
  items,
  onReorder,
  onDelete,
}: {
  items: PhotographyItem[];
  onReorder: (ids: string[]) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}) {
  const mapped = items.map((item) => ({
    _id: item._id,
    title: item.title,
    year: item.year,
    subtitle: `${item.count} · ${item.format}`,
  }));

  return (
    <SortableList
      items={mapped}
      basePath="/admin/photography"
      onReorder={onReorder}
      onDelete={onDelete}
    />
  );
}
