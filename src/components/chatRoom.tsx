import { api } from "@/api";
import { storageAtom } from "@/store";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import React from "react";
import { useHistory } from "react-router";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function ChatRoom() {
  const history = useHistory();
  const [storage, setStorage] = useAtom(storageAtom);
  const path = history.location.pathname.split("/")[2];

  const roomQuery = useQuery({
    queryKey: ["room", path],
    queryFn: () =>
      api.room.getRoom({ room_id: path, token: storage?.token || "" }),
  });
  const roomMembers = useQuery({
    queryKey: ["room-members", path],
    queryFn: () =>
      api.room.getRoomMembers({ room_id: path, token: storage?.token || "" }),
    enabled: !roomQuery.isLoading,
  });

  const roomData = roomQuery.data;
  const membersData = roomMembers.data;

  return (
    <AlertDialog>
      <div className="h-screen pt-20 mx-4">
        {roomData && (
          <div className="flex flex-col  h-full ">
            <div className="font-bold text-3xl flex justify-between ">
              {roomData.OwnerName}{" "}
              <Badge
                variant="default"
                className="text-xs font-normal px-4 py-1 leading-1 rounded-full h-6 "
              >
                {roomData.RoomPurpose}
              </Badge>
            </div>
            <div className="flex justify-between ">
              <AlertDialogTrigger className="text-left text-sx text-gray-500 underline">
                Click here to see more
              </AlertDialogTrigger>
              <div className="italic text-xs ">
                under {roomData.DistanceAllowed} KM's
              </div>
            </div>
            <div className="flex items-center gap-2 ">
              <div className="text-xs whitespace-nowrap ">All members</div>

              <div className="w-full  my-5 overflow-auto flex gap-2">
                {membersData &&
                  membersData.map((member: any, index: number) => (
                    <Badge
                      variant="default"
                      className="text-xs font-normal px-4 py-1 leading-1 rounded-full h-6 "
                    >
                      {member.Name}
                    </Badge>
                  ))}
              </div>
            </div>

            {/* div for listing all the messages */}
            <div className="flex-1"></div>

            <div className="flex gap-2 mb-6">
              <Input placeholder="type your message here ..." />
              <Button className=""> Send</Button>
            </div>
          </div>
        )}
      </div>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogDescription>
            <div className="text-left font-bold text-xl">
              Purpose of this room
            </div>
            { roomData?.PurposeDescriptions.length > 0 &&  roomData?.PurposeDescriptions?.map((item: any, index: number) => (
              <div className="pt-5 flex text-lg gap-2">
                <div>{index + 1}.</div>
                <div
                  className="flex justify-between  flex-col  font-normal"
                  key={index}
                >
                  <div className="text-left text-lg font-bold text-primary ">
                    {item.Heading}
                  </div>
                  <div className="text-left text-sm">{item.Value}</div>
                </div>
              </div>
            ))}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ChatRoom;


