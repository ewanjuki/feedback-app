import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext({
  feedback: [],
  itemToEdit: null,
  onAddFeedbackItem: (item) => {},
  onDeleteFeedbackItem: (id) => {},
  onUpdateFeedbackItem: (id, item) => {},
  onSetItemToEdit: (item) => {},
});

const initialFeedback = [
  {
    id: 1,
    rating: 10,
    text: "This is feedback item 1",
  },
  {
    id: 2,
    rating: 9,
    text: "This is feedback item 2",
  },
  {
    id: 3,
    rating: 7,
    text: "This is feedback item 3",
  },
];

export const FeedbackProvider = (props) => {
  const [feedback, setFeedback] = useState(initialFeedback);
  const [itemToEdit, setItemToEdit] = useState(null);

  const addFeedbackItemHandler = (item) => {
    const newItem = {
      id: uuidv4(),
      ...item,
    };
    setFeedback((prevState) => [newItem, ...prevState]);
  };

  const deleteFeedbackItemHandler = (id) => {
    setFeedback((prevState) => prevState.filter((item) => item.id !== id));
  };

  const updateFeedbackItemHandler = (id, item) => {
    setFeedback((prevState) =>
      prevState.map((curItem) =>
        curItem.id === id ? { ...curItem, ...item } : curItem
      )
    );
    setItemToEdit(null);  
  };

  const setItemToEditHandler = (item) => setItemToEdit(item);

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        itemToEdit,
        onAddFeedbackItem: addFeedbackItemHandler,
        onDeleteFeedbackItem: deleteFeedbackItemHandler,
        onUpdateFeedbackItem: updateFeedbackItemHandler,
        onSetItemToEdit: setItemToEditHandler,
      }}
    >
      {props.children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
