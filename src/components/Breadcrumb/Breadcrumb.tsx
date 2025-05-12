// import { Link, useLocation } from "react-router-dom";

// const excludedPaths = ["a", "acl"];
// const unclickablePaths = [
//   "technical-questionnaire",
//   "calendar-view",
//   "building-referral-form",
//   "analytics",
//   "asset",
//   "assets",
//   "deals",
// ];

// // Format "user-profile" → "User Profile"
// const formatSegment = (segment: string) => {
//   return segment
//     .split("-")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// };

// // Check if segment is a MongoDB ObjectId
// const isMongoId = (segment: string) => /^[a-f\d]{24}$/i.test(segment);

// // Check if segment starts with a digit
// const startsWithNumber = (segment: string) => /^\d/.test(segment);

// const Breadcrumbs = () => {
//   const location = useLocation();
//   const fullPathSegments = location.pathname.split("/").filter(Boolean);

//   // Filter out excluded segments
//   let visibleSegments = fullPathSegments.filter(
//     (x) => !excludedPaths.includes(x)
//   );

//   // Remove last segment if it is a MongoDB ObjectId or starts with a digit
//   const last = visibleSegments[visibleSegments.length - 1];
//   if (last && (isMongoId(last) || startsWithNumber(last))) {
//     visibleSegments = visibleSegments.slice(0, -1);
//   }

//   return (
//     <nav className="bg-gray-100 rounded-md p-2 text-lg w-full">
//       <ul className="flex flex-wrap items-center space-x-2 text-gray-600">
//         <li>
//           <Link to="/" className="text-blue-600 hover:underline">
//             Home
//           </Link>
//         </li>

//         {visibleSegments.map((segment, index) => {
//           const realIndex = fullPathSegments.findIndex(
//             (x) => x === segment && !visibleSegments.slice(0, index).includes(x)
//           );

//           const to = `/${fullPathSegments.slice(0, realIndex + 1).join("/")}`;
//           const isLast = index === visibleSegments.length - 1;
//           const formatted = formatSegment(segment);
//           const isUnclickable = unclickablePaths.includes(segment);

//           return (
//             <li key={to} className="flex items-center space-x-2">
//               <span className="text-gray-400">›</span>
//               {isLast || isUnclickable ? (
//                 <span
//                   className={` ${isLast ? "text-gray-900 font-semibold" : "text-gray-500"
//                     }`}
//                 >
//                   {formatted}
//                 </span>
//               ) : (
//                 <Link to={to} className="text-blue-600 hover:underline">
//                   {formatted}
//                 </Link>
//               )}
//             </li>
//           );
//         })}
//       </ul>
//     </nav>
//   );
// };

// export default Breadcrumbs;

// import { Link, useLocation } from "react-router-dom";

// const excludedPaths = ["a", "acl", "buildingDetails"];
// const unclickablePaths = [
//   "technical-questionnaire",
//   "calendar-view",
//   "building-referral-form",
//   "analytics",
//   "asset",
//   "assets",
//   // "deals",
//   "referral-form",
//   "invitation-form",
//   "deal-overview",
//   "asset-details",
//   "market-intelligence",
//   "technical-details",
//   "proforma-overview",
//   "location",
//   "compliances",
//   "deal-memo",
//   "l1",
//   "scorecard",
//   "overview"
// ];

// // Decode URI, replace _ and -, capitalize words
// const formatSegment = (segment: string) => {
//   const decoded = decodeURIComponent(segment);
//   return decoded
//     .split(/[-_ ]+/) // split by hyphen, underscore, or space
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// };

// // Check if segment is a MongoDB ObjectId
// const isMongoId = (segment: string) => /^[a-f\d]{24}$/i.test(segment);

// // Check if segment starts with a digit
// const startsWithNumber = (segment: string) => /^\d/.test(segment);

// const Breadcrumbs = () => {
//   const location = useLocation();
//   const fullPathSegments = location.pathname.split("/").filter(Boolean);

//   // Filter out excluded segments
//   let visibleSegments = fullPathSegments.filter(
//     (x) => !excludedPaths.includes(x)
//   );

//   // Remove last segment if it is a MongoDB ObjectId or starts with a digit
//   const last = visibleSegments[visibleSegments.length - 1];
//   if (last && (isMongoId(last) || startsWithNumber(last))) {
//     visibleSegments = visibleSegments.slice(0, -1);
//   }

//   return (
//     <nav className="bg-gray-100 rounded-md p-2 text-lg w-full">
//       <ul className="flex flex-wrap items-center space-x-2 text-gray-600">
//         <li>
//           <Link to="/" className="text-blue-600 hover:underline">
//             Home
//           </Link>
//         </li>

//         {visibleSegments.map((segment, index) => {
//           const realIndex = fullPathSegments.findIndex(
//             (x) => x === segment && !visibleSegments.slice(0, index).includes(x)
//           );

//           const to = `/${fullPathSegments.slice(0, realIndex + 1).join("/")}`;
//           const isLast = index === visibleSegments.length - 1;
//           const formatted = formatSegment(segment);
//           const isUnclickable = unclickablePaths.includes(segment);

//           return (
//             <li key={to} className="flex items-center space-x-2">
//               <span className="text-gray-400">›</span>
//               {isLast || isUnclickable ? (
//                 <span
//                   className={`${isLast ? "text-gray-900 font-semibold" : "text-gray-500"
//                     }`}
//                 >
//                   {formatted}
//                 </span>
//               ) : (
//                 <Link to={to} className="text-blue-600 hover:underline">
//                   {formatted}
//                 </Link>
//               )}
//             </li>
//           );
//         })}
//       </ul>
//     </nav>
//   );
// };

// export default Breadcrumbs;

// import { Link, useLocation } from "react-router-dom";

// const excludedPaths = ["a", "acl", "DLF Downtown_CHN", "buildingDetails"];
// const unclickablePaths = [
//   "technical-questionnaire",
//   "calendar-view",
//   "building-referral-form",
//   "analytics",
//   "asset",
//   "assets",
//   // "deals",
//   "referral-form",
//   "ext",
//   "invitation-form",
//   "deal-overview",
//   "asset-details",
//   "market-intelligence",
//   "technical-details",
//   "proforma-overview",
//   "location",
//   "compliances",
//   "deal-memo",
//   "l1",
//   "scorecard",
//   "overview"

// ];

// // Decode URI, replace _ and -, capitalize words
// const formatSegment = (segment: string) => {
//   const decoded = decodeURIComponent(segment);
//   return decoded
//     .split(/[-_ ]+/)
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// };

// // Check if segment is a MongoDB ObjectId
// const isMongoId = (segment: string) => /^[a-f\d]{24}$/i.test(segment);

// // Check if segment starts with a digit
// const startsWithNumber = (segment: string) => /^\d/.test(segment);

// const Breadcrumbs = () => {
//   const location = useLocation();
//   const fullPathSegments = location.pathname.split("/").filter(Boolean);

//   // Exclude if decoded segment exactly matches an excluded path
//   let visibleSegments = fullPathSegments.filter((segment) => {
//     const decoded = decodeURIComponent(segment);
//     return !excludedPaths.includes(decoded);
//   });

//   // Remove last segment if it's a MongoDB ObjectId or starts with a digit
//   const last = visibleSegments[visibleSegments.length - 1];
//   if (last && (isMongoId(last) || startsWithNumber(last))) {
//     visibleSegments = visibleSegments.slice(0, -1);
//   }

//   return (
//     <nav className="bg-gray-100 rounded-md p-2 text-lg w-full">
//       <ul className="flex flex-wrap items-center space-x-2 text-gray-600">
//         <li>
//           <Link to="/" className="text-blue-600 hover:underline">
//             Home
//           </Link>
//         </li>

//         {visibleSegments.map((segment, index) => {
//           const realIndex = fullPathSegments.findIndex(
//             (x) => x === segment && !visibleSegments.slice(0, index).includes(x)
//           );

//           const to = `/${fullPathSegments.slice(0, realIndex + 1).join("/")}`;
//           const isLast = index === visibleSegments.length - 1;
//           const formatted = formatSegment(segment);
//           const isUnclickable = unclickablePaths.includes(segment);

//           return (
//             <li key={to} className="flex items-center space-x-2">
//               <span className="text-gray-400">›</span>
//               {isLast || isUnclickable ? (
//                 <span
//                   className={`${isLast ? "text-gray-900 font-semibold" : "text-gray-500"
//                     }`}
//                 >
//                   {formatted}
//                 </span>
//               ) : (
//                 <Link to={to} className="text-blue-600 hover:underline">
//                   {formatted}
//                 </Link>
//               )}
//             </li>
//           );
//         })}
//       </ul>
//     </nav>
//   );
// };

// export default Breadcrumbs;

// ...rest of your imports
import { Link, useLocation } from "react-router-dom";

const excludedPaths = [
  "a",
  "acl",
  "DLF Downtown_CHN",
  "buildingDetails",
  "ext",
];
const unclickablePaths = [
  "technical-questionnaire",
  "calendar-view",
  "building-referral-form",
  "analytics",
  "asset",
  "assets",
  "referral-form",
  "ext",
  "invitation-form",
  "deal-overview",
  "asset-details",
  "market-intelligence",
  "technical-details",
  "proforma-overview",
  "location",
  "compliances",
  "deal-memo",
  "l1",
  "scorecard",
  "overview",
  "form-approval",
  "internal-review",
  "external",
];

// Decode URI, replace _ and -, capitalize words
const formatSegment = (segment: string) => {
  const decoded = decodeURIComponent(segment);
  return decoded
    .split(/[-_ ]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const isMongoId = (segment: string) => /^[a-f\d]{24}$/i.test(segment);
const startsWithNumber = (segment: string) => /^\d/.test(segment);
const isEncoded = (segment: string) => decodeURIComponent(segment) !== segment;

const Breadcrumbs = () => {
  const location = useLocation();
  const fullPathSegments = location.pathname.split("/").filter(Boolean);

  let visibleSegments = fullPathSegments.filter((segment) => {
    const decoded = decodeURIComponent(segment);
    return !excludedPaths.includes(decoded);
  });

  const last = visibleSegments[visibleSegments.length - 1];
  if (last && (isMongoId(last) || startsWithNumber(last) || isEncoded(last))) {
    visibleSegments = visibleSegments.slice(0, -1);
  }

  return (
    <nav className="bg-gray-100 rounded-md p-2 text-lg w-full">
      <ul className="flex flex-wrap items-center space-x-2 text-gray-600">
        <li>
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
        </li>

        {visibleSegments.map((segment, index) => {
          const realIndex = fullPathSegments.findIndex(
            (x) => x === segment && !visibleSegments.slice(0, index).includes(x)
          );

          const to = `/${fullPathSegments.slice(0, realIndex + 1).join("/")}`;
          const isLast = index === visibleSegments.length - 1;
          const formatted = formatSegment(segment);
          const isUnclickable = unclickablePaths.includes(segment);

          return (
            <li key={to} className="flex items-center space-x-2">
              <span className="text-gray-400">›</span>
              {isLast || isUnclickable ? (
                <span
                  className={`${isLast ? "text-gray-900 font-semibold" : "text-gray-500"}`}
                >
                  {formatted}
                </span>
              ) : (
                <Link to={to} className="text-blue-600 hover:underline">
                  {formatted}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
