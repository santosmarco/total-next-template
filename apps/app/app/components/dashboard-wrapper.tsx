"use client";

import { Button } from "@repo/design-system/components/ui/button";
import type { EmptyProps } from "@repo/design-system/components/ui/empty";
import { Empty } from "@repo/design-system/components/ui/empty";
import { ScrollArea } from "@repo/design-system/components/ui/scroll-area";
import { PlusIcon } from "lucide-react";

export type DashboardWrapperProps<T> = {
  readonly title: string;
  readonly items: readonly T[] | undefined;
  readonly renderItem: (item: T) => React.ReactNode;
  readonly onCreateClick: () => void;
  readonly empty?: EmptyProps;
  readonly children?: React.ReactNode;
};

export function DashboardWrapper<T>({
  title,
  items,
  renderItem,
  onCreateClick,
  empty,
  children,
}: DashboardWrapperProps<T>) {
  if (!items) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex-1 overflow-y-auto">
      <ScrollArea className="h-full">
        <div className="container mx-auto py-6">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="font-bold text-3xl">{title}</h1>

            <Button onClick={onCreateClick}>
              <PlusIcon className="h-4 w-4" /> Create
            </Button>
          </div>

          {!items || items.length === 0 ? (
            empty && <Empty {...empty} />
          ) : (
            <div className="grid gap-4">
              {items.map((item, index) => (
                <div key={index}>{renderItem(item)}</div>
              ))}
            </div>
          )}

          {children}
        </div>
      </ScrollArea>
    </main>
  );
}
