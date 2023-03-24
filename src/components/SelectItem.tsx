import { CheckIcon } from '@radix-ui/react-icons';
import type { SelectItemProps } from '@radix-ui/react-select';
import * as Select from '@radix-ui/react-select';
import { clsx } from 'clsx';
import { ForwardedRef, forwardRef } from 'react';

const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, className, ...props }: SelectItemProps, forwardRef: ForwardedRef<HTMLDivElement>) => {
    return (
      <Select.Item
        {...props}
        className={clsx(
          'flex',
          'items-center',
          'h-6',
          'pl-6',
          'pr-9',
          'rounded',
          'relative',
          'select-none',
          'data-[highlighted]:outline-none',
          'data-[highlighted]:bg-wd-primary',
          'data-[highlighted]:text-wd-white',
          className
        )}
        ref={forwardRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator
          className={clsx('w-6', 'absolute', 'left-0', 'inline-flex', 'items-center', 'justify-center')}
        >
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

SelectItem.displayName = 'SelectItem';

export { SelectItem };
