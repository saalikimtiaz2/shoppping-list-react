import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function List({ items }) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

List.propTypes = {
  items: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  items: state.shoppingCart,
});

export default connect(mapStateToProps)(List);
