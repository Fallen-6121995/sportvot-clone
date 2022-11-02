import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from "react-bootstrap";
import happyUsersStyles from "../../styles/happyUsersStyles.module.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className={`${happyUsersStyles.carouselButtonGroup}`}>
      {" "}
      <button
        className={currentSlide === 0 ? "disable" : ""}
        onClick={() => previous()}
      >
        Previous
      </button>
      <button onClick={() => next()}>Next</button>
    </div>
  );
};
//     {
//         <img
//     src="https://d25s2jqw4qdf1e.cloudfront.net/623574c3-fe8b-4f60-aafd-52b3c8eb6cb0.png?imwidth=3840"
//     // onDragStart={handleDragStart}
//     // role="presentation"
//   />,
//   <img
//     src="https://d25s2jqw4qdf1e.cloudfront.net/890d8fb0-60e3-4711-9d11-ce7571b143c2.png?imwidth=3840"
//     // onDragStart={handleDragStart}
//     // role="presentation"
//   />,
//   <img
//     src="https://d25s2jqw4qdf1e.cloudfront.net/670ac1cf-b579-4c01-8ad4-f38c75878382.png?imwidth=3840"
//     // onDragStart={handleDragStart}
//     // role="presentation"
//   />,
//   <img
//     src="https://d25s2jqw4qdf1e.cloudfront.net/5a4f58af-3040-4cb5-ab81-2206cabd0b18.png?imwidth=3840"
//     // onDragStart={handleDragStart}
//     // role="presentation"
//   />,
//   <img
//     src="https://d25s2jqw4qdf1e.cloudfront.net/788f58c6-54fb-4803-9df9-fb9638877178.png?imwidth=3840"
//     // onDragStart={handleDragStart}
//     // role="presentation"
//   />,
//   <img
//     src="https://d25s2jqw4qdf1e.cloudfront.net/2e13d47a-4f9c-47e0-a846-a8487dfd5dbc.png?imwidth=3840"
//     // onDragStart={handleDragStart}
//     // role="presentation"
//   />,

//   <img
//     src="https://d25s2jqw4qdf1e.cloudfront.net/8c1d87ed-5c43-43e5-9540-8b22de335ed9.png?imwidth=3840"
//     // onDragStart={handleDragStart}
//     // role="presentation"
//   />,
//   <img
//     src="https://d25s2jqw4qdf1e.cloudfront.net/b799d0f1-c3de-4914-b75d-84a3e86bd706.png?imwidth=3840"
//     // onDragStart={handleDragStart}
//     // role="presentation"
//   />,
//     }
// ];

function HappyUsers() {
  return (
    <div>
      <Container>
        <div className={`text-center ${happyUsersStyles.heading}`}>
          <h2>HAPPY USERS</h2>
        </div>
        <Carousel
          customButtonGroup={<ButtonGroup />}
          arrows={false}
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-30-px"
        >
          <div>
            <img
              src="https://d25s2jqw4qdf1e.cloudfront.net/b799d0f1-c3de-4914-b75d-84a3e86bd706.png?imwidth=3840"
              width={60}
              // onDragStart={handleDragStart}
              // role="presentation"
            />
          </div>
          <div>
            <img
              src="https://d25s2jqw4qdf1e.cloudfront.net/890d8fb0-60e3-4711-9d11-ce7571b143c2.png?imwidth=3840"
              width={60}
              // onDragStart={handleDragStart}
              // role="presentation"
            />
          </div>
          <div>
            <img
              src="https://d25s2jqw4qdf1e.cloudfront.net/5a4f58af-3040-4cb5-ab81-2206cabd0b18.png?imwidth=3840"
              width={60}
              // onDragStart={handleDragStart}
              // role="presentation"
            />
          </div>
          <div>
            <img
              src="https://d25s2jqw4qdf1e.cloudfront.net/623574c3-fe8b-4f60-aafd-52b3c8eb6cb0.png?imwidth=3840"
              width={60}
              // onDragStart={handleDragStart}
              // role="presentation"
            />
          </div>
          <div>
            <img
              src="https://d25s2jqw4qdf1e.cloudfront.net/2e13d47a-4f9c-47e0-a846-a8487dfd5dbc.png?imwidth=3840"
              width={60}
              // onDragStart={handleDragStart}
              // role="presentation"
            />
          </div>
          <div>
            <img
              src="https://d25s2jqw4qdf1e.cloudfront.net/788f58c6-54fb-4803-9df9-fb9638877178.png?imwidth=3840"
              width={60}
              // onDragStart={handleDragStart}
              // role="presentation"
            />
          </div>
          <div>
            <img
              src="https://d25s2jqw4qdf1e.cloudfront.net/8c1d87ed-5c43-43e5-9540-8b22de335ed9.png?imwidth=3840"
              width={60}
              // onDragStart={handleDragStart}
              // role="presentation"
            />
          </div>
        </Carousel>
        ;
      </Container>
    </div>
  );
}

export default HappyUsers;
