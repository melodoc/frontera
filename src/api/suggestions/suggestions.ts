export const courseListRes = {
  status: {
    code: 0,
  },
  courseList: [
    {
      label: "React",
      id: 1,
      imageSrc: "remote-assets/images/suggestions/sg-course-1.jpg",
    },
    {
      label: "CI/CD",
      id: 2,
      imageSrc: "remote-assets/images/suggestions/sg-course-2.jpg",
    },
    {
      label: "Изучаем JS",
      id: 3,
      imageSrc: "remote-assets/images/suggestions/sg-course-3.jpg",
    },
    {
      label: "git",
      id: 4,
      imageSrc: "remote-assets/images/suggestions/sg-course-4.jpg",
    },
  ],
};

export const courseListErr = {
  status: {
    code: 2,
  },
  errors: [
    {
      field: "suggestions",
      text: "Failed to set values",
    },
  ],
};
