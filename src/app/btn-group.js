export default function ButtonGroup({ children }) {
  return (
    <div className="flex flex-row w-full items-center justify-center gap-10 p-5">
      {children}
    </div>
  );
}
