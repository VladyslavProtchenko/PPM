import { create } from "zustand";
import { ICandidates } from "../../types/Types";
import { persist, devtools } from "zustand/middleware";

export const useCandidate = create<ICandidates>()(
  devtools(
    persist(
      (set) => ({
        candidates: {
          candidate: {
            id: 0,
            name: "",
            lastName: "",
            email: "",
            phone: "",
            extraContact: "",
            messenger: "",
            message: "",
            cv: null,
            vacancyTitle: "",
            vacancyId: 0,
          },
          list: [],
          activeVacancy: {
            title: "",
            id: 0,
          },
        },
        setActiveVacancy: (data) =>
          set((state) => ({
            candidates: { ...state.candidates, activeVacancy: data },
          })),
        setCandidate: (data) =>
          set((state) => ({
            candidates: {
              ...state.candidates,
              list: [data, ...state.candidates.list],
            },
          })),
      }),
      {
        name: "candidates",
      }
    )
  )
);
