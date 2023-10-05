interface blogpost {
  id: number;
  title: string;
  content: string;
  date: string;
  img?: string;
  comments?: comment[];
  category: category;
}

interface comment {
  id: number;
  name: string;
  email: string;
  comment: string;
}

interface category {
  id: number;
  name: string;
}

export const categorys: category[] = [
  { id: 1, name: "Allmänt" },
  { id: 2, name: "Dagbok" },
  { id: 3, name: "Foton" },
];

export const blogposts: blogpost[] = [
  {
    id: 1,
    title: "Inlägg 1",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
    date: "2023-02-08",
    category: categorys[0],
    comments: [{ id: 1, name: "123", email: "123", comment: "123" }],
  },
  {
    id: 2,
    title: "Inlägg 2",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
    date: "2023-02-08",
    category: categorys[0],
  },
  {
    id: 3,
    title: "Inlägg 3",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
    date: "2023-02-08",
    category: categorys[0],
  },
  {
    id: 4,
    title: "Inlägg 4",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
    date: "2023-02-08",
    category: categorys[0],
  },
  {
    id: 5,
    title: "Inlägg 5",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
    date: "2023-02-08",
    category: categorys[0],
  },
  {
    id: 6,
    title: "Inlägg 6",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
    date: "2022-02-08",
    category: categorys[0],
  },
  {
    id: 7,
    title: "Inlägg 2",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
    date: "2022-02-08",
    category: categorys[0],
  },
  {
    id: 7,
    title: "Inlägg 3",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
    date: "2022-02-08",
    category: categorys[0],
  },
  {
    id: 8,
    title: "Inlägg 4",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
    date: "2022-02-08",
    category: categorys[0],
  },
  {
    id: 9,
    title: "Inlägg 5",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
    date: "2023-02-08",
    category: categorys[1],
  },
  {
    id: 10,
    title: "Inlägg 1",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
    date: "2023-02-08",
    category: categorys[1],
  },
  {
    id: 11,
    title: "Inlägg 2",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
    date: "2021-02-08",
    category: categorys[1],
  },
  {
    id: 12,
    title: "Inlägg 3",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
    date: "2023-02-08",
    category: categorys[1],
  },
  {
    id: 13,
    title: "Inlägg 4",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
    date: "2023-02-08",
    category: categorys[2],
  },
  {
    id: 14,
    title: "Inlägg 5",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
    date: "2023-02-08",
    category: categorys[2],
  },
];

export type { blogpost, category, comment };
