interface ICourse {
  id: number;
  name: string;
  desciption: string;
  lessons: number;
  price: null | number;
  plan: { title: string; subheads: { title: string; hour: string }[] }[];
  filename: string;
  fileUrl: string;
  mimetype: string;
}
