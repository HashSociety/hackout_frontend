import { api } from "@/api";
import { storageAtom } from "@/store";
import { useAtom } from "jotai";
import { Link } from "react-router-dom";
import Info from "./Info";
import { useEffect, useState } from "react";
import { Geolocation } from "@capacitor/geolocation";
function Home() {
  const [storage, setStorage] = useAtom(storageAtom);
  const [input, setInput] = useState({
    Latitude: "",
    Longitude: "",
    token: storage?.token,
  });

  const [roomData, setRoomData] = useState([]);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const coordinates = await Geolocation.getCurrentPosition();
        setInput((p) => ({
          ...p,
          Latitude: coordinates.coords.latitude.toString(),
          Longitude: coordinates.coords.longitude.toString(),
        }));
      } catch (error) {
        console.log("error");
      }
    };

    if (input.Latitude === "" || input.Longitude === "") getLocation();

    // Call the API to fetch room data
    // listSearch();
  }, []);

  console.log(input);

  useEffect(() => {
    if (input.Latitude === "") {
      return;
    }
    const listSearch = async () => {
      if (!input.Latitude || !input.Longitude) {
        return;
      }
      try {
        const data = await api.room.search({
          user_latitude: input.Latitude,
          user_longitude: input.Longitude,
          token: storage?.token,
        });
        if (Array.isArray(data)) {
          setRoomData(data);
        }
      } catch (e) {
        console.log("error in 40");
      }
    };
    listSearch();
  }, [input.Latitude]);

  return (
    <div>
      {storage?.name ? (
        <div className="flex flex-col pt-14 justify-center items-center">
          {/* <button onClick={() => api.room.joinedRoom({ token: storage.token })}>
            Joined{" "}
          </button> */}
          <Link
            to={"/create"}
            className="flex w-full h-32 justify-center items-center  "
          >
            <div
              className="button w-40 h-16 bg-primary  cursor-pointer select-none
        active:translate-y-2  active:[box-shadow:0_0px_0_0_#202124,0_0px_0_0_#202124]
        active:border-b-[0px]
        transition-all duration-150 [box-shadow:0_10px_0_0_#202124,0_15px_0_0_#202124]
        rounded-full  border-[1px] border-gray-400
        
        "
            >
              <span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg ">
                Find Pals! ✨
              </span>
            </div>
          </Link>

          <div className="flex flex-col justify-center items-center mt-10">
            <div className="text-2xl">Join Rooms</div>

            {/* <div className="grid grid-cols-2 gap-4 mt-10 ">
              <div className=" flex flex-col justify-between p-3 h-[20vh] w-[40vw] border-2  rounded-lg">
                <div>01</div>
                <div>Travel</div>
              </div>
              <div className=" flex flex-col justify-between p-3 h-[20vh] w-[40vw] border-2  rounded-lg">
                <div>02</div>
                <div>Sports</div>
              </div>
              <div className=" flex flex-col justify-between p-3 h-[20vh] w-[40vw] border-2  rounded-lg">
                <div>03</div>
                <div>Movies</div>
              </div>
              <div className=" flex flex-col justify-between p-3 h-[20vh] w-[40vw] border-2  rounded-lg">
                <div>04</div>
                <div>Cab</div>
              </div>
            </div> */}
            <div className="flex gap-4 mt-10 overflow-x-scroll w-screen h-screen px-5">
              {roomData.length > 0 ? (
                roomData.map((room, index) => (
                  <div
                    key={index}
                    className="flex justify-center flex-col p-3 max-h-[40vh] min-w-[70vw] border-4 border-black rounded-lg"
                  >
                    <div>
                      Room Name:{" "}
                      <span className="font-bold capitalize">
                        {room.OwnerName}
                      </span>
                    </div>
                    <div>
                      Room Purpose:{" "}
                      <span className="font-bold capitalize">
                        {room.RoomPurpose}
                      </span>
                    </div>
                    <div>
                      Distance Allowed:{" "}
                      <span className="font-bold capitalize">
                        {room.DistanceAllowed}
                      </span>
                    </div>
                    <div>
                      Distance From User:{" "}
                      <span className="font-bold capitalize">
                        {room.DistanceFromUser}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex w-full  justify-center">
                  <p className="text-2xl font-bold">No Rooms Available</p>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Info />
        </div>
      )}
    </div>
  );
}

export default Home;
