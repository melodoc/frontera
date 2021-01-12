import React from 'react';

import { LinkButton } from './../../../components/link';
import { URLs } from './../../../__data__/urls';
import { Link as ConnectedLink } from 'react-router-dom';

import HeaderForm from '../../../components/header-form';
import TitleWithSubtitle from '../../../components/title-with-subtitle/title-with-subtitle';
import Input from '../../../components/input/input';

import style from '../style.css';

const Restore = () => (
  <React.Fragment>
    <HeaderForm/>
    <main className={style.container}>
      <section className={style.login}>
        <TitleWithSubtitle type={'restore'}/>
      </section>
      <form method={'post'} action={'#'}>
        <div className={style.form__wrapper}>
          <p className={style.form__itemSingle}>
            <Input type={'email'} />
          </p>
        </div>
        <div className={style.form__buttons }>
        <LinkButton
          type='link'
          to={URLs.resetpassword.url}
          as={ConnectedLink}>
          Reset
        </LinkButton>
        </div>
      </form>
      <div className={style.form__buttons}>
        <LinkButton
          type='link'
          to={URLs.login.url}
          as={ConnectedLink}>
          Cancel
        </LinkButton>
      </div>
    </main>
  </React.Fragment>
);

export default Restore;