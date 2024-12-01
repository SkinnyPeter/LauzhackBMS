import PieChartComponent from "./component/pie";
import Header from "./component/header";
import Navigation from "./component/navigation";
import BarChartComponent from "./component/bar";
import TimeSeriesChartComponent from "./component/time";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Navigation></Navigation>
      <div>
        <div className="bg-gray-100 h-screen">
          <div className="grid grid-cols-2">
            <div>
              {" "}
              <h1 className="text-8xl mx-8 py-12">Share of Voice</h1>
              <p className="text-gray-600 m-8">
                Percentage of total activity that a brand or company holds
                within its market compared to its competitors.
                <br></br>It is a crucial metric for understanding a brand’s
                visibility and presence in the market.
              </p>
            </div>
            <div className="p-4 h-screen flex items-center justify-center">
              <PieChartComponent />
            </div>
          </div>
        </div>

        <div className="bg-gray-100 h-screen">
          <div className="grid grid-cols-2">
            <div className="p-4 h-screen flex items-center justify-center">
              <BarChartComponent />
            </div>
            <div>
              {" "}
              <h1 className="text-8xl mx-8 py-12">Demand Volumes</h1>
              <p className="text-gray-600 m-8">
                Sell-in sales: pharmacies or hospitals purchases (includes BMS
                products and competitors) Represents the demand on a certain
                product based on an infinite supply, to measure the volume that
                could be sold.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 h-screen">
          <div className="grid grid-cols-2">
            <div>
              {" "}
              <h1 className="text-8xl mx-8 py-12">New Patient Share</h1>
              <p className="text-gray-600 m-8">
                Percentage of new patients receiving a specific drug within a
                defined market or indication.<br></br> Helps understand the adoption and
                penetration in the market of new treatments and services.
              </p>
            </div>
            <div className="p-4 h-screen flex items-center justify-center">
              <TimeSeriesChartComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
