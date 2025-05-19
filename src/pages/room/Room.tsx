import AppModal from "./AppModal";
import RoomCard from "./RoomCard";
// import AppDialog from "./AppDialog";
import { useAppSelector } from "@/store/hook";

const Home: React.FC = () => {
  const roomList = useAppSelector((state) => state.roomList);

  return (
    <div className="p-4">
      {/* <AppDialog /> */}
      <AppModal />      

      <hr className="my-2" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {Object.values(roomList).map((room, index) => (
          <RoomCard key={index} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Home;
