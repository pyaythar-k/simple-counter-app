'use client';
import { useState } from 'react';
import Title from './components/title';
import CountLabel from './count-label';
import ButtonGroup from './btn-group';
import Button from './components/button';
import { PRO_LIMIT } from '@/util/constants';

export default function Home() {
  const [count, setCount] = useState(0);
  const locked = count >= PRO_LIMIT ? true : false;

  return (
    <div className="flex flex-col w-full lg:w-3/6 items-center min-h-screen justify-center mx-auto bg-slate-400 gap-10">
      <Title locked={locked} />
      <CountLabel count={count} />
      <ButtonGroup>
        <Button type="minus" setCount={setCount} locked={locked} />
        <Button type="reset" setCount={setCount} />
        <Button type="add" setCount={setCount} locked={locked} />
      </ButtonGroup>
    </div>
  );
}
