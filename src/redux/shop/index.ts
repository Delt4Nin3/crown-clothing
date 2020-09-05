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

const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

const selectCollection = (collectionUrlParam: any) =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  )

const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
)


export { shopReducer, selectCollections, selectCollection, selectCollectionsForPreview };
