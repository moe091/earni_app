export const MAIN_FIELDS = [
    "ticker",
    "endDate",
    "totalRevenue",
    "costOfRevenue",
    "cogs",
    "grossProfit",
    "operatingExpense",
    "ebit",
    "ebitda",
    "depreciation",
    "interestIncome",
    "interestExpense",
    "netIncome",
    "cashAndCashEquivalents",
    "totalAssets",
    "totalLiabilities",
    "totalShareholderEquity",
    "goodwill",
    "inventory",
    "capitalExpenditures",
    "operatingCashFlow"
] as const;

export const FIELDS = [
    "ticker",
    "endDate",
    "costOfRevenue",
    "cogs",
    "depreciation",
    "ebit",
    "ebitda",
    "grossProfit",
    "incomeBeforeTax",
    "incomeTaxExpense",
    "interestExpense",
    "interestIncome",
    "investmentIncomeNet",
    "netIncome",
    "netInterestIncome",
    "nonInterestIncome",
    "operatingExpense",
    "otherNonOperatingIncome",
    "researchAndDevelopment",
    "sellingGeneralAndAdministrative",
    "totalRevenue",
    "cashAndCashEquivalents",
    "commonStock",
    "commonStockSharesOutstanding",
    "currentAccountsPayable",
    "currentDebt",
    "currentNetReceivables",
    "deferredRevenue",
    "goodwill",
    "intangibleAssets",
    "inventory",
    "investments",
    "longTermDebt",
    "longTermInvestments",
    "propertyPlantAndEquipment",
    "retainedEarnings",
    "shortTermDebt",
    "shortTermInvestments",
    "totalAssets",
    "totalCurrentAssets",
    "totalCurrentLiabilities",
    "totalLiabilities",
    "totalNonCurrentAssets",
    "totalNonCurrentLiabilities",
    "totalShareholderEquity",
    "treasuryStock",
    "capitalExpenditures",
    "cashFlowFromFinancing",
    "cashFlowFromInvestment",
    "changeInCashAndCashEquivalents",
    "changeInExchangeRate",
    "changeInInventory",
    "changeInOperatingLiabilities",
    "changeInOperatingAssets",
    "changeInReceivables",
    "depreciationDepletionAndAmortization",
    "dividendPayout",
    "dividendPayoutCommonStock",
    "dividendPayoutPreferredStock",
    "operatingCashFlow",
    "paymentsForOperatingActivities",
    "paymentsForRepurchaseOfCommonStock",
    "paymentsForRepurchaseOfPreferredStock",
    "paymentsForRepurchaseOfEquity",
    "proceedsFromIssuanceOfCommonStock",
    "proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet",
    "proceedsFromIssuanceOfPreferredStock",
    "proceedsFromRepurchaseOfEquity",
    "proceedsFromSaleOfTreasuryStock",
    "proceedsFromOperatingActivities",
    "proceedsFromRepaymentsOfShortTermDebt",
    "profitLoss"] as const;

