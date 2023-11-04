import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { storageAtom } from "@/store";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Geolocation } from "@capacitor/geolocation";
import { Button } from "@/components/ui/button";

function CreateRoom() {
  const [storage, setStorage] = useAtom(storageAtom);
  const history = useHistory();
  const [input, setInput] = useState({
    OwnerName: "",
    RoomName: "",
    Latitude: "",
    Longitude: "",
    DistanceAllowed: "",
  });

  const printCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
  };

  const presets = [
    {
      name: "Play",
      color: "bg-green-500",
      className: "bg-green-500/70 border-green-500 border-[6px]",

      value: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-dribbble"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
          <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
          <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
        </svg>
      ),
    },
    {
      name: "Movie",
      color: "bg-blue-500",
      className: "border-blue-500 bg-blue-500/70 border-[6px]",
      value: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-clapperboard"
        >
          <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
          <path d="m6.2 5.3 3.1 3.9" />
          <path d="m12.4 3.4 3.1 4" />
          <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
        </svg>
      ),
    },
    {
      name: "Travel",
      color: "bg-purple-500",
      className: "border-purple-500 bg-purple-500/70 border-[6px]",
      value: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-clapperboard"
        >
          <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
          <path d="m6.2 5.3 3.1 3.9" />
          <path d="m12.4 3.4 3.1 4" />
          <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
        </svg>
      ),
    },
    {
      name: "Chit Chat",
      color: "bg-orange-500",
      className: "border-orange-500 bg-orange-500/70 border-[6px]",
      value: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-clapperboard"
        >
          <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
          <path d="m6.2 5.3 3.1 3.9" />
          <path d="m12.4 3.4 3.1 4" />
          <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
        </svg>
      ),
    },
  ];
  console.log(input);
  useEffect(() => {
    if (!storage.name) {
      history.push("/login");
    }

    const getLocation = async () => {
      const coordinates = await Geolocation.getCurrentPosition();
      setInput((p) => ({
        ...p,
        Latitude: coordinates.coords.latitude.toString(),
        Longitude: coordinates.coords.longitude.toString(),
      }));
    };
    getLocation();
  }, []);
  return (
    <div className="mt-20 w-full h-full ">
      <div className="text-3xl font-bold px-4">Create a room</div>
      {/* <Button variant={"secondary"} onClick={() => printCurrentPosition()}>
        Get ny location
      </Button> */}
      <br />
      <div className="  p-4 ">
        {/* <Label className="text-lg"> Owner Name </Label>
        <Input placeholder="owener name" value={input.OwnerName} className="mt-3" /> */}
        <br />
        <Label className="text-lg"> Theme </Label>
        <RadioGroup
          defaultValue="option-one"
          onValueChange={(e: string) =>
            setInput((prev) => ({ ...prev, RoomName: e }))
          }
        >
          <div className="gap-3 text-white absolute grid grid-cols-2 w-[calc(100%-32px)] mt-3 ">
            {presets.map((preset, i) => (
              <div
                key={i}
                className={` border rounded-[30px] w-full  h-44 p-3 shadow-xl ${preset.className} `}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={preset.name}
                    id={`option-${i}`}
                    className="border-[3px] border-white"
                  />
                  <Label htmlFor={`option-${i}`}>{preset.name}</Label>
                  <div>{preset.value}</div>
                </div>
              </div>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

export default CreateRoom;
