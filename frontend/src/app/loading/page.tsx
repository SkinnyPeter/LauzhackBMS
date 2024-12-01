import LoadingBar from "./component/loading";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
        <img src="/loading.png" alt="" />
        <div className="w-full max-w-md">
          <LoadingBar />
        </div>
      </div>
    </>
  );
}
