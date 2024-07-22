import DynamicTable from "./Dashboard/DynamicTable";
import Performance from "./Dashboard/Performance";
import Sparklines from "./Dashboard/Sparklines";
import TechnicalSupport from "./Dashboard/TechnicalSupport";
import TimeLine from "./Dashboard/TimeLine";

const App = () => {
  return (
    <>
      <Performance />
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-8">
        <TechnicalSupport />
        <TimeLine />
      </div>
      <Sparklines />
      <DynamicTable />
    </>
  );
};

export default App;
