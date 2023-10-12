import React from 'react';

function MenuItem(props) {
  //create a state isFavorite that has the inital value of isFavorite that comes from the props

  return (
    <div className="itemContainer">
      <div className="leftContainer">
        <div className="imgContainer">
          {/* the image will receive the url src from the props */}
          <img src="" alt="" />
        </div>
        <div className="itemDescription">
          {/* the h3 will receive the item name from the props */}
          <h3>{}</h3>
          {/* the p will receive the item description from the props */}
          <p>{}</p>
        </div>
      </div>
      <div className="rightContainer">
        {/* the div will receive the item price from the props */}
        <div>{} EUR</div>

        {/* the div with id favorite will have 2 attributes:
                - onClick, will call the method handleClickFavorite,
                - classname, that will be conditionally rendered, depending on the value of isFavorite from the component's state
            */}
        <div id="favorite" />
      </div>
    </div>
  );
}

export default MenuItem;
