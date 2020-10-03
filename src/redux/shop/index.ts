import { createSelector } from "reselect";
import { convertCollectionSnapshotToMap, firestore } from "firebase/firebase.utils";

const ShopActionTypes = {
  FETCH_COLLECTIONS_START: 'FETCH_COLLECTIONS_START',
  FETCH_COLLECTIONS_FAILURE: 'FETCH_COLLECTIONS_FAILURE',
  FETCH_COLLECTIONS_SUCCESS: 'FETCH_COLLECTIONS_SUCCESS'
}

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  isLoading: false,
  errorMessage: undefined
}

// interface State {
//   collections: object
//   isFetching: boolean,
//   isLoading: boolean,
//   errorMessage?: string
// }

const shopReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
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
    collections => collections ? collections[collectionUrlParam] : null
  )

const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
)

const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !shop.collections
)

const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

const fetchCollectionsSuccess = (collectionsMap: any) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

const fetchCollectionsError = (errorMessage: any) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

const fetchCollectionsStartAsync = () => {
  return (dispatch: any) => {
    const collectionRef = firestore.collection('shop');
    dispatch(fetchCollectionsStart());

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    }).catch(error => dispatch(fetchCollectionsError(error.message)))
  }
}


export {
  shopReducer,
  selectCollections,
  selectCollection,
  selectCollectionsForPreview,
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
  fetchCollectionsStartAsync
};
