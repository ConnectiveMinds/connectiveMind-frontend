import { SyntheticEvent, useEffect, useState } from "react";
// import { useAddDateMutation } from "../services/calendarApi";
import { ToastContainer, toast } from "react-toastify";

import { useAppDispatch } from "../app/hook";
import { IMember } from "../features/HomePage/Interface";
import { getIdeaByProjectId, saveDates } from "../services/api.services";
import { fetchEventByUserId } from "../features/Calendar/components/calendarSlice";
import { Choose } from "./search";

// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router";
// import { useAppDispatch } from "../app/hook";

export const EventForm = ({ _id,onClose }) => {
  const dispatch = useAppDispatch();
  // const { dates } = useSelector(selectEvents);
  // const eventsError = useSelector(getEventsError);
  // const eventStatus = useSelector(getEventStatus);
  const initialState: {
    title: string;
    start: Date;
    end: Date;
    assigned: string[];
  } = {
    title: "",
    start: new Date(),
    end: new Date(),
    assigned: [],
  };
  const [idea, setIdea] = useState<IMember>();
  const [FormValue, setFormValue] = useState(initialState);
  const [selectedMembers, setSelectedMembers] = useState<Array<string>>([]);
  const { title, start, end, assigned } = FormValue;
  useEffect(() => {
    getIdeaByProjectId(_id).then((data) => {
      setIdea(data.data);
    });
    // setCurrentUser(JSON.parse(localStorage.getItem("user")!).data.userId);
  }, []);
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
  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedMembers(selectedOptions);
    setFormValue({ ...FormValue, assigned: selectedMembers });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    dispatch(
      saveDates({
        body: {
          title: title,
          start: start,
          end: end,
          assigned_id: assigned,
          isOwner: true,
        },
        projectId: _id,
      })
    )
      .then((resultAction) => {
        if (saveDates.fulfilled.match(resultAction)) {
          // Handle success (if needed)

          setFormValue(initialState);
          toast.success("Event added Successfully");
          dispatch(fetchEventByUserId());
          handleClose();
        } else if (saveDates.rejected.match(resultAction)) {
          // Handle rejection (if needed)
          console.log(resultAction.error.message);
          console.error("Error saving event:", resultAction.error.message);
          toast.error(resultAction.error.message);
        }
      })
      .catch((error) => {
        // Handle unexpected errors
        console.error("Unexpected error:", error);
      });
  };
  const handleClose = () => {
    // Call the onClose function passed from the parent component
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="max-w-sm mx-auto ">
      <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-75 backdrop-blur">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-row items-center justify-between">
          <p className="text-xl font-medium">Create Event</p>
          <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" onClick={handleClose}>
              <span className="sr-only">Close menu</span>
            
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="mb-5 mt-5">
            <p className="block mb-2 text-lg font-medium text-gray-900">
              Title
            </p>
            <input
              type="text"
              name="title"
              value={title}
              placeholder="Enter the title"
              className="bg-gray-50 border border-white text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <p className="block mb-2 text-lg font-medium text-gray-900">
              Start
            </p>

            <input
              type="datetime-local"
              name="start"
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
              placeholder="DD/MM/YYYY"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 input input-bordered w-full max-w-xs"
              onChange={handleChange}
            />
          </div>
          <div>
            <Choose idea={idea} handleChange={handleChangeSelect} />
          </div>
          <div className="mb-5">
            <button
              onClick={handleSubmit}
              className="mt-6 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Set Event
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
