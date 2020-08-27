import React, {Component} from 'react';
import {withRouter, match} from 'react-router-dom';
import {History} from 'history'
import './menu-item.styles.scss';

interface MenuItemProps {
  title: string,
  imageUrl: string,
  size: string,
  linkUrl: string,
  match: match,
  history: History
}

class MenuItem extends Component<MenuItemProps, any> {
  render() {
    return <div
      className={`menu-item ${this.props.size}`}
      onClick={() => this.props.history.push(`${this.props.match.url}${this.props.linkUrl}`)}
    >
      <div className={'background-image'} style={{
        backgroundImage: `url(${this.props.imageUrl})`
      }}/>
      <div className={'content'}>
        <h1 className={'title'}>{this.props.title.toUpperCase()}</h1>
        <span className={'subtitle'}>SHOP NOW</span>
      </div>
    </div>
  }
}

// @ts-ignore-next-line
export default withRouter(MenuItem)
