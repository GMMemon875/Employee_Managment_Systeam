const Employee = [
  {
    id: 1,
    firstName: "Ahmed",
    email: "employee1@example.com",
    password: "123",
    taskCount: { Active: 2, "New Task": 1, Completed: 1, Failed: 0 },
    tasks: [
      {
        Active: true,
        "New Task": true,
        Completed: false,
        Failed: false,
        "Task Title": "Prepare Presentation",
        "Task Description": "Create slides for the monthly review meeting.",
        "Task Date": "2024-11-02",
        "Task Category": "Presentation",
      },
      {
        Active: false,
        "New Task": false,
        Completed: true,
        Failed: false,
        "Task Title": "Team Meeting",
        "Task Description": "Attend the weekly team catch-up meeting.",
        "Task Date": "2024-10-28",
        "Task Category": "Meeting",
      },
      {
        Active: true,
        "New Task": false,
        Completed: false,
        Failed: false,
        "Task Title": "Client Feedback",
        "Task Description":
          "Review and address client feedback for Q3 deliverables.",
        "Task Date": "2024-11-01",
        "Task Category": "Review",
      },
    ],
  },
  {
    id: 2,
    firstName: "Fatima",
    email: "employee2@example.com",
    password: "123",
    taskCount: { Active: 2, "New Task": 1, Completed: 1, Failed: 0 },
    tasks: [
      {
        Active: true,
        "New Task": true,
        Completed: false,
        Failed: false,
        "Task Title": "Code Review",
        "Task Description": "Review PRs submitted for the latest sprint.",
        "Task Date": "2024-11-03",
        "Task Category": "Development",
      },
      {
        Active: true,
        "New Task": false,
        Completed: false,
        Failed: false,
        "Task Title": "Update Documentation",
        "Task Description": "Update API documentation with new changes.",
        "Task Date": "2024-10-31",
        "Task Category": "Documentation",
      },
      {
        Active: false,
        "New Task": false,
        Completed: true,
        Failed: false,
        "Task Title": "Team Workshop",
        "Task Description": "Conduct workshop on new software tools.",
        "Task Date": "2024-10-25",
        "Task Category": "Training",
      },
    ],
  },
  {
    id: 3,
    firstName: "Zain",
    email: "employee3@example.com",
    password: "123",
    taskCount: { Active: 2, "New Task": 1, Completed: 1, Failed: 0 },
    tasks: [
      {
        Active: false,
        "New Task": false,
        Completed: true,
        Failed: false,
        "Task Title": "Client Report",
        "Task Description": "Submit final client report for approval.",
        "Task Date": "2024-10-27",
        "Task Category": "Reporting",
      },
      {
        Active: true,
        "New Task": false,
        Completed: false,
        Failed: false,
        "Task Title": "Data Analysis",
        "Task Description": "Analyze Q3 sales data.",
        "Task Date": "2024-11-05",
        "Task Category": "Analysis",
      },
      {
        Active: true,
        "New Task": true,
        Completed: false,
        Failed: false,
        "Task Title": "Market Research",
        "Task Description": "Gather insights on current market trends.",
        "Task Date": "2024-11-04",
        "Task Category": "Research",
      },
    ],
  },
  {
    id: 4,
    firstName: "Ayesha",
    email: "employee4@example.com",
    password: "123",
    taskCount: { Active: 2, "New Task": 1, Completed: 1, Failed: 0 },
    tasks: [
      {
        Active: true,
        "New Task": false,
        Completed: false,
        Failed: false,
        "Task Title": "Bug Fixes",
        "Task Description": "Resolve critical bugs from user feedback.",
        "Task Date": "2024-11-06",
        "Task Category": "Development",
      },
      {
        Active: true,
        "New Task": true,
        Completed: false,
        Failed: false,
        "Task Title": "Product Demo",
        "Task Description": "Prepare product demo for new clients.",
        "Task Date": "2024-11-01",
        "Task Category": "Demo",
      },
      {
        Active: false,
        "New Task": false,
        Completed: true,
        Failed: false,
        "Task Title": "Internal Training",
        "Task Description": "Participate in cybersecurity training.",
        "Task Date": "2024-10-26",
        "Task Category": "Training",
      },
    ],
  },
  {
    id: 5,
    firstName: "Bilal",
    email: "employee5@example.com",
    password: "123",
    taskCount: { Active: 2, "New Task": 1, Completed: 1, Failed: 0 },
    tasks: [
      {
        Active: true,
        "New Task": true,
        Completed: false,
        Failed: false,
        "Task Title": "Research New Tools",
        "Task Description":
          "Explore potential software for team collaboration.",
        "Task Date": "2024-11-02",
        "Task Category": "Research",
      },
      {
        Active: true,
        "New Task": false,
        Completed: false,
        Failed: false,
        "Task Title": "System Maintenance",
        "Task Description": "Conduct routine system maintenance.",
        "Task Date": "2024-10-30",
        "Task Category": "Maintenance",
      },
      {
        Active: false,
        "New Task": false,
        Completed: true,
        Failed: false,
        "Task Title": "HR Meeting",
        "Task Description": "Discuss annual leave policies.",
        "Task Date": "2024-10-29",
        "Task Category": "Meeting",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalSstorage = () => {
  localStorage.setItem("employees", JSON.stringify(Employee));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const gettLocalSstorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
