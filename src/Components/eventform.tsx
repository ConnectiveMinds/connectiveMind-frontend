import { SyntheticEvent, useState } from "react";
// import { useAddDateMutation } from "../services/calendarApi";
import { ToastContainer, toast } from "react-toastify";
import { saveDates } from "../features/Calendar/components/calendarSlice";
import { useAppDispatch } from "../app/hook";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router";
// import { useAppDispatch } from "../app/hook";

export const EventForm = () => {
  const dispatch = useAppDispatch();
  // const { dates } = useSelector(selectEvents);
  // const eventsError = useSelector(getEventsError);
  // const eventStatus = useSelector(getEventStatus);
  const initialState: {
    title: string;
    allDay: boolean;
    start: Date;
    end: Date;
  } = {
    title: "",
    allDay: false,
    start: new Date(),
    end: new Date(),
  };
  const [FormValue, setFormValue] = useState(initialState);
  const { title, start, end } = FormValue;
  // const [addDate,{data:dateDate,isSuccess:isAddSuccess,isError:isAddError}] = useAddDateMutation();
  //   const navigate = useNavigate();
  // const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.type === "datetime-local"
        ? new Date(e.target.value)
        : e.target.value;

    setFormValue({ ...FormValue, [e.target.name]: value });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    // Format the date values appropriately before passing them
    dispatch(
      saveDates({
        userid: "653a44795328fe2e14ee76bf",
        title,
        start,
        allDay: false,
        end,
      })
    )
      .then((resultAction) => {
        if (saveDates.fulfilled.match(resultAction)) {
          // Handle success (if needed)
          console.log("Event saved successfully");
          toast.success("Event added Successfully");
          setFormValue(initialState);
        } else if (saveDates.rejected.match(resultAction)) {
          // Handle rejection (if needed)
          console.error("Error saving event:", resultAction.error.message);
          toast.error(resultAction.error.message);
        }
      })
      .catch((error) => {
        // Handle unexpected errors
        console.error("Unexpected error:", error);
      });
  };

  //  useEffect(() => {
  //   if (eventStatus === "succeeded") {

  //     toast.success("Event added Successfully");
  //   }
  // }, [eventStatus]);

  return (
    <div className="max-w-sm mx-auto ">
      <p className="text-xl font-medium">Create Event</p>
      <div className="mb-5 mt-5">
        <p className="block mb-2 text-lg font-medium text-gray-900">Title</p>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Enter the title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          onChange={handleChange}
        />
      </div>
      <div className="mb-5">
        <p className="block mb-2 text-lg font-medium text-gray-900">Start</p>

        <input
          type="datetime-local"
          name="start"
          // value={start.toISOString().slice(0, 16)}
          placeholder="DD/MM/YYYY"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 input input-bordered w-full max-w-xs"
          onChange={handleChange}
        />
      </div>
      <div className="mb-5">
        <p className="block mb-2 text-lg font-medium text-gray-900">End</p>
        <input
          type="datetime-local"
          name="end"
          // value={end.toISOString().slice(0, 16)}
          placeholder="DD/MM/YYYY"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 input input-bordered w-full max-w-xs"
          onChange={handleChange}
        />
      </div>
      <div className="mb-5">
        <button
          onClick={handleSubmit}
          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Set Event
        </button>
      </div>
      {/* <button onClick={()=>dispatch(fetchdates("653a44795328fe2e14ee76bf"))}>get data </button> */}
      <ToastContainer />
    </div>
  );
};