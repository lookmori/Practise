import UEditor from '@/components/Ueditor';
import { useState } from 'react';

export default () => {
  const [initData, setInitData] = useState('')
  console.log(window.UE);
  return (
      <UEditor initData={initData} />
  );
}