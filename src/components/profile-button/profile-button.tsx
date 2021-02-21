import React from 'react';

import style from './style.css';

interface ProfileButtonProps {
  list? : Array<string>
}
interface ProfileButtonState {
  isOpened: boolean;
}

export class ProfileButton extends React.Component<ProfileButtonProps, ProfileButtonState> {
  constructor(props) {
    super(props);
    this.state = {isOpened: false};
    this.toggleState = this.toggleState.bind(this);
  }

  toggleState() {
    this.setState({isOpened: !this.state.isOpened});
  }

  render() {
    let dropdownMenu;

    if (this.state.isOpened) {
      dropdownMenu =  <ul className={style.dropdownMenu}>
      <li className={style.dropdopdownItem}>
        <a href="#" className={style.dropdownLink}>view history</a>
      </li>
      <li className={style.dropdopdownItem}>
        <a href="#" className={style.dropdownLink}>settings</a>
      </li>
      <li className={style.dropdopdownItem}>
        <a href="#" className={style.dropdownLink}>help</a>
      </li>
      <li className={style.dropdopdownItem}>
        <a href="#" className={style.dropdownLink}>sign out</a>
      </li>
    </ul>
    }

    return (
      <div className={style.wrapper}>
        <div className={style.dropdown}>
          <button onClick={this.toggleState} className={style.dropdownButton} type="button"></button>
          {dropdownMenu}
        </div>
      </div>
    )
  }
}