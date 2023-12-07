const STATUS_ON_DECK = { id: 1, name: "On Deck", color: "blue.300" };
const STATUS_IN_PROGRESS = {
  id: 2,
  name: "In Progress",
  color: "yellow.400",
};
const STATUS_TESTING = { id: 3, name: "Testing", color: "pink.300" };
const STATUS_DEPLOYED = { id: 4, name: "Deployed", color: "green.300" };
export const STATUSES = [
  STATUS_ON_DECK,
  STATUS_IN_PROGRESS,
  STATUS_TESTING,
  STATUS_DEPLOYED,
];

const DATA = [
  {
    _id: "7890eba18c8ca9d92f6e67a2",
    taskDesc: "Build a mern todoList",
    priority: "P400",
    owner: "Winny Wu",
    department: "RD",
    complete: true,
    taskDeadline: "20231207",
  },
  {
    _id: "7890eba18c8ca9d92f6e67a2",
    taskDesc: "Build a mern todoList",
    priority: "P32",
    owner: "Winny Wu",
    department: "RD",
    complete: true,
    taskDeadline: "20231207",
  },
];

// const DATA = [
//   {
//     task: "Add a New Feature",
//     status: STATUS_ON_DECK,
//     due: new Date("2023/10/15"),
//     notes: "This is a note",
//   },
//   {
//     task: "Write Integration Tests",
//     status: STATUS_IN_PROGRESS,
//     due: null,
//     notes: "Use Jest",
//   },
//   {
//     task: "Add Instagram Integration",
//     status: STATUS_DEPLOYED,
//     due: null,
//     notes: "",
//   },
//   {
//     task: "Cleanup Database",
//     status: null,
//     due: new Date("2023/02/15"),
//     notes: "Remove old data",
//   },
//   {
//     task: "Refactor API Endpoints",
//     status: STATUS_TESTING,
//     due: null,
//     notes: "",
//   },
//   {
//     task: "Add Documentation to API",
//     status: null,
//     due: new Date("2023/09/12"),
//     notes: "Add JS Docs to all endpoints",
//   },
//   {
//     task: "Update NPM Packages",
//     status: STATUS_IN_PROGRESS,
//     due: null,
//     notes: "Upgrade React & Chakra UI",
//   },
// ];

export default DATA;
