import React, {Component} from "react";
import './directory.styles.scss';

import MenuItem from "../menu-item/menu-item.component";

interface Section {
    title: string
    imageUrl: string
    id: number
    size: string
}

interface State {
    sections: Section[]
}

class Directory extends Component<any, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            sections: [{
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                size: ''
            }, {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                size: ''
            }, {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                size: ''
            }, {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                id: 4,
                size: 'large'
            }, {
                title: 'men',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                id: 5,
                size: 'large'
            }]
        }
    }

    render() {
        return <div className={'directory-menu'}>
            {
                this.state.sections.map(({id, title, imageUrl, size}: Section) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                ))
            }
        </div>
    }
}

export default Directory;
