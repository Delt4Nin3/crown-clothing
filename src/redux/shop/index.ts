import { SHOP_DATA } from "data/shop.data";
import { createSelector } from "reselect";

const INITIAL_STATE = {
  collections: SHOP_DATA,
}

const shopReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
}

const selectShop = (state: any) => state.shop;

const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

export { shopReducer, selectShopCollections };
