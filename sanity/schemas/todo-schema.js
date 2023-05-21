const todo = {
  title: "Todos",
  name: "todo",
  type: "document",
  fields: [
    {
      title: "Details",
      name: "details",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: { source: "details" },
    },
    {
      title: "Task completed?",
      name: "completed",
      type: "boolean",
    },
  ],
};


export default todo;