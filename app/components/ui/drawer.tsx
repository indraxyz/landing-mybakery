import * as React from "react";
import { Drawer as VaulDrawer } from "vaul";
import { cn } from "~/lib/utils";

const Drawer = VaulDrawer.Root;

const DrawerTrigger = VaulDrawer.Trigger;

const DrawerPortal = VaulDrawer.Portal;

const DrawerClose = VaulDrawer.Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof VaulDrawer.Overlay>,
  React.ComponentPropsWithoutRef<typeof VaulDrawer.Overlay>
>(({ className, ...props }, ref) => (
  <VaulDrawer.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
));
DrawerOverlay.displayName = "DrawerOverlay";

interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof VaulDrawer.Content> {
  side?: "left" | "right" | "top" | "bottom";
}

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof VaulDrawer.Content>,
  DrawerContentProps
>(({ className, children, side = "bottom", ...props }, ref) => {
  const sideClasses = {
    bottom: "inset-x-0 bottom-0 rounded-t-[10px]",
    top: "inset-x-0 top-0 rounded-b-[10px]",
    left: "inset-y-0 left-0 rounded-r-[10px]",
    right: "inset-y-0 right-0 rounded-l-[10px]",
  };

  return (
    <DrawerPortal>
      <DrawerOverlay />
      <VaulDrawer.Content
        ref={ref}
        className={cn(
          "fixed z-50 flex flex-col border-l border-border shadow-xl drawer-background",
          side === "bottom" && "mt-24 h-auto rounded-t-[10px]",
          side === "top" && "mb-24 h-auto rounded-b-[10px]",
          (side === "left" || side === "right") && "w-full max-w-sm h-full",
          sideClasses[side],
          className
        )}
        {...props}
      >
        {side === "bottom" && (
          <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
        )}
        {children}
      </VaulDrawer.Content>
    </DrawerPortal>
  );
});
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof VaulDrawer.Title>,
  React.ComponentPropsWithoutRef<typeof VaulDrawer.Title>
>(({ className, ...props }, ref) => (
  <VaulDrawer.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
DrawerTitle.displayName = "DrawerTitle";

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof VaulDrawer.Description>,
  React.ComponentPropsWithoutRef<typeof VaulDrawer.Description>
>(({ className, ...props }, ref) => (
  <VaulDrawer.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DrawerDescription.displayName = "DrawerDescription";

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
