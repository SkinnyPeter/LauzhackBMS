import Header from "./component/header";
import Navigation from "./component/navigation";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Navigation></Navigation>
      <div>
        <div className=" h-screen">
          <div className="">
            <div>
              <h1 className="text-8xl mx-8">Sales</h1>
              <p className="text-gray-600 m-8">
                Forecasting volumes in red dashed line and the actual data in
                black line
              </p>
            </div>
            <div className="h-screen flex items-center justify-center">
              <div className="-mt-80">
                <img src="/graphs/g1.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" h-screen mb-10">
        <div className="">
          <div>
            <h1 className="text-8xl mx-8">Error</h1>
            <p className="text-gray-600 m-8">
            Difference between the actual data and the forecasting model data
            </p>
          </div>
          <div className="h-screen flex items-center justify-center">
            <div className="-mt-80">
              <img src="/graphs/g2.jpg" alt="" width="800"/>
            </div>
          </div>
        </div>
      </div>

      <div className=" h-screen">
        <div className="">
          <div>
            <h1 className="text-8xl mx-8">Cumulative difference</h1>
            <p className="text-gray-600 m-8">
            Cumulative difference from the point where the model is giving his prediction
            </p>
          </div>
          <div className="h-screen flex items-center justify-center">
            <div className="-mt-80">
              <img src="/graphs/g3.jpg" alt="" width="800"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
