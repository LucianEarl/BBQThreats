// import of video files
import HomeVideo from "../../media/video/BackgroundFire.mp4";
import Sparks from "../../media/video/sparks.mp4";
import Bonfire from "../../media/video/bonfire.mp4";
import Ferns from "../../media/video/ferns.mp4";

// import of video posters
import HomePoster from "../../media/images/videoPosters/HomePoster.png";
import LucianPoster from "../../media/images/videoPosters/LucianPoster.png";

const backgroundData = [
  {
    key: 0,
    page: "/",
    video: HomeVideo,
    poster: HomePoster,
  },
  {
    key: 1,
    page: "/Tim",
    video: "",
    poster: "",
  },
  {
    key: 2,
    page: "/Lucian",
    video: Ferns,
    poster: LucianPoster,
  },
];

export default backgroundData;
