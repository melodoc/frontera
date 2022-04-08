import PropTypes from "prop-types";

import style from "./title-with-subtitle.module.scss";

export const TitleWithSubtitle = ({ title, descriptions }) => {
  return (
    <>
      <h1 className={style.anthemItem}>{title}</h1>
      <p className={style.loginHeading}>{descriptions}</p>
    </>
  );
};

TitleWithSubtitle.propTypes = {
  title: PropTypes.string.isRequired,
  descriptions: PropTypes.string.isRequired,
};
