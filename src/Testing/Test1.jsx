export default function Widget() {
  return (
    <div className="bg-card text-card-foreground p-8 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Portfolio Performance</h2>
        <button className="border border-border text-foreground px-4 py-2 rounded-full hover:bg-muted hover:text-muted-foreground transition-colors">
          View All
        </button> 
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex items-center space-x-4 p-4 bg-muted rounded-lg shadow-sm">
          <div className="bg-yellow-500 text-white p-4 rounded-full">
            <img
              undefinedhidden="true"
              alt="cash-deposits"
              src="https://openui.fly.dev/openui/24x24.svg?text=💰"
            />
          </div>
          <div>
            <h3 className="text-muted-foreground">Cash Deposits</h3>
            <p className="text-3xl font-bold">1,7M</p>
            <p className="text-destructive-foreground text-sm">
              ▼ 54.1% less earnings
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4 p-4 bg-muted rounded-lg shadow-sm">
          <div className="bg-red-500 text-white p-4 rounded-full">
            <img
              undefinedhidden="true"
              alt="invested-dividends"
              src="https://openui.fly.dev/openui/24x24.svg?text=📈"
            />
          </div>
          <div>
            <h3 className="text-muted-foreground">Invested Dividends</h3>
            <p className="text-3xl font-bold">9M</p>
            <p className="text-primary text-sm">Grow Rate: ▲ 14.1%</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 p-4 bg-muted rounded-lg shadow-sm">
          <div className="bg-green-500 text-white p-4 rounded-full">
            <img
              undefinedhidden="true"
              alt="capital-gains"
              src="https://openui.fly.dev/openui/24x24.svg?text=🏢"
            />
          </div>
          <div>
            <h3 className="text-muted-foreground">Capital Gains</h3>
            <p className="text-3xl font-bold">$563</p>
            <p className="text-accent text-sm">Increased by ▲ 7.35%</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/80 transition-colors">
          View Complete Report
        </button>
      </div>
    </div>
  );
}
