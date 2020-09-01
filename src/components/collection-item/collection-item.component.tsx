import React from 'react';
import CustomButton from "components/custom-button/custom-button.component";
import './collection-item.styles.scss'

interface CollectionItemProps {
  name: string
  imageUrl: string
  price: number
}

class CollectionItem extends React.Component<CollectionItemProps, any> {
  render() {
    return <div className={'collection-item'}>
      <div
        className={'image'}
        style={{
          backgroundImage: `url(${this.props.imageUrl})`
        }}
      />
      <div className={'collection-footer'}>
        <span className={'name'}>{this.props.name}</span>
        <span className={'price'}>{this.props.price}</span>
      </div>
      <CustomButton inverted>Add to Cart</CustomButton>
    </div>
  }
}

export default CollectionItem;
