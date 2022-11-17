import React, { useEffect } from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import { ArrowRight, ArrowLeft } from "react-bootstrap-icons";
import { Container } from "react-bootstrap";
import carouselStyle from "../../styles/carousel.module.css";

export const data = [
  {
    cover:
      "https://d25s2jqw4qdf1e.cloudfront.net/a80c4ba3-6a04-45e3-baa6-29cfbae77dfb.webp?imwidth=3840",
    title: "42 runs in 1 over by Kshitij More | Shree Kaleshwari Chashak 2021",
    category: "cricket lover",
    date: "16 06 `21",
  },
  {
    cover:
      "https://d25s2jqw4qdf1e.cloudfront.net/70526bde-da54-4c34-91b6-eafbf6baeaff.webp?imwidth=3840",
    title: "42 runs in 1 over by Kshitij More | Shree Kaleshwari Chashak 2021",
    category: "cricket lover",
    date: "16 06 `21",
  },
  {
    cover:
      "https://d25s2jqw4qdf1e.cloudfront.net/c9aae31f-9a66-4f56-9aab-211d5201b8d9.webp?imwidth=3840",
    title: "42 runs in 1 over by Kshitij More | Shree Kaleshwari Chashak 2021",
    category: "cricket lover",
    date: "16 06 `21",
  },
  {
    cover:
      "https://d25s2jqw4qdf1e.cloudfront.net/b81c80fe-1d87-4ad1-bb20-87d32f3596a7.webp?imwidth=3840",
    title: "42 runs in 1 over by Kshitij More | Shree Kaleshwari Chashak 2021",
    category: "cricket lover",
    date: "16 06 `21",
  },
  {
    cover:
      "https://d25s2jqw4qdf1e.cloudfront.net/a80c4ba3-6a04-45e3-baa6-29cfbae77dfb.webp?imwidth=3840",
    title: "42 runs in 1 over by Kshitij More | Shree Kaleshwari Chashak 2021",
    category: "cricket lover",
    date: "16 06 `21",
  },
  {
    cover:
      "https://d25s2jqw4qdf1e.cloudfront.net/c9aae31f-9a66-4f56-9aab-211d5201b8d9.webp?imwidth=3840",
    title: "42 runs in 1 over by Kshitij More | Shree Kaleshwari Chashak 2021",
    category: "cricket lover",
    date: "16 06 `21",
  },
];

function ResponsiveCarousel(props) {
  const ref = React.useRef();
  useEffect(() => {
    const interval = setInterval(() => {
      ref.current.goNext();
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div style={{ marginTop: 40, marginBottom: 40 }}>
      <Container>
        <div className="text-center">
          <h1 className={carouselStyle.heading}>
            NAIL-BITING MOMENTS CAPTURED VIA <br></br> SPORTVOT
          </h1>
        </div>
        <div style={{ width: "100%", position: "relative" }}>
          <ResponsiveContainer
            carouselRef={ref}
            render={(parentWidth, carouselRef) => {
              // If you want to use a ref to call the method of StackedCarousel, you cannot set the ref directly on the carousel component
              // This is because ResponsiveContainer will not render the carousel before its parent's width is determined
              // parentWidth is determined after your parent component mounts. Thus if you set the ref directly it will not work since the carousel is not rendered
              // Thus you need to pass your ref object to the ResponsiveContainer as the carouselRef prop and in your render function you will receive this ref object
              let currentVisibleSlide = 3;
              if (parentWidth <= 1440) currentVisibleSlide = 3;
              if (parentWidth <= 1080) currentVisibleSlide = 1;
              return (
                <StackedCarousel
                  ref={carouselRef}
                  slideComponent={Card}
                  slideWidth={parentWidth < 800 ? parentWidth - 40 : 750}
                  carouselWidth={parentWidth}
                  data={data}
                  currentVisibleSlide={currentVisibleSlide}
                  maxVisibleSlide={3}
                />
              );
            }}
          />
          <>
            <ArrowLeft
              style={{
                position: "absolute",
                top: "40%",
                left: 10,
                zIndex: 10,
                fontSize: 20,
                padding: "15px",
                cursor: "pointer",
                color: "#fff",
                width: "50px",
                height: "50px",
                backgroundColor: "rgba(105, 105, 105, 0.54)",
                borderRadius: "50px",
              }}
              onClick={() => {
                ref.current?.goBack();
              }}
            />
            <ArrowRight
              style={{
                position: "absolute",
                top: "40%",
                right: 10,
                zIndex: 10,
                width: "50px",
                height: "50px",
                fontSize: 20,
                padding: "15px",
                cursor: "pointer",
                color: "#fff",
                backgroundColor: "rgba(105, 105, 105, 0.54)",
                borderRadius: "50px",
              }}
              onClick={() => {
                ref.current?.goNext();
              }}
            />
          </>
        </div>
      </Container>
    </div>
  );
}

// Very import to memoize your Slide component otherwise there might be performance issue
// At minimum your should do a simple React.memo(SlideComponent)
// If you want the absolute best performance then pass in a custom comparator function like below
export const Card = React.memo(function (props) {
  const { data, dataIndex } = props;
  const { cover, title, category, date } = data[dataIndex];
  return (
    <div
      style={{
        width: "100%",
        height: 300,
        userSelect: "none",
        marginTop: "40px",
        marginBottom: "40px",
      }}
      className="my-slide-component"
    >
      <img
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          borderRadius: 0,
        }}
        draggable={false}
        src={cover}
      />
      <div>
        <h6 className={carouselStyle.crousel__text}>{title}</h6>
        <div>
          {/* <h6 className={carouselStyle.crousel__categoryText}>{category}</h6> */}
          {/* <h6 className={carouselStyle.crousel__dateText}>{date}</h6> */}
          {/* <span>
            
          </span> */}
        </div>
      </div>
    </div>
  );
});
export default ResponsiveCarousel;
