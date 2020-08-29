import React from "react";
import MenuItem from "components/menu-item/menu-item.component";
import SECTIONS_DATA from "data/sections.data";
import './directory.styles.scss';

interface Section {
  title: string
  imageUrl: string
  id: number
  size: string,
  linkUrl: string
}

interface State {
  sections: Section[]
}

class Directory extends React.Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      sections: SECTIONS_DATA
    }
  }

  render() {
    return <div className={'directory-menu'}>
      {
        this.state.sections.map(({id, ...sectionProps}: Section) => (
          <MenuItem key={id} {...sectionProps}/>
        ))
      }
    </div>
  }
}

export default Directory;
