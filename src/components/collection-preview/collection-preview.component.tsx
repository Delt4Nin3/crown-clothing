import React from 'react';
import CollectionItem from "../collection-item/collection-item.component";
import './collection-preview.styles.scss';

interface CollectionPreviewProps {
  title: string
  items: ShopItem[]
}

interface ShopItem {
  id: number
  name: string
  imageUrl: string
  price: number
}

class CollectionPreview extends React.Component<CollectionPreviewProps, any> {
  render() {
    return <div className={'collection-preview'}>
      <h1 className={'title'}>{this.props.title.toUpperCase()}</h1>
      <div className={'preview'}>
        {
          this.props.items
            .filter((item, idx) => idx < 4)
            .map((item) => {
              return <CollectionItem key={item.id} item={item} />
            })
        }
      </div>
    </div>
  }
}

export default CollectionPreview;
