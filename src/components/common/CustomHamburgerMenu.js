import React, { useState } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import { useDispatch } from 'react-redux';
import { useIntl } from 'react-intl';

import {
  hambWidth,
  hambHeight,
  hambStrokeWidth,
  hambRotate,
  hambColor,
  hambBorderRadius,
  hambAnimationDuration,
} from 'style/common/_constants.scss';
import { userActions } from 'actions/user.actions';
import 'components/common/custom-hamburger-menu.scss';

const CustomHamburgerMenu = ({ isLoggedIn }) => {
  const intl = useIntl();

  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <HamburgerMenu
          isOpen={open}
          menuClicked={() => setOpen(!open)}
          width={hambWidth}
          height={hambHeight}
          strokeWidth={hambStrokeWidth}
          rotate={hambRotate}
          color={hambColor}
          borderRadius={hambBorderRadius}
          animationDuration={hambAnimationDuration}
        />
      </div>
      {open && (
        <div>
          <ul className="hamburger-menu__list">
            {isLoggedIn && (
              <li onClick={() => dispatch(userActions.logout())}>
                {intl.formatMessage({
                  id: 'homepage.logout.text',
                })}
              </li>
            )}
            <li className="hamburger-menu__list-last">
              {intl.formatMessage({
                id: 'hamburger.menu.about.text',
              })}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomHamburgerMenu;