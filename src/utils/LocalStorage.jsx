// localStorage.clear();
const Employee = [
  {
    id: 1,
    firstName: "Ahmed",
    email: "employee1@example.com",
    password: "123",
    taskCount: { Active: 1, NewTask: 1, Completed: 1, Failed: 0 },
    tasks: [
      {
        Active: true,
        NewTask: true,
        Completed: false,
        Failed: false,
        TaskTitle: "Prepare Presentation",
        TaskDescription: "Create slides for the monthly review meeting.",
        TaskDate: "2024-11-02",
        TaskCategory: "Presentation",
      },
      {
        Active: false,
        NewTask: false,
        Completed: true,
        Failed: false,
        TaskTitle: "Team Meeting",
        TaskDescription: "Attend the weekly team catch-up meeting.",
        TaskDate: "2024-10-28",
        TaskCategory: "Meeting",
      },
      {
        Active: true,
        NewTask: false,
        Completed: false,
        Failed: false,
        TaskTitle: "Client Feedback",
        TaskDescription:
          "Review and address client feedback for Q3 deliverables.",
        TaskDate: "2024-11-01",
        TaskCategory: "Review",
      },
    ],
  },
  {
    id: 2,
    firstName: "Fatima",
    email: "employee2@example.com",
    password: "123",
    taskCount: { Active: 1, NewTask: 1, Completed: 1, Failed: 1 },
    tasks: [
      {
        Active: true,
        NewTask: true,
        Completed: false,
        Failed: false,
        TaskTitle: "Code Review",
        TaskDescription: "Review PRs submitted for the latest sprint.",
        TaskDate: "2024-11-03",
        TaskCategory: "Development",
      },
      {
        Active: true,
        NewTask: true,
        Completed: false,
        Failed: false,
        TaskTitle: "Code Review",
        TaskDescription: "Review PRs submitted for the latest sprint.",
        TaskDate: "2024-11-03",
        TaskCategory: "Development",
      },
      {
        Active: true,
        NewTask: false,
        Completed: false,
        Failed: false,
        TaskTitle: "Update Documentation",
        TaskDescription: "Update API documentation with new changes.",
        TaskDate: "2024-10-31",
        TaskCategory: "Documentation",
      },
      {
        Active: false,
        NewTask: false,
        Completed: true,
        Failed: false,
        TaskTitle: "Team Workshop",
        TaskDescription: "Conduct workshop on new software tools.",
        TaskDate: "2024-10-25",
        TaskCategory: "Training",
      },
    ],
  },
  {
    id: 3,
    firstName: "Zain",
    email: "employee3@example.com",
    password: "123",
    taskCount: { Active: 2, NewTask: 1, Completed: 1, Failed: 0 },
    tasks: [
      {
        Active: false,
        NewTask: false,
        Completed: true,
        Failed: false,
        TaskTitle: "Client Report",
        TaskDescription: "Submit final client report for approval.",
        TaskDate: "2024-10-27",
        TaskCategory: "Reporting",
      },
      {
        Active: true,
        NewTask: false,
        Completed: false,
        Failed: false,
        TaskTitle: "Data Analysis",
        TaskDescription: "Analyze Q3 sales data.",
        TaskDate: "2024-11-05",
        TaskCategory: "Analysis",
      },
      {
        Active: true,
        NewTask: true,
        Completed: false,
        Failed: false,
        TaskTitle: "Market Research",
        TaskDescription: "Gather insights on current market trends.",
        TaskDate: "2024-11-04",
        TaskCategory: "Research",
      },
    ],
  },
  {
    id: 4,
    firstName: "Ayesha",
    email: "employee4@example.com",
    password: "123",
    taskCount: { Active: 2, NewTask: 1, Completed: 1, Failed: 0 },
    tasks: [
      {
        Active: true,
        NewTask: false,
        Completed: false,
        Failed: false,
        TaskTitle: "Bug Fixes",
        TaskDescription: "Resolve critical bugs from user feedback.",
        TaskDate: "2024-11-06",
        TaskCategory: "Development",
      },
      {
        Active: true,
        NewTask: true,
        Completed: false,
        Failed: false,
        TaskTitle: "Product Demo",
        TaskDescription: "Prepare product demo for new clients.",
        TaskDate: "2024-11-01",
        TaskCategory: "Demo",
      },
      {
        Active: false,
        NewTask: false,
        Completed: true,
        Failed: false,
        TaskTitle: "Internal Training",
        TaskDescription: "Participate in cybersecurity training.",
        TaskDate: "2024-10-26",
        TaskCategory: "Training",
      },
    ],
  },
  {
    id: 5,
    firstName: "Bilal",
    email: "employee5@example.com",
    password: "123",
    taskCount: { Active: 3, NewTask: 1, Completed: 1, Failed: 0 },
    tasks: [
      {
        Active: true,
        NewTask: true,
        Completed: false,
        Failed: false,
        TaskTitle: "Research New Tools",
        TaskDescription: "Explore potential software for team collaboration.",
        TaskDate: "2024-11-02",
        TaskCategory: "Research",
      },
      {
        Active: true,
        NewTask: false,
        Completed: false,
        Failed: false,
        TaskTitle: "System Maintenance",
        TaskDescription: "Conduct routine system maintenance.",
        TaskDate: "2024-10-30",
        TaskCategory: "Maintenance",
      },
      {
        Active: false,
        NewTask: false,
        Completed: true,
        Failed: false,
        TaskTitle: "HR Meeting",
        TaskDescription: "Discuss annual leave policies.",
        TaskDate: "2024-10-29",
        TaskCategory: "Meeting",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@me.gmail.com",
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
