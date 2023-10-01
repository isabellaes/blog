interface blogpost {
  title: string;
  content: string;
  date: string;
  img?: string;
  comments?: comment[];
  category: category;
}

interface comment {
  name: string;
  email: string;
  comment: string;
}

interface category {
  name: string;
}

export const categorys: category[] = [
  { name: "Allmänt" },
  { name: "Dagbok" },
  { name: "Foton" },
];

export const blogposts: blogpost[] = [
  {
    title: "Inlägg 1",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
    date: "2023-02-08",
    category: categorys[0],
    comments: [{ name: "123", email: "123", comment: "123" }],
  },
  {
    title: "Inlägg 2",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
    date: "2023-02-08",
    category: categorys[0],
  },
  {
    title: "Inlägg 3",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
    date: "2023-02-08",
    category: categorys[0],
  },
  {
    title: "Inlägg 4",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
    date: "2023-02-08",
    category: categorys[0],
  },
  {
    title: "Inlägg 5",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
    date: "2023-02-08",
    category: categorys[0],
  },
  {
    title: "Inlägg 6",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
    date: "2022-02-08",
    category: categorys[0],
  },
  {
    title: "Inlägg 2",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
    date: "2022-02-08",
    category: categorys[0],
  },
  {
    title: "Inlägg 3",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
    date: "2022-02-08",
    category: categorys[0],
  },
  {
    title: "Inlägg 4",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
    date: "2022-02-08",
    category: categorys[0],
  },
  {
    title: "Inlägg 5",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
    date: "2023-02-08",
    category: categorys[1],
  },
  {
    title: "Inlägg 1",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
    date: "2023-02-08",
    category: categorys[1],
  },
  {
    title: "Inlägg 2",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
    date: "2021-02-08",
    category: categorys[1],
  },
  {
    title: "Inlägg 3",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
    date: "2023-02-08",
    category: categorys[1],
  },
  {
    title: "Inlägg 4",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
    date: "2023-02-08",
    category: categorys[2],
  },
  {
    title: "Inlägg 5",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
    date: "2023-02-08",
    category: categorys[2],
  },
];

export type { blogpost, category };
