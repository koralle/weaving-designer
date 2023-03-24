import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import * as Select from '@radix-ui/react-select';
import { clsx } from 'clsx';
import { FC, HTMLAttributes } from 'react';

import { SelectItem } from './SelectItem';

type Props = {
  id: string;
  label: string;
  itemList: string[];
  placeholder: string;
  value: string;
  onValueChange: (value: string) => void;
} & HTMLAttributes<HTMLDivElement>;

const SelectField: FC<Props> = ({ id, label, placeholder, itemList, value, onValueChange }: Props) => {
  const scrollButtonClassName = clsx('flex', 'items-center', 'bg-wd-white', 'cursor-defualt');

  return (
    <Select.Root
      value={value}
      onValueChange={onValueChange}
    >
      <Select.Trigger
        id={id}
        className={clsx(
          'h-8',
          'p-4',
          'gap-1',
          'inline-flex',
          'items-center',
          'justify-center',
          'bg-wd-white',
          'rounded'
        )}
      >
        <Select.Value
          placeholder={placeholder}
          aria-label={value}
        />
        <Select.Icon>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          position='popper'
          className={clsx('overflow-hidden', 'bg-wd-white', 'rounded', 'shadow-lg')}
        >
          <Select.ScrollUpButton className={scrollButtonClassName}>
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className='p-1'>
            <Select.Group>
              <Select.Label className={clsx('px-6', 'text-wd-secondary')}>{label}</Select.Label>
              {itemList.map(item => (
                <SelectItem
                  value={item}
                  key={item}
                >
                  {item}
                </SelectItem>
              ))}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className={scrollButtonClassName}>
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export { SelectField };
