import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IMessage } from "../../types/Types";

type State = {
  messages: IMessage[];
  setMessages: (data: IMessage[]) => void;
};

export const useMessages = create<State>()(
  devtools((set) => ({
    messages: [
      {
        id: 0,
        userId: 0,
        text: "Hello, it's me",
        from: "Alex",
        isApproved: false,
      },
      {
        id: 1,
        userId: 1,
        text: "How are you doing?",
        from: "Alex",
        isApproved: true,
      },
      {
        id: 2,
        userId: 2,
        text: "I just wanted to say hi!",
        from: "Alex",
        isApproved: true,
      },
      {
        id: 3,
        userId: 3,
        text: "What's up?",
        from: "Alex",
        isApproved: false,
      },
      {
        id: 4,
        userId: 4,
        text: "I hope you're having a great day!",
        from: "Sonya",
        isApproved: true,
      },
      {
        id: 5,
        userId: 5,
        text: "Is there anything I can help with?",
        from: "Sonya",
        isApproved: true,
      },
      {
        id: 6,
        userId: 6,
        text: "I heard about your recent success. Congratulations!",
        from: "Sonya",
        isApproved: true,
      },
      {
        id: 7,
        userId: 7,
        text: "I need some assistance with a project.",
        from: "Sonya",
        isApproved: false,
      },
      {
        id: 8,
        userId: 8,
        text: "When can we catch up for coffee?",
        from: "Sonya",
        isApproved: false,
      },
      {
        id: 9,
        userId: 9,
        text: "Don't forget to bring the documents to the meeting.",
        from: "Sonya",
        isApproved: true,
      },
      {
        id: 10,
        userId: 10,
        text: "Just checking in to see how you're doing.",
        from: "Sonya",
        isApproved: true,
      },
      {
        id: 11,
        userId: 11,
        text: "Let's plan a team outing for next month.",
        from: "Sonya",
        isApproved: true,
      },
      {
        id: 12,
        userId: 12,
        text: "I have some exciting news to share!",
        from: "Sonya",
        isApproved: false,
      },
      {
        id: 13,
        userId: 13,
        text: "Can you review this code for me?",
        from: "Sonya",
        isApproved: true,
      },
      {
        id: 14,
        userId: 14,
        text: "Thanks for your help yesterday.",
        from: "Sonya",
        isApproved: true,
      },
      {
        id: 15,
        userId: 15,
        text: "I have a question about our upcoming event.",
        from: "Sonya",
        isApproved: false,
      },
      {
        id: 16,
        userId: 16,
        text: "Remember to bring your ID for verification.",
        from: "Sonya",
        isApproved: true,
      },
      {
        id: 17,
        userId: 17,
        text: "We need to finalize the project budget.",
        from: "Sonya",
        isApproved: false,
      },
      {
        id: 18,
        userId: 18,
        text: "Let's meet to discuss the marketing strategy.",
        from: "Sonya",
        isApproved: true,
      },
      {
        id: 19,
        userId: 19,
        text: "Don't forget to send the report by Friday.",
        from: "Sonya",
        isApproved: true,
      },
    ],

    setMessages: (data) => set(() => ({ messages: [...data] })),
  }))
);
