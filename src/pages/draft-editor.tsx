import { clsx } from 'clsx';
import { NextPage } from 'next';

import { DraftEditor } from '../features/components/DraftEditor';
import { DraftForm } from '../features/components/DraftForm';

const DraftEditorPage: NextPage = () => {
  return (
    <>
      <DraftForm />

      <div className={clsx('h-[80vh]', 'overflow-scroll')}>
        <DraftEditor className={clsx('mx-5')} />
      </div>
    </>
  );
};

export default DraftEditorPage;
