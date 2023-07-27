const HomeFigure = ({ title, span }) => {
  const defaultSize =
    "flex items-center justify-center border-2 border-indigo-600 bg-red-500 text-center p-5 " +
    span;
  console.log(defaultSize);
  return (
    <div className={defaultSize}>
      <div className="font-mono text-7xl p-5">{title}</div>
    </div>
  );
};

export default HomeFigure;
