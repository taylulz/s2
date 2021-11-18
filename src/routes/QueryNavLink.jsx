import { useLocation, NavLink, useSearchParams } from "react-router-dom";

function QueryNavLink({ to, ...props }) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}

// useLocation, like useSearchParams, returns a location that tells us info about the URL. a location look something like this:

// {
//   pathame: "/invoices",
//   search: "?filter=sa",
//   hash: "",
//   state: null,
//   key: "ae4cz2j"
// }

export default QueryNavLink