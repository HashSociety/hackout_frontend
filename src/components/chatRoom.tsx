import { api } from "@/api";
import { storageAtom } from "@/store";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import React from "react";
import { useHistory } from "react-router";

function ChatRoom() {
  const history = useHistory();
  const [storage, setStorage] = useAtom(storageAtom);
  const path = history.location.pathname.split("/")[2];

  const roomQuery = useQuery({
    queryKey: ["room", path],
    queryFn: () => api.room.getRoom({ room_id: path, token: storage?.token || "" }),
  });
  const roomMembers = useQuery({
    queryKey: ["room-members", path],
    queryFn: () =>
      api.room.getRoomMembers({ room_id: path, token: storage?.token || "" }),
  });

  const roomData = roomQuery.data;
  const membersData = roomMembers.data;

  console.log("members", membersData);
  console.log("data", roomData);

  return <div>ChatRoom</div>;
}

export default ChatRoom;
