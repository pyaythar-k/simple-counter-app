export default function Title({ locked }) {
  return (
    <h1 className="text-slate-50 text-3xl p-5">
      {locked ? 'You need to buy PRO!' : '< ' + 'Simple Counter' + ' />'}
    </h1>
  );
}
