import { create } from "zustand";
import { IContent } from "../../types/Types";

type State = {
  content: IContent[];
  setContent: (data: IContent[]) => void;
};

export const useMainPage = create<State>()((set) => ({
  content: [
    {
      section: 1,
      title: "PROPEL EM",
      title2: "",
      text: "Taking your ideas to new heights",
      text2: "",
    },
    {
      section: 2,
      title: "Let Propel Elevate Your Brand And Power Your Online Presence",
      title2: "",
      text: "Are you ready to take your business to the next level? Propel is here to help! With our extensive experience in marketing, business coaching, strategic planning, and workplace solutions, we have helped numerous recognized brands achieve success. By working with Propel, you'll have access to our Founder and a network of top-tier consultants who will help you power your online presence and elevate your brand. Whether you need help with social media, website design, or overall business strategy, we've got you covered.",
      text2: "",
    },
    {
      section: 3,
      title: "Considering to implement",
      title2: "strategic marketing?",
      text: "It's a smart move!",
      text2:
        "Sell smarter by really understanding your customers, identifying what makes your product or service unique, setting achievable goals, and creating a game plan to reach the right people in the right way.",
    },
    {
      section: 4,
      title: "Revolutionize Your Workplace with Innovative Solutions!",
      title2: "",
      text: "As a business owner, outsourcing your recruitment and hiring process can bring numerous benefits. First, it allows you to focus on your core business operations while leaving the staffing-related tasks to the experts. Second, staffing solutions providers can help you mitigate the risks associated with hiring, such as high turnover rates, legal issues, and training costs.",
      text2:
        "Our HR solutions can include recruiting, screening, and hiring candidates, as well as providing onboarding, training, recruitment, and workforce planning.",
    },
    {
      section: 5,
      title: "Coaching is a must-have.",
      title2: "",
      text: "Investing in business coaching is investing in yourself and your business. It's a proven way to accelerate your growth, improve your performance, and achieve your goals. Don't wait any longer to take your business to the next level - hire a business coach today and unlock your full potential!",
      text2: "",
    },
    {
      section: 6,
      title: "A Proven Track Record For Success",
      title2: "",
      text: "As our Founder, Tatiana brings over two decades of experience in digital marketing, brand strategy, and social media management to help businesses achieve their goals. She has a proven track record of success in developing effective campaigns for a variety of clients, including well-known brands such as BMW, Kia, Hyundai, Volvo, Suzuki, Honda, Acura, British American Tobacco, Lennar Homes, Palomar Residences, OMNI Residences, and Southern California Edison.",
      text2:
        "Tatiana and her team of industry-specific experts can help propel your brand to new heights. Their approach is collaborative, transparent, and results-driven, providing the highest level of service to clients.",
    },
  ],
  setContent: (data) => set(() => ({ content: [...data] })),
}));
