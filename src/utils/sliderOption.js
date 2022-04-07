export const settings = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 2,
  autoplay: true,
  speed: 10000,
  autoplaySpeed: 500,
  centerPadding: true,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: 10,
      }
    }
  ]
};

export const settingsFavouriteChar = {
  className: "",
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 500,
  adaptiveHeight: true,
  arrows: true,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: 5,
      }
    }
  ]
};
