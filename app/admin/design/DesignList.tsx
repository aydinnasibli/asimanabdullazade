"use client";

import SortableList from "@/components/admin/SortableList";

interface DesignItem {
  _id: string;
  title: string;
  year: string;
  category: string;
}

export default function DesignList({
  items,
  onReorder,
  onDelete,
}: {
  items: DesignItem[];
  onReorder: (ids: string[]) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}) {
  const mapped = items.map((item) => ({
    _id: item._id,
    title: item.title,
    year: item.year,
    subtitle: item.category,
  }));

  return (
    <SortableList
      items={mapped}
      basePath="/admin/design"
      onReorder={onReorder}
      onDelete={onDelete}
    />
  );
}
