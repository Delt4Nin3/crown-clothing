import React from "react";
import CollectionPreview from "components/collection-preview/collection-preview.component";
import SHOP_DATA from "data/shop.data";

interface State {
  collections: Collection[]
}

interface Collection {
  id: number
  title: string
  routeName: string
  items: Item[]
}

interface Item {
  id: number
  name: string
  imageUrl: string
  price: number
}

class ShopPage extends React.Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const {collections} = this.state;
    return <div className={'shop-page'}>
      {
        collections.map(({id, ...collectionProps}) => {
          return <CollectionPreview key={id} {...collectionProps}/>
        })
      }
    </div>
  }
}

export default ShopPage;
