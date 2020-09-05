import React from 'react';
import { connect } from "react-redux";
import './collection.styles.scss';
import { selectCollection } from "redux/shop";
import CollectionItem from "../collection-item/collection-item.component";
import { Item } from "interfaces";

class Collection extends React.Component<any, any> {

  render() {
    const {title, items} = this.props.collection;
    return <div className={'collection-page'}>
      <h2 className={'title'}>{title}</h2>
      <div className={'items'}>
      {
        items.map((item: Item) => {
          return <CollectionItem key={item.id} item={item}/>
        })
      }
      </div>
    </div>
  }
}

const mapStateToProps = (state: any, ownProps: any) => ({
  collection: selectCollection(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(Collection)
