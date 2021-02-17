import PropTypes from 'prop-types';

export default function Page({ children }) {
  return (
    <div>
      <h2>page component </h2>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
