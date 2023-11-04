import { api } from "@/api";
import { storageAtom } from "@/store";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import React from "react";
import { Button } from "./ui/button";

function Room() {
  const [storage, setStorage] = useAtom(storageAtom);
  const roomsQuery = useQuery({
    queryKey: ["rooms"],
    queryFn: () => api.room.joinedRoom({ token: storage.token }),
  });

  const allRooms = roomsQuery.data;

  return (
    <div className="mt-16 h-screen ">
      <div className="flex flex-col mx-4 h-full ">
        <div className="text-xl font-semibold text-gray-500 pt-4 ">
          Joined Rooms
        </div>
        <br />
        <div className="grid grid-cols-1 gap-4 pt-4  h-full overflow-auto">
          {allRooms &&
            allRooms.map((room: any, index: number) => (
              <Button
                className="flex  justify-between p-5 border-2  rounded-lg "
                key={index}
                variant={"secondary"}
              >
                <div className="font-bold">{room.OwnerName}</div>
                <div className="text-sm">{room.RoomPurpose}</div>
              </Button>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Room;