export const MAP = {
    "ticker": "ticker",
    "endDate": "fiscaldateending",
    "costOfRevenue": "costofrevenue",
    "cogs": "costofgoodsandservicessold",
    "depreciation": "depreication",
    "ebit": "ebit",
    "ebitda": "ebitda",
    "grossProfit": "grossprofit",
    "incomeBeforeTax": "incomebeforetax",
    "incomeTaxExpense": "incometaxexpense",
    "interestExpense": "interestexpense",
    "interestIncome": "interestincome",
    "investmentIncomeNet": "investmentincomenet",
    "netIncome": "netincome",
    "netInterestIncome": "netinterestincome",
    "nonInterestIncome": "noninterestincome",
    "operatingExpense": "operatingexpense",
    "otherNonOperatingIncome": "othernonoperatingincome",
    "researchAndDevelopment": "researchanddevelopment",
    "sellingGeneralAndAdministrative": "sellinggeneralandadministrative",
    "totalRevenue": "totalrevenue",
    "cashAndCashEquivalents": "cashandcashequivalentsatcarryingvalue",
    "commonStock": "commonstock",
    "commonStockSharesOutstanding": "commonstocksharesoutstanding",
    "currentAccountsPayable": "currentaccountspayable",
    "currentDebt": "currentdebt",
    "currentNetReceivables": "currentnetreceivables",
    "deferredRevenue": "deferredrevenue",
    "goodwill": "goodwill",
    "intangibleAssets": "intangibleassets",
    "inventory": "inventory",
    "investments": "investments",
    "longTermDebt": "longtermdebt",
    "longTermInvestments": "longterminvestments",
    "propertyPlantAndEquipment": "propertyplantequipment",
    "retainedEarnings": "retainedearnings",
    "shortTermDebt": "shorttermdebt",
    "shortTermInvestments": "shortterminvestments",
    "totalAssets": "totalassets",
    "totalCurrentAssets": "totalcurrentassets",
    "totalCurrentLiabilities": "totalcurrentliabilities",
    "totalLiabilities": "totalliabilities",
    "totalNonCurrentAssets": "totalnoncurrentassets",
    "totalNonCurrentLiabilities": "totalnoncurrentliabilities",
    "totalShareholderEquity": "totalshareholderequity",
    "treasuryStock": "treasurystock",
    "capitalExpenditures": "capitalexpenditures",
    "cashFlowFromFinancing": "cashflowfromfinancing",
    "cashFlowFromInvestment": "cashflowfrominvestment",
    "changeInCashAndCashEquivalents": "changeincashandcashequivalents",
    "changeInExchangeRate": "changeinexchangerate",
    "changeInInventory": "changeininventory",
    "changeInOperatingLiabilities": "changeinoperatingliabilities",
    "changeInOperatingAssets": "changeinoperatingassets",
    "changeInReceivables": "changeinreceivables",
    "depreciationDepletionAndAmortization": "depreciationdepletionandamortization",
    "dividendPayout": "dividendpayout",
    "dividendPayoutCommonStock": "dividendpayoutcommonstock",
    "dividendPayoutPreferredStock": "dividendpayoutpreferredstock",
    "operatingCashFlow": "operatingcashflow",
    "paymentsForOperatingActivities": "paymentsforoperatingactivities",
    "paymentsForRepurchaseOfCommonStock": "paymentsforrepurchaseofcommonstock",
    "paymentsForRepurchaseOfPreferredStock": "paymentsforrepurchaseofpreferredstock",
    "paymentsForRepurchaseOfEquity": "paymentsforrepurchaseofequity",
    "proceedsFromIssuanceOfCommonStock": "proceedsfromissuanceofcommonstock",
    "proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet": "proceedsfromissuanceoflongtermdebtandcapitalsecuritiesnet",
    "proceedsFromIssuanceOfPreferredStock": "proceedsfromissuanceofpreferredstock",
    "proceedsFromRepurchaseOfEquity": "proceedsfromrepurchaseofequity",
    "proceedsFromSaleOfTreasuryStock": "proceedsfromsaleoftreasurystock",
    "proceedsFromOperatingActivities": "proceedsfromoperatingactivities",
    "proceedsFromRepaymentsOfShortTermDebt": "proceedsfromrepaymentsofshorttermdebt",
    "profitLoss": "profitloss",
} as const;


export interface EarningsReport {
    ticker: string;
    endDate: Date;
    costOfRevenue: number;
    cogs: number;
    depreciation: number;
    ebit: number;
    ebitda: number;
    grossProfit: number;
    incomeBeforeTax: number;
    incomeTaxExpense: number;
    interestExpense: number;
    interestIncome: number;
    investmentIncomeNet: number;
    netIncome: number;
    netInterestIncome: number;
    nonInterestIncome: number;
    operatingExpense: number;
    otherNonOperatingIncome: number;
    researchAndDevelopment: number;
    sellingGeneralAndAdministrative: number;
    totalRevenue: number;
    cashAndCashEquivalents: number;
    commonStock: number;
    commonStockSharesOutstanding: number;
    currentAccountsPayable: number;
    currentDebt: number;
    currentNetReceivables: number;
    deferredRevenue: number;
    goodwill: number;
    intangibleAssets: number;
    inventory: number;
    investments: number;
    longTermDebt: number;
    longTermInvestments: number;
    propertyPlantAndEquipment: number;
    retainedEarnings: number;
    shortTermDebt: number;
    shortTermInvestments: number;
    totalAssets: number;
    totalCurrentAssets: number;
    totalCurrentLiabilities: number;
    totalLiabilities: number;
    totalNonCurrentAssets: number;
    totalNonCurrentLiabilities: number;
    totalShareholderEquity: number;
    treasuryStock: number;
    capitalExpenditures: number;
    cashFlowFromFinancing: number;
    cashFlowFromInvestment: number;
    changeInCashAndCashEquivalents: number;
    changeInExchangeRate: number;
    changeInInventory: number;
    changeInOperatingLiabilities: number;
    changeInOperatingAssets: number;
    changeInReceivables: number;
    depreciationDepletionAndAmortization: number;
    dividendPayout: number;
    dividendPayoutCommonStock: number;
    dividendPayoutPreferredStock: number;
    operatingCashFlow: number;
    paymentsForOperatingActivities: number;
    paymentsForRepurchaseOfCommonStock: number;
    paymentsForRepurchaseOfPreferredStock: number;
    paymentsForRepurchaseOfEquity: number;
    proceedsFromIssuanceOfCommonStock: number;
    proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet: number;
    proceedsFromIssuanceOfPreferredStock: number;
    proceedsFromRepurchaseOfEquity: number;
    proceedsFromSaleOfTreasuryStock: number;
    proceedsFromOperatingActivities: number;
    proceedsFromRepaymentsOfShortTermDebt: number;
    profitLoss: number;
}