export const bankAccounts = (state) => state.homePage.assets.bankAccounts;
export const pfBalance = (state) => state.homePage.assets.pfBalance;
export const foodCardBalance = (state) => state.homePage.assets.foodcardBalance;

export const loans = (state) => state.homePage.liabilities.loans;
export const creditCardStatement = (state) =>
    state.homePage.liabilities.credit_card_statement;
export const incomeTax = (state) => state.homePage.liabilities.income_tax;

export const netWorth = (state) => state.homePage.headlines.networth;
export const totalAssets = (state) => state.homePage.headlines.total_assets;
export const liquidAssets = (state) => state.homePage.headlines.liquid_assets;
export const fixedAssets = (state) => state.homePage.headlines.fixed_assets;
export const totalLiability = (state) =>
    state.homePage.headlines.total_liability;
