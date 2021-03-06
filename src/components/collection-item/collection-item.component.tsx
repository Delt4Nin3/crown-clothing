import React from 'react';
import CustomButton from "components/custom-button/custom-button.component";
import './collection-item.styles.scss'
import { connect } from "react-redux";
import { addItem } from "redux/cart";
import { Item } from "interfaces";

interface Props {
  item: Item

  addItem(item: Item): any
}

class CollectionItem extends React.Component<Props, any> {
  render() {
    return <div className={'collection-item'}>
      <div
        className={'image'}
        style={{
          backgroundImage: `url(${this.props.item.imageUrl})`
        }}
      />
      <div className={'collection-footer'}>
        <span className={'name'}>{this.props.item.name}</span>
        <span className={'price'}>{this.props.item.price}</span>
      </div>
      <CustomButton onClick={() => this.props.addItem(this.props.item)} inverted>Add to Cart</CustomButton>
    </div>
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  addItem: (item: Item) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
