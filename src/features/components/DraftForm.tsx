import { zodResolver } from '@hookform/resolvers/zod';
import * as Label from '@radix-ui/react-label';
import clsx from 'clsx';
import type { FC } from 'react';
import { useId } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';

import { Button } from '../../components/Button';
import { SelectField } from '../../components/Select';
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
import { draftState } from '../atoms/createNewDraft';

const DraftForm: FC = () => {
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

  const inputLabelClassName = clsx('pl-2', 'text-left');
  const inputClassName = clsx('w-[200px]', 'text-right');

  return (
    <div className='bg-wd-white w-full h-full'>
      <form
        onSubmit={handleSubmit(d => {
          setDraftState(d);
        })}
        className={clsx('flex', 'gap-2', 'items-center', 'px-5')}
      >
        <div className={clsx('grid', 'gap-3')}>
          <div className={clsx('flex', 'gap-3')}>
            <div className={clsx('grid')}>
              <Label.Root
                htmlFor={widthDecimalFieldId}
                className={inputLabelClassName}
              >
                図の幅
              </Label.Root>
              <span>{errors.width?.message}</span>
              <input
                id={widthDecimalFieldId}
                type='number'
                defaultValue={defaultWidth}
                {...register('width', { required: true, valueAsNumber: true, min: minWidth })}
                className={inputClassName}
              />
            </div>
            <div className={clsx('grid')}>
              <Label.Root
                htmlFor={heightDecimalFieldId}
                className={inputLabelClassName}
              >
                図の高さ
              </Label.Root>
              <span>{errors.height?.message}</span>
              <input
                id={heightDecimalFieldId}
                type='number'
                defaultValue={defaultHeight}
                {...register('height', { required: true, valueAsNumber: true, min: minHeight })}
                className={inputClassName}
              />
            </div>
            <div className={clsx('grid')}>
              <Label.Root
                htmlFor={treadleDecimalFieldId}
                className={inputLabelClassName}
              >
                踏み木
              </Label.Root>
              <span>{errors.treadle?.message}</span>
              <input
                id={treadleDecimalFieldId}
                type='number'
                defaultValue={defaultTreadle}
                {...register('treadle', { required: true, valueAsNumber: true, min: mintreadle })}
                className={inputClassName}
              />
            </div>
            <div className={clsx('grid')}>
              <Label.Root
                htmlFor={heddleDecimalFieldId}
                className={inputLabelClassName}
              >
                綜絖
              </Label.Root>
              <span>{errors.heddle?.message}</span>
              <input
                id={heddleDecimalFieldId}
                defaultValue={defaultHeddle}
                type='number'
                {...register('heddle', { required: true, valueAsNumber: true, min: minHeddle })}
                className={inputClassName}
              />
            </div>
          </div>
          <div className={clsx('flex', 'gap-3')}>
            <div className={clsx('grid')}>
              <Label.Root
                htmlFor={tieUpPositionSelectFieldId}
                className={inputLabelClassName}
              >
                Tie Up
              </Label.Root>
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
              <Label.Root
                htmlFor={threadDirectionSelectFieldId}
                className={inputLabelClassName}
              >
                糸の向き
              </Label.Root>
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
          </div>
        </div>
        <Button
          type='submit'
          appearance='primary'
          className='font-bold ml-auto'
        >
          作成開始
        </Button>
      </form>
    </div>
  );
};

export { DraftForm };
