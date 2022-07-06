function RatingSelect(props) {
  const { selected, onSelect } = props;

  const ratingChangeHandler = (e) => {
    onSelect(+e.target.value);
  };

  return (
    <ul className="rating">
      {Array.from({ length: 10 }).map((_, i) => (
        <li key={i}>
          <input
            type="radio"
            name="rating"
            id={`num-${i + 1}`}
            value={i + 1}
            checked={selected === i + 1}
            onChange={ratingChangeHandler}
          />
          <label htmlFor={`num-${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  );
}

export default RatingSelect;
