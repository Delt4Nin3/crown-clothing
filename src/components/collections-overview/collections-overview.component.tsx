import React from "react";
import { selectCollectionsForPreview } from 'redux/shop';
import { connect } from "react-redux";
import { Collection } from "interfaces";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "components/collection-preview/collection-preview.component";
import './collections-overview.styles.scss'


class CollectionsOverview extends React.Component<any, any> {
  render() {
    console.log(this.props)
    return <div className={'collections-overview'}>
      {
        this.props.collections.map((collection: Collection) => {
          return <CollectionPreview key={collection.id} {...collection}/>
        })
      }
    </div>
  }
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
})

export default connect(mapStateToProps)(CollectionsOverview);
