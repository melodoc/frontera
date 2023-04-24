import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useAuthManager } from 'hooks/use-auth-manager';
import { useTransformPhoneNumber } from 'hooks/use-transform-phone-number';
import { getToken } from 'services/token';
import { UIIconButton } from 'shared/components/ui-icon-button/ui-icon-button';
import { UITypography } from 'shared/components/ui-typography/ui-typography';
import { URLs } from '__data__/urls';
import { reset } from '__data__/slice/login';
import { LanguageSwitcher } from 'components/language-switcher/language-switcher';

import { Navigation } from '../navigation/navigation';
import style from './header.module.scss';

export const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { logout } = useAuthManager();
  const isLoggedIn = getToken();
  const phoneNumber = useTransformPhoneNumber('8 834 567-89-99');

  const onLogOutClick = () => {
    dispatch(reset());
    logout();
  };

  const onLogInClick = () => {
    history.push(URLs.auth.url);
  };

  return (
    <div className={style.container}>
      <header className={style.header}>
        <Navigation />
        <div className={style.header__account}>
          <LanguageSwitcher />
          <UITypography
            variant="span"
            typographyStyle={{
              fontWeight: 'bold',
              uppercase: true,
              color: 'secondary'
            }}
          >
            {phoneNumber}
          </UITypography>
          {isLoggedIn ? (
            <UIIconButton onClick={onLogOutClick} icon="user" label="Выйти" buttonType="button" />
          ) : (
            <UIIconButton onClick={onLogInClick} icon="user" label="Войти" buttonType="button" />
          )}
        </div>
      </header>
    </div>
  );
};
