import React from "react";
import MenuItem from "components/menu-item/menu-item.component";
import { Section } from "interfaces";
import './directory.styles.scss';
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory";
import { createStructuredSelector } from "reselect";

class Directory extends React.Component<any, any> {
  render() {
    return <div className={'directory-menu'}>
      {
        this.props.sections.map(({id, ...sectionProps}: Section) => (
          <MenuItem key={id} {...sectionProps}/>
        ))
      }
    </div>
  }
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
