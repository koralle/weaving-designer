import { clsx } from 'clsx';
import { useRouter } from 'next/router';
import { FC, HTMLAttributes, SyntheticEvent } from 'react';

type Props = HTMLAttributes<HTMLDivElement>;

const Header: FC<Props> = ({ ...props }: Props) => {
  const router = useRouter();

  const onClick = async (e: SyntheticEvent) => {
    e.preventDefault();
    await router.push('/');
  };

  return (
    <div {...props}>
      <h1 className={clsx('h-12', 'w-full', 'flex', 'items-center')}>
        <button
          type='button'
          onClick={onClick}
        >
          Weaving Designer
        </button>
      </h1>
    </div>
  );
};

export { Header };
