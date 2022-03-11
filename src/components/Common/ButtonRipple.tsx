export default function ButtonRipple() {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 -ml-[75%] -mt-[75%] -z-10 rounded-full bg-white opacity-[0.04] w-[150%] h-[150%] cursor-default" />
      <div className="absolute top-1/2 left-1/2 -ml-[100%] -mt-[100%] -z-10 rounded-full bg-white opacity-[0.03] w-[200%] h-[200%] cursor-default" />
      <div className="absolute top-1/2 left-1/2 -ml-[125%] -mt-[125%] -z-10 rounded-full bg-white opacity-[0.02] w-[250%] h-[250%] cursor-default" />
    </>
  );
}
