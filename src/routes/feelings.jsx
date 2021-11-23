import {  
  Outlet,
  useSearchParams
} from "react-router-dom";
import QueryNavLink from "./QueryNavLink";
import { getFeelings } from "../data";

export default function Feelings() {
  let feelings = getFeelings();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem"
        }}
      >
        <input
          value={searchParams.get("filter") || ""}
          onChange={event => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {feelings
          .filter(feeling => {
            let filter = searchParams.get("filter");
            if(!filter) return true;
            let name = feeling.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map(feeling => (
          <QueryNavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : ""
              };
            }}
            to={`/feelings/${feeling.number}`}
            key={feeling.number}
          >
            {feeling.name}
          </QueryNavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}