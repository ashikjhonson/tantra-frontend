import zebra from "../../assets/gif/zebra.gif";

const VideoPlayer = () => {
  return (
    <div className="px-10 py-10 absolute w-fit z-10">
      <div className="border-4 rounded-full w-fit p-2">
        <img src={zebra} className="object-fill h-24 w-80 rounded-full" />
      </div>
    </div>
  );
};

export default VideoPlayer;
