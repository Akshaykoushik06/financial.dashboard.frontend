// selectors for homePage state
export const getNetworth = (state) => state.homePage.netWorth;
export const getAssets = (state) => state.homePage.assets;
export const getLiabilities = (state) => state.homePage.liabilities;

// assets
// foodcardbalance
export const getFoodCardBalance = (state) =>
    state.homePage.assets.foodCard.value;
