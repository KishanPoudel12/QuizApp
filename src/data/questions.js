const questions = [
  {
    id: 0,
    question:
      "What is the time complexity of searching for an element in a balanced binary search tree (BST)?",
    options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
    answer: "O(log n)",
  },
  {
    id: 1,
    question: "What is the difference between a process and a thread?",
    options: [
      "A process is lightweight, a thread is heavy",
      "A thread is a lightweight unit of execution within a process",
      "A process is a function, a thread is a variable",
      "There is no difference",
    ],
    answer: "A thread is a lightweight unit of execution within a process",
  },
  {
    id: 2,
    question: "What is normalization in a relational database?",
    options: [
      "It increases data redundancy",
      "It removes duplicate data and improves database efficiency",
      "It speeds up queries by adding duplicate data",
      "It removes all tables from a database",
    ],
    answer: "It removes duplicate data and improves database efficiency",
  },
  {
    id: 3,
    question: "What is the difference between TCP and UDP?",
    options: [
      "TCP is faster than UDP",
      "UDP is connection-oriented, TCP is connectionless",
      "TCP ensures reliable data transmission, UDP does not",
      "Both TCP and UDP are the same",
    ],
    answer: "TCP ensures reliable data transmission, UDP does not",
  },
  {
    id: 4,
    question: "Which of the following is an example of recursion?",
    options: [
      "A loop iterating over an array",
      "A function calling itself",
      "Using an if-else condition",
      "A variable storing a value",
    ],
    answer: "A function calling itself",
  },
];

export default questions;
