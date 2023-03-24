import type { TooltipProps } from '@radix-ui/react-tooltip';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { clsx } from 'clsx';

type Props = {
  content: string;
} & TooltipProps;

const Tooltip = ({ children, content, open, defaultOpen, onOpenChange, ...props }: Props) => {
  return (
    <TooltipPrimitive.Provider
      delayDuration={0}
      disableHoverableContent
    >
      <TooltipPrimitive.Root
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
      >
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          side='top'
          align='center'
          {...props}
          className={clsx('rounded', 'bg-wd-white', 'select-none', 'py-3', 'px-4', 'shadow-xl')}
        >
          {content}
          <TooltipPrimitive.Arrow
            width={20}
            height={10}
            className={clsx('fill-wd-white')}
          />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

export { Tooltip };
