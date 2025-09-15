export type ClassData = {
  _id: string;
  name: string;
  studentNumber: number;
  amount: number;
  ageLimitMin: number;
  ageLimitMax: number;
};

export type Province = { _id: string; name: string };

export type FormValue = {
  location: string;
  trainingType: string;
  schoolName: string;
  teamName: string;
  firstNames: string[];
  lastNames: string[];
  teacherName: string;
  ages: string;
  contactPhone: string;
};
