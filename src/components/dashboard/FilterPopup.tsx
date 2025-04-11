import { useState } from 'react';

export default function FilterPopup({setIsFilterOpen, onSubmitRequest}: {setIsFilterOpen: (isOpen: boolean) => void, onSubmitRequest: (request: string) => void}) {
    // Define a type for the financial metrics
    type FinancialMetric = string;

    // State variables with proper types
    const [allStocks, setAllStocks] = useState<boolean>(false);
    const [currentMetric, setCurrentMetric] = useState<FinancialMetric>("");
    const [selectedMetrics, setSelectedMetrics] = useState<FinancialMetric[]>(["stockPrice"]);
    const [stockTicker, setStockTicker] = useState<string>('');
    const [startYear, setStartYear] = useState<string>('2010');
    const [endYear, setEndYear] = useState<string>('present');

    const logApiRequest = (): void => {
        const params = new URLSearchParams();
        
        params.append('ticker', allStocks ? 'all_stocks' : stockTicker);
        params.append('start_date', startYear);
        params.append('end_date', endYear);
        
        selectedMetrics.forEach(metric => {
          params.append('metric', metric.toLowerCase());
        });
        
        // Once I get the API endpoints all figured out, create a config file in this proj where routes and other api details are stored and conveniently accessed/changed
        const apiUrl = `/v1/financial-data?${params.toString()}`;

        onSubmitRequest(apiUrl);
    };

    const formatMetricName = (metric: FinancialMetric): string => {
    return metric
        .replace(/([A-Z])/g, ' $1') // Insert a space before all capital letters
        .replace(/^./, function(str: string): string { 
        return str.toUpperCase(); 
        }); // Capitalize the first letter
    };

    const addMetric = (): void => {
    if (currentMetric && !selectedMetrics.includes(currentMetric)) {
        setSelectedMetrics([...selectedMetrics, currentMetric]);
        setCurrentMetric(""); // Reset the dropdown
    }
    };

    const removeMetric = (index: number): void => {
        const newMetrics = [...selectedMetrics];
        newMetrics.splice(index, 1);
        setSelectedMetrics(newMetrics);
    };

    return (
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex justify-center items-start overflow-y-auto pt-20 pb-10">
            <div className="bg-white w-[80%] text-black min-h-fit max-h-[90vh] flex flex-col p-8 mx-10 rounded-lg shadow-lg overflow-y-auto">
                <h1 className="text-3xl font-bold mb-8 text-center">Filter Options</h1>
                
                {/* Stock Ticker Filter */}
                <div className="mb-6">
                <h2 className="text-xl mb-3 font-semibold">Stock Selection</h2>
                <div className="flex items-center gap-4">
                    <div className="flex-1">
                    <label className="block text-sm font-medium mb-1">Stock Ticker</label>
                    <input 
                        type="text" 
                        placeholder="Enter ticker (e.g. AAPL)" 
                        className={`w-full p-2 border rounded ${allStocks ? 'bg-gray-100' : 'bg-white'}`}
                        disabled={allStocks}
                        value={stockTicker}
                        onChange={(e) => setStockTicker(e.target.value)}
                    />
                    </div>
                    <div className="flex items-center mt-6">
                    <input 
                        type="checkbox" 
                        id="allStocks" 
                        className="mr-2 h-5 w-5"
                        onChange={(e) => setAllStocks(e.target.checked)}
                    />
                    <label htmlFor="allStocks" className="text-sm font-medium">All Stocks</label>
                    </div>
                </div>
                </div>
                
                {/* Date Range Filter */}
                <div className="mb-8">
                <h2 className="text-xl mb-3 font-semibold">Date Range</h2>
                <div className="flex gap-6">
                    <div className="flex-1">
                    <label className="block text-sm font-medium mb-1">Start Year</label>
                    <select className="w-full p-2 border rounded" value={startYear} onChange={(e) => setStartYear(e.target.value)}>
                        {Array.from({ length: new Date().getFullYear() - 2009 }, (_, i) => ( 
                        <option key={i} value={2010 + i}>
                            {2010 + i}
                        </option>
                        ))}
                    </select>
                    </div>
                    
                    <div className="flex-1">
                    <label className="block text-sm font-medium mb-1">End Year</label>
                    <select className="w-full p-2 border rounded" value={endYear} onChange={(e) => setEndYear(e.target.value)}>
                        <option value="present">Present</option>
                        {Array.from({ length: new Date().getFullYear() - 2009 }, (_, i) => (
                        <option key={i} value={2010 + i}>
                            {2010 + i}
                        </option>
                        ))}
                    </select>
                    </div>
                </div>
                </div>
                
                <div className="mb-8">
                <h2 className="text-xl mb-3 font-semibold">Financial Metrics</h2>
                
                {/* Selected Metrics List */}
                <div className="mb-4">
                    {selectedMetrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between p-2 mb-2 bg-blue-50 border border-blue-200 rounded">
                        <span className="font-medium">{formatMetricName(metric)}</span>
                        <button 
                        onClick={() => removeMetric(index)}
                        className="text-red-500 hover:text-red-700"
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        </button>
                    </div>
                    ))}
                </div>
                
                {/* Metric Selection */}
                <div className="flex gap-3">
                    <select 
                    className="flex-1 p-2 border rounded"
                    value={currentMetric}
                    onChange={(e) => setCurrentMetric(e.target.value)}
                    >
                    <option value="" disabled>Select a financial metric</option>
                    <option value="totalRevenue">Total Revenue</option>
                    <option value="costOfRevenue">Cost of Revenue</option>
                    <option value="cogs">COGS</option>
                    <option value="grossProfit">Gross Profit</option>
                    <option value="operatingExpense">Operating Expense</option>
                    <option value="ebit">EBIT</option>
                    <option value="ebitda">EBITDA</option>
                    <option value="depreciation">Depreciation</option>
                    <option value="interestIncome">Interest Income</option>
                    <option value="interestExpense">Interest Expense</option>
                    <option value="netIncome">Net Income</option>
                    <option value="cashAndCashEquivalents">Cash and Cash Equivalents</option>
                    <option value="totalAssets">Total Assets</option>
                    <option value="totalLiabilities">Total Liabilities</option>
                    <option value="totalShareholderEquity">Total Shareholder Equity</option>
                    <option value="goodwill">Goodwill</option>
                    <option value="inventory">Inventory</option>
                    <option value="capitalExpenditures">Capital Expenditures</option>
                    <option value="operatingCashFlow">Operating Cash Flow</option>
                    <option value="stockPrice">Stock Price</option>
                    </select>
                    <button 
                    onClick={addMetric}
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 hover:shadow-md transition-all duration-200 whitespace-nowrap"
                    disabled={!currentMetric}
                    >
                    Add To Chart
                    </button>
                </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex justify-end gap-3 mt-[50px]">
                    <button 
                        onClick={() => setIsFilterOpen(false)} 
                        className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100 hover:border-gray-400 transition-all duration-200"
                    >
                        Cancel
                    </button>
                    <button 
                        onClick={() => {logApiRequest(); setIsFilterOpen(false);}} 
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
                    >
                        Apply Filters
                    </button>
                </div>
            </div>
        </div>
    )
}