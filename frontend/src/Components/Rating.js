import React from "react";
import PropTypes from "prop-types";

const Rating = ({ rate, reviews, color }) => {
    // more efficient way to set stars:
    // let dynamicList2 = [];
    // console.log(rate);
    // for (let i = 1; i < rate; i++) {
    //     dynamicList2.push(
    //         <i key={i + 30} style={{ color }} className={"fas fa-star"} />
    //     );
    // }
    // {
    //     [1, 2, 3, 4, 5].map((index) => (
    //         <i
    //             className={
    //                 value >= index
    //                     ? "fas fa-star"
    //                     : value >= index - 0.5
    //                     ? "fas fa-star-half-alt"
    //                     : "far fa-star"
    //             }
    //         ></i>
    //     ));
    // }

    ///////////////////   my first way:    /////////////////////////
    const fullStars = parseInt(rate);
    const emptyStars = parseInt(5 - rate);
    const halfStar = (rate % 1).toFixed(1);

    let dynamicList = [];

    for (let i = 0; i < emptyStars; i++) {
        dynamicList.push(
            <i key={i + 10} style={{ color }} className={"far fa-star"} />
        );
    }

    if (halfStar <= 0.5) {
        dynamicList.push(
            <i key={20} style={{ color }} className={"fas fa-star-half-alt"} />
        );
    } else {
        dynamicList.push(
            <i key={20} style={{ color }} className={"fas fa-star"} />
        );
    }

    for (let i = 0; i < fullStars; i++) {
        dynamicList.push(
            <i key={i + 30} style={{ color }} className={"fas fa-star"} />
        );
    }

    return (
        <div className="rating">
            {dynamicList} מתוך {reviews} ביקורות
        </div>
    );
};

Rating.defaultProps = {
    color: "#f8e825",
};

Rating.propTypes = {
    rate: PropTypes.number, //.isRequired,
    reviews: PropTypes.number, //.isRequired,
    color: PropTypes.string,
};
export default Rating;
