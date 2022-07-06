import { useContext } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "../../store/feedback-context";
import Card from "../UI/Card";

function FeedbackItem(props) {
  const { onDeleteFeedbackItem, onSetItemToEdit } = useContext(FeedbackContext);

  const { item } = props;

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="edit" onClick={() => onSetItemToEdit(item)}>
        <FaEdit color="purple" />
      </button>
      <button className="close" onClick={() => onDeleteFeedbackItem(item.id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
