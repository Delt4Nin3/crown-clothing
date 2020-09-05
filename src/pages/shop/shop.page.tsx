import React from "react";
import { Route } from 'react-router-dom';
import CollectionsOverview from "components/collections-overview/collections-overview.component";
import Collection from "components/collection/collection.component";

class ShopPage extends React.Component<any, any> {
  render() {
    return <div className={'shop-page'}>
      <Route exact path={`${this.props.match.path}`} component={CollectionsOverview}/>
      <Route path={`${this.props.match.path}/:categoryId`} component={Collection}/>
    </div>
  }
}

export default ShopPage;
