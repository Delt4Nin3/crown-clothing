import React from "react";
import CollectionPreview from "components/collection-preview/collection-preview.component";
import { selectShopCollections } from 'redux/shop';
import { connect } from "react-redux";
import { Collection } from "interfaces";
import { createStructuredSelector } from "reselect";

class ShopPage extends React.Component<any, any> {
  render() {
    return <div className={'shop-page'}>
      {
        this.props.collections.map((collection: Collection) => {
          return <CollectionPreview key={collection.id} {...collection}/>
        })
      }
    </div>
  }
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
})

export default connect(mapStateToProps)(ShopPage);
