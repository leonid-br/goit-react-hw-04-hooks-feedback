import PropTypes from 'prop-types';
import { section } from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={section}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  // children: PropTypes.string,
};

export default Section;
