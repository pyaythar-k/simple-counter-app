import { PRO_LIMIT } from '@/util/constants';

export default function Button({ type, setCount, locked }) {
  const handleClick = () => {
    setCount((prev) => {
      if (type === 'minus') {
        const newCount = prev - 1;
        if (newCount < 0) return 0;
        return newCount;
      } else if (type === 'add') {
        const newCount = prev + 1;
        if (newCount > PRO_LIMIT) return;
        return newCount;
      } else {
        return 0;
      }
    });
  };

  return (
    <button
      disabled={locked}
      onClick={handleClick}
      className={`w-2/6 p-5 bg-slate-900 text-slate-50 rounded-lg text-3xl ${
        locked && 'bg-slate-300'
      }`}
    >
      {type === 'add' && '👉🏻'}
      {type === 'minus' && '👈🏻'}
      {type === 'reset' && '✊🏻'}
    </button>
  );
}
