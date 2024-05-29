import React, { useState } from "react"; // Import React and useState hook from the React library
import data from "./data.json"; // Import data from a local JSON file
import {
  IoArrowDownCircleOutline,
  IoArrowUpCircleOutline,
} from "react-icons/io5"; // Import icons from the 'react-icons' library
import { MdDoubleArrow } from "react-icons/md"; // Import another icon from the 'react-icons' library

// Define the Accordian component as the default export
export default function Accordian() {
  // useState hooks to manage state
  const [visibleQuestionId, setVisibleQuestionId] = useState(null); // State for currently visible question ID
  const [allOpen, setAllOpen] = useState(false); // State to track if all answers should be open

  // Function to toggle the visibility of a specific question's answer
  const showQstion = (id) => {
    setVisibleQuestionId(visibleQuestionId === id ? null : id); // If the clicked question is already visible, hide it; otherwise, show it
  };

  // Function to toggle the visibility of all answers
  const toggleAllAnswers = () => {
    setAllOpen(!allOpen); // Toggle the allOpen state between true and false
  };

  return (
    <div className="container">
      {/* Button to open/close all answers */}
      <button className="toggle-button" onClick={toggleAllAnswers}>
        {allOpen ? "Close All" : "Open All"}{" "}
        {/* Display appropriate button text */}
      </button>
      {data.map((elem) => (
        // Map over the data array to create elements for each question and answer pair
        <div key={elem.id} className="element">
          {/* Question element that toggles the visibility of the answer when clicked */}
          <div className="qstn" onClick={() => showQstion(elem.id)}>
            <h3>{elem.question}</h3> {/* Display the question */}
            <span className="bold">
              {/* Display the appropriate icon based on the visibility state */}
              {allOpen || visibleQuestionId === elem.id ? (
                <IoArrowUpCircleOutline />
              ) : (
                <IoArrowDownCircleOutline />
              )}
            </span>
          </div>
          {/* Conditionally render the answer based on the visibility state */}
          {(allOpen || visibleQuestionId === elem.id) && (
            <p className="ans">
              <MdDoubleArrow /> {elem.answer}{" "}
              {/* Display the answer with an icon */}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
