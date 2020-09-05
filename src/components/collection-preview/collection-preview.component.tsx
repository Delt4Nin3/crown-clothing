import React from 'react';
import CollectionItem from "components/collection-item/collection-item.component";
import './collection-preview.styles.scss';
import { Item as ShopItem } from "interfaces";

interface Props {
  title: string
  items: ShopItem[]
}

class CollectionPreview extends React.Component<Props, any> {
  render() {
    return <div className={'collection-preview'}>
      <h1 className={'title'}>{this.props.title.toUpperCase()}</h1>
      <div className={'preview'}>
        {
          this.props.items
            .filter((item, idx) => idx < 4)
            .map((item) => {
              return <CollectionItem key={item.id} item={item}/>
            })
        }
      </div>
    </div>
  }
}

export default CollectionPreview;
