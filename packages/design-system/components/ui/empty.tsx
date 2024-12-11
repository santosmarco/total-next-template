"use client";

import { Slot } from "@radix-ui/react-slot";
import { Button } from "@repo/design-system/components/ui/button";
import { PlusIcon } from "lucide-react";

export type EmptyProps = {
  icon?: React.ReactNode;
  text?: string;
  actionLabel?: string;
  onAction?: () => void;
};

export function Empty({ text, icon, actionLabel, onAction }: EmptyProps) {
  return (
    <Button
      type="button"
      variant="outline"
      className="font-semibold w-full border-dashed text-center hover:bg-transparent hover:border-primary/50 p-12 flex items-center justify-center flex-col gap-2 h-auto"
    >
      {icon && (
        <div className="relative">
          <Slot className="!h-12 !w-12">{icon}</Slot>
          <PlusIcon className="!h-4 !w-4 absolute bottom-0 right-0" />
        </div>
      )}

      <span>{text}</span>
    </Button>
  );
}
