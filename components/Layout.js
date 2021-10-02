import PropTypes from "prop-types";

export default function Layout({ children }) {
  return <div className="p-5">{children}</div>;
}

Layout.propTypes = {
  children: PropTypes.any,
};
