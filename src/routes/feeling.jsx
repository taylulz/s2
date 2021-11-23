import { useParams, useNavigate } from "react-router";
import { getFeeling, deleteFeeling } from "../data";

export default function Feeling() {
  let navigate = useNavigate();
  let params = useParams();
  let feeling = getFeeling(parseInt(params.feelingId, 10));
  
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {feeling.amount}</h2>
      <p>
        {feeling.name}: {feeling.number}
      </p>
      <p>Due Date: {feeling.due}</p>
      <p>
        <button
          onClick={() => {
            deleteFeeling(feeling.number);
            navigate("/feelings");
            // navigate("/needs");
          }}
        >
          Delete
        </button>
      </p>
    </main>
  );
}