export type Student = {
  id: number;
  name: string;
  age: number;
  className: string;
  school: string;
  email: string;
  status: string;
  avatar: string;
  device: string;

  screenTime: string;
  screenGoal: string;

  blockedContent: number;
  threats: number;

  wellbeing: number;

  educationalFocus: string;
  chatSentiment: string;
  bedtime: string;
};

export const students: Student[] = [
  {
    id: 1,
    name: "Maya Jenkins",
    age: 9,
    className: "4A",
    school: "Greenwood High School",
    email: "maya.jenkins@example.com",
    status: "Active",
    avatar: "MJ",
    device: "Chromebook 11",

    screenTime: "3h 12m",
    screenGoal: "5h 00m",

    blockedContent: 12,
    threats: 2,

    wellbeing: 88,

    educationalFocus: "STEM and educational learning",
    chatSentiment: "Positive",
    bedtime: "9:00 PM",
  },

  {
    id: 2,
    name: "Leo Jenkins",
    age: 12,
    className: "7B",
    school: "Greenwood High School",
    email: "leo.jenkins@example.com",
    status: "Active",
    avatar: "LJ",
    device: 'iPad Pro 11"',

    screenTime: "4h 05m",
    screenGoal: "5h 00m",

    blockedContent: 18,
    threats: 4,

    wellbeing: 79,

    educationalFocus: "Mathematics and coding",
    chatSentiment: "Neutral",
    bedtime: "9:30 PM",
  },

  {
    id: 3,
    name: "Sam Jenkins",
    age: 15,
    className: "10A",
    school: "Greenwood High School",
    email: "sam.jenkins@example.com",
    status: "Active",
    avatar: "SJ",
    device: "MacBook Air M2",

    screenTime: "4h 48m",
    screenGoal: "5h 00m",

    blockedContent: 27,
    threats: 7,

    wellbeing: 72,

    educationalFocus: "Programming and science",
    chatSentiment: "Needs attention",
    bedtime: "10:00 PM",
  },
];

export const parent = {
  name: "Sarah Jenkins",
  avatar: "SJ",
  role: "Primary Guardian",
  accountType: "Parent Account",
};