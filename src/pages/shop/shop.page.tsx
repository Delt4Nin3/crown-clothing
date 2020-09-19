import React from "react";
import { Route } from 'react-router-dom';
import CollectionsOverview from "components/collections-overview/collections-overview.component";
import Collection from "components/collection/collection.component";
import { connect } from 'react-redux';
import { firestore, convertCollectionSnapshotToMap } from "firebase/firebase.utils";
import { updateCollections } from "redux/shop";

class ShopPage extends React.Component<any, any> {
  unsubscribeFromSnapshot = null

  componentDidMount() {
    const collectionRef = firestore.collection('shop');
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      this.props.updateCollections(collectionsMap);
      // console.dir(collectionsMap);
    })
  }

  render() {
    return <div className={'shop-page'}>
      <Route exact path={`${this.props.match.path}`} component={CollectionsOverview}/>
      <Route path={`${this.props.match.path}/:categoryId`} component={Collection}/>
    </div>
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  updateCollections: (collectionsMap: any) => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
