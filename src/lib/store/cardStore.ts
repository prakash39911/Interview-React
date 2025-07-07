import { CardDataType } from "@/types/type";
import { create } from "zustand";

type cardStoreType = {
  cards: CardDataType[];
  addCards: (cards: CardDataType[]) => void;
  removeCard: (id: string) => void;
};

const initialState = {
  cards: [],
};

const cardStore = create<cardStoreType>((set) => ({
  ...initialState,
  addCards: (cards) => set(() => ({ cards })),
  removeCard: (id) =>
    set((state) => ({
      cards: state.cards.filter(
        (obj: CardDataType) => obj.id.toString() !== id
      ),
    })),
}));

export { cardStore };
