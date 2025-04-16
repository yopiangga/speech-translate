import imageLoad from "./../../assets/icon/load.svg";

export function LoadingComponent() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <img src={imageLoad} />
      <h1 className="text-center font-bold text-[32px] text-gray-900">
        Loading...
      </h1>
    </div>
  );
}
