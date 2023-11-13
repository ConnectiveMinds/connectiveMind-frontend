import { SyntheticEvent, useState } from "react";
// import { useAddDateMutation } from "../services/calendarApi";
import { ToastContainer, toast } from "react-toastify";
import {   saveDates } from "../features/calendarSlice";
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
  const { title,  start, end } = FormValue;
  // const [addDate,{data:dateDate,isSuccess:isAddSuccess,isError:isAddError}] = useAddDateMutation();
//   const navigate = useNavigate();
  // const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.type === 'datetime-local' ? new Date(e.target.value) : e.target.value;
  
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
    <div>
      <p>Create Event</p>
      <p>Title</p>
      <input
        type="text"
        name="title"
        value={title}
        placeholder="Enter the title"
        className="input input-bordered w-full max-w-xs"
        onChange={handleChange}
      />
      <p>Start</p>
      <input
        type="datetime-local"
        name="start"
        value={start.toISOString().slice(0, 16)}
        placeholder="DD/MM/YYYY"
        className="input input-bordered w-full max-w-xs"
        onChange={handleChange}
      />

      <p>End</p>
      <input
        type="datetime-local"
        name="end"
        value={end.toISOString().slice(0, 16)}
        placeholder="DD/MM/YYYY"
        className="input input-bordered w-full max-w-xs"
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>
        Set Event
      </button>
      {/* <button onClick={()=>dispatch(fetchdates("653a44795328fe2e14ee76bf"))}>get data </button> */}
      <ToastContainer/>
    </div>
  );
};
