import { zodResolver } from '@hookform/resolvers/zod';
import * as Label from '@radix-ui/react-label';
import clsx from 'clsx';
import { NextPage } from 'next';
import { useId } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { Button } from '../../components/Button';
import { SelectField } from '../../components/Select';
import { draftState } from '../../features/atoms/createNewDraft';
import {
  defaultHeddle,
  defaultHeight,
  defaultTreadle,
  defaultWidth,
  DraftSchema,
  draftSchema,
  minHeddle,
  minHeight,
  mintreadle,
  minWidth,
} from '../../schemas/Draft';

const DraftPage: NextPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<DraftSchema>({
    resolver: zodResolver(draftSchema),
  });

  const setDraftState = useSetRecoilState(draftState);

  const widthDecimalFieldId = useId();
  const heightDecimalFieldId = useId();
  const treadleDecimalFieldId = useId();
  const heddleDecimalFieldId = useId();
  const tieUpPositionSelectFieldId = useId();
  const threadDirectionSelectFieldId = useId();

  return (
    <div className='bg-wd-white w-full h-full'>
      <form
        onSubmit={handleSubmit(d => {
          setDraftState(d);
        })}
      >
        <div className={clsx('grid')}>
          <Label.Root htmlFor={widthDecimalFieldId}>図の幅</Label.Root>
          <span>{errors.width?.message}</span>
          <input
            id={widthDecimalFieldId}
            type='number'
            defaultValue={defaultWidth}
            {...register('width', { required: true, valueAsNumber: true, min: minWidth })}
          />
        </div>
        <div className={clsx('grid')}>
          <Label.Root htmlFor={heightDecimalFieldId}>図の高さ</Label.Root>
          <span>{errors.height?.message}</span>
          <input
            id={heightDecimalFieldId}
            type='number'
            defaultValue={defaultHeight}
            {...register('height', { required: true, valueAsNumber: true, min: minHeight })}
          />
        </div>
        <div className={clsx('grid')}>
          <Label.Root htmlFor={treadleDecimalFieldId}>踏み木</Label.Root>
          <span>{errors.treadle?.message}</span>
          <input
            id={treadleDecimalFieldId}
            type='number'
            defaultValue={defaultTreadle}
            {...register('treadle', { required: true, valueAsNumber: true, min: mintreadle })}
          />
        </div>
        <div className={clsx('grid')}>
          <Label.Root htmlFor={heddleDecimalFieldId}>綜絖</Label.Root>
          <span>{errors.heddle?.message}</span>
          <input
            id={heddleDecimalFieldId}
            defaultValue={defaultHeddle}
            type='number'
            {...register('heddle', { required: true, valueAsNumber: true, min: minHeddle })}
          />
        </div>
        <div className={clsx('grid')}>
          <Label.Root htmlFor={tieUpPositionSelectFieldId}>Tie Up</Label.Root>
          <span>{errors.tieUpPosition?.message}</span>
          <Controller
            control={control}
            name='tieUpPosition'
            render={({ field: { onChange, value } }) => (
              <SelectField
                id={tieUpPositionSelectFieldId}
                label='TieUp'
                placeholder='Tie Upの向き'
                itemList={['LeftUp', 'RightUp', 'RightBottom', 'LeftBottom']}
                onValueChange={onChange}
                value={value}
              />
            )}
            rules={{ required: true }}
            defaultValue='LeftUp'
          />
        </div>
        <div className={clsx('grid')}>
          <Label.Root htmlFor={threadDirectionSelectFieldId}>糸の向き</Label.Root>
          <span>{errors.threadDirection?.message}</span>
          <Controller
            control={control}
            name='threadDirection'
            render={({ field: { onChange, value } }) => (
              <SelectField
                id={threadDirectionSelectFieldId}
                label='TieUp'
                placeholder='糸の向き'
                itemList={['Up', 'Down']}
                onValueChange={onChange}
                value={value}
              />
            )}
            rules={{ required: true }}
            defaultValue='Up'
          />
        </div>
        <Button
          type='submit'
          appearance='primary'
          className='font-bold'
        >
          作成開始
        </Button>
      </form>
    </div>
  );
};

export default DraftPage;
