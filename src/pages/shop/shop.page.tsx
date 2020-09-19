import React from "react";
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withSpinner } from 'components/withSpinner/withSpinner.component';
import CollectionsOverview from "components/collections-overview/collections-overview.component";
import Collection from "components/collection/collection.component";
import { firestore, convertCollectionSnapshotToMap } from "firebase/firebase.utils";
import { updateCollections } from "redux/shop";
import { RouteComponentProps } from "react-router";

interface State {
  loading: boolean
}

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview)
const CollectionWithSpinner = withSpinner(Collection)

class ShopPage extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      loading: true
    }
  }

  unsubscribeFromSnapshot = () => {
  }

  componentDidMount() {
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection('shop');
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({loading: false}, () => console.log(this.state));
      // console.dir(collectionsMap);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
  }

  render() {
    const {match} = this.props;
    const {loading} = this.state;
    return <div className={'shop-page'}>
      <Route
        exact
        path={`${match.path}`}
        render={(props: RouteComponentProps<any>) => {
          return <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>
        }}
      />
      <Route
        path={`${match.path}/:categoryId`}
        render={(props: RouteComponentProps<any>) => {
          return <CollectionWithSpinner isLoading={loading} {...props}/>
        }}/>
    </div>
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  updateCollections: (collectionsMap: any) => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
