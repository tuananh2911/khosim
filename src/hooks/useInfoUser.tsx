import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface IUser {
  isAdmin: boolean;
}
interface IUserState {
  user: IUser;
  setUser: (user: IUser) => void;
  deleteUser: () => void;
}
export const useInfoUser = create(
  persist<IUserState>(
    (set, get) => ({
      user: {
        isAdmin: false,
      },
      setUser: (user: IUser) => {
        set({ user });
      },
      deleteUser: () => {
        set({ user: { isAdmin: false } });
      },
    }),
    {
      name: "user",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
