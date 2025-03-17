export type TypeFAQDetails = {
  question: string;
  answer: string;
};
export const FAQ_DETAILS: TypeFAQDetails[] = [
  {
    question: "What is a credit and how does it work?",
    answer:
      "A credit is a unit that allows you to generate one 3D model using Buu AI. Each new model costs 1 credit, and credits are included in all plans, resetting monthly.",
  },
  {
    question: "How many credits do I need for a generation or retry?",
    answer:
      "Single Generation: 1 credit. Retry (generates 4 new models): 4 credits.",
  },
  {
    question: "Is there a free trial for paid plans?",
    answer:
      "Yes, we offer a 7-day free trial for all paid plans with 20 credits to test premium features before subscribing.",
  },
  {
    question: "What if I need more features than the standard plans offer?",
    answer:
      "Our custom Enterprise Plan is designed for high-volume or specialized needs. Contact our sales team for a tailored solution.",
  },
  {
    question: "How does Buu AI ensure the quality of generated 3D models?",
    answer:
      "We use advanced AI trained on diverse datasets, plus pre-trained custom styles, to deliver high-quality 3D models that seamlessly fit your projects.",
  },
];
