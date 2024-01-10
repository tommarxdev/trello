import { create } from "zustand"

type UseCardModalStore = {
    id?: string;
    isOpen: boolean;
    onOpen: (id: string) => void;
    onClose: () => void;
};

export const useCardModal = create<UseCardModalStore>((set) => 
({
id: undefined,
isOpen: false,
onOpen: (id: string) => set({ isOpen: true, id }),
onClose: () => set({ isOpen: false, id: undefined }),
}));