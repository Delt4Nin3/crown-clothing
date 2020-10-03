import React from "react";
import { Route } from 'react-router-dom';
import { createStructuredSelector } from "reselect";
import { connect } from 'react-redux';
import { withSpinner } from 'components/withSpinner/withSpinner.component';
import CollectionsOverview from "components/collections-overview/collections-overview.component";
import Collection from "components/collection/collection.component";
import { fetchCollectionsStartAsync, selectIsCollectionFetching, selectIsCollectionsLoaded } from "redux/shop";
import { RouteComponentProps } from "react-router";

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview)
const CollectionWithSpinner = withSpinner(Collection)

class ShopPage extends React.Component<any, any> {

  componentDidMount() {
    const {fetchCollectionsStart} = this.props;
    fetchCollectionsStart();
  }

  render() {
    const {match, isCollectionsLoaded} = this.props;
    return <div className={'shop-page'}>
      <Route
        exact
        path={`${match.path}`}
        render={(props: RouteComponentProps<any>) => {
          return <CollectionsOverviewWithSpinner isLoading={isCollectionsLoaded} {...props}/>
        }}
      />
      <Route
        path={`${match.path}/:categoryId`}
        render={(props: RouteComponentProps<any>) => {
          return <CollectionWithSpinner isLoading={isCollectionsLoaded} {...props}/>
        }}/>
    </div>
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStartAsync())
});

const mapStateToProps = createStructuredSelector({
  isFetchingCollections: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
