/* For the multipel bargraph (DEMO below link) - I need the data in the following format.

https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/demo/column-basic/
 
[ { name: 'Price Earnings Ratio',
    data: [ 36.26081084473453, 25.820308429811867 ] },
  { name: 'Price Sales Ratio',
    data: [ 14.212475340073304, 10.224912425230132 ] },
  { name: 'Enterprise Value Multiple',
    data: [ 24.798254391534392, 19.570748189321208 ] } ]

 */

const data = {
	"2017-12": {
		liquidityMeasurementRatios: {
			currentRatio: 12.915691489361702,
			quickRatio: 12.644414893617022,
			cashRatio: 2.1486702127659574,
			daysofSalesOutstanding: 52.36218729245074,
			daysofInventoryOutstanding: 0,
			operatingCycle: 52.36218729245074,
			daysofPayablesOutstanding: 25.43087642097543,
			cashConversionCycle: 26.93131087147531
		},
		profitabilityIndicatorRatios: {
			grossProfitMargin: 0.8658401593978304,
			operatingProfitMargin: 0.4969620938184144,
			pretaxProfitMargin: 0.5065800801908839,
			netProfitMargin: 0.39195139350109465,
			effectiveTaxRate: 0.22627949888316987,
			returnOnAssets: 0.18851450475604561,
			returnOnEquity: 0.21431934039033182,
			returnOnCapitalEmployed: 0.2925189440839978,
			nIperEBT: 0.7737205011168301,
			eBTperEBIT: 0.8717037037037038,
			eBITperRevenue: 0.5811379234004871
		},
		debtRatios: {
			debtRatio: 0.12040367232975249,
			debtEquityRatio: 0.13688514667706833,
			longtermDebtToCapitalization: 0,
			totalDebtToCapitalization: 0,
			interestCoverageRatio: 3937.5,
			cashFlowToDebtRatio: null,
			companyEquityMultiplier: 1.1368851466770684
		},
		operatingPerformanceRatios: {
			fixedAssetTurnover: 2.9628306974710297,
			assetTurnover: 0.4809639865600303
		},
		cashFlowIndicatorRatios: {
			operatingCashFlowSalesRatio: 0.5956755958969818,
			freeCashFlowOperatingCashFlowRatio: 0,
			cashFlowCoverageRatios: null,
			shortTermCoverageRatios: null,
			capitalExpenditureCoverageRatios: 3.5966136937472153,
			dividendpaidAndCapexCoverageRatios: 3.5966136937472153,
			dividendPayoutRatio: 0
		},
		investmentValuationRatios: {
			priceBookValueRatio: 7.771393062262096,
			priceCashFlowRatio: 23.859421869838126,
			priceEarningsRatio: 36.26081084473453,
			priceEarningsToGrowthRatio: 36.26081084473453,
			priceSalesRatio: 14.212475340073304,
			dividendYield: 0,
			enterpriseValueMultiple: 24.798254391534392,
			priceFairValue: 7.771393062262096
		}
	},
	"2018-12": {
		liquidityMeasurementRatios: {
			currentRatio: 7.193957531708707,
			quickRatio: 6.94043038335471,
			cashRatio: 1.4278181559070828,
			daysofSalesOutstanding: 49.594451807013144,
			daysofInventoryOutstanding: 0,
			operatingCycle: 49.594451807013144,
			daysofPayablesOutstanding: 31.993586317477284,
			cashConversionCycle: 17.60086548953586
		},
		profitabilityIndicatorRatios: {
			grossProfitMargin: 0.8324617643898421,
			operatingProfitMargin: 0.4461656936136681,
			pretaxProfitMargin: 0.4541889036140263,
			netProfitMargin: 0.39600272216053584,
			effectiveTaxRate: 0.12811009029612397,
			returnOnAssets: 0.2271765261881768,
			returnOnEquity: 0.2628407051243953,
			returnOnCapitalEmployed: 0.328675664603563,
			nIperEBT: 0.871889909703876,
			eBTperEBIT: 0.8543372073437763,
			eBITperRevenue: 0.5316272072781977
		},
		debtRatios: {
			debtRatio: 0.1356874267984466,
			debtEquityRatio: 0.15698883830399277,
			longtermDebtToCapitalization: 0,
			totalDebtToCapitalization: 0.011642660776803966,
			interestCoverageRatio: 3298.3333333333335,
			cashFlowToDebtRatio: 29.539858728557014,
			companyEquityMultiplier: 1.1569888383039928
		},
		operatingPerformanceRatios: {
			fixedAssetTurnover: 2.2622047563100107,
			assetTurnover: 0.5736741529167608
		},
		cashFlowIndicatorRatios: {
			operatingCashFlowSalesRatio: 0.5242666284609048,
			freeCashFlowOperatingCashFlowRatio: 0,
			cashFlowCoverageRatios: 29.539858728557014,
			shortTermCoverageRatios: 29.539858728557014,
			capitalExpenditureCoverageRatios: 2.1037729069349624,
			dividendpaidAndCapexCoverageRatios: 2.1037729069349624,
			dividendPayoutRatio: 0
		},
		investmentValuationRatios: {
			priceBookValueRatio: 6.7866280742211185,
			priceCashFlowRatio: 19.503267746122837,
			priceEarningsRatio: 25.820308429811867,
			priceEarningsToGrowthRatio: 25.820308429811867,
			priceSalesRatio: 10.224912425230132,
			dividendYield: 0,
			enterpriseValueMultiple: 19.570748189321208,
			priceFairValue: 6.7866280742211185
		}
	}
};

const getYSeriesData = obj => {
	let set1,
		set2,
		set3 = {};
	let yAxisSeries = [];
	let data = [];
	finalResult = [];

	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			yAxisSeries.push([key, obj[key].investmentValuationRatios]);
		}
	}

	const priceBookValueRatio = yAxisSeries.map(i => i[1].priceBookValueRatio);
	const arrPriceEarningRatio = yAxisSeries.map(i => i[1].priceEarningsRatio);
	const arrPriceSalesRatio = yAxisSeries.map(i => i[1].priceSalesRatio);
	const arrEnterpriseValueMultiple = yAxisSeries.map(
		i => i[1].enterpriseValueMultiple
	);
	const priceEarningsToGrowthRatio = yAxisSeries.map(
		i => i[1].priceEarningsToGrowthRatio
	);

	set1 = { name: "Price to Book-Value Ratio", data: priceBookValueRatio };
	set2 = { name: "Price Earnings Ratio", data: arrPriceEarningRatio };
	set3 = { name: "Price Sales Ratio", data: arrPriceSalesRatio };
	set4 = {
		name: "Enterprise Value Multiple",
		data: arrEnterpriseValueMultiple
	};
	set5 = {
		name: "PriceEarnings To GrowthRatio",
		data: priceEarningsToGrowthRatio
	};

	return [set1, set2, set3, set4, set5];
};

console.log(getYSeriesData(data));
