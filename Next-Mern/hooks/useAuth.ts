import { create } from 'zustand';

interface AuthState {
  jwt: string;
  loader: boolean;
  setLoader: (loader: boolean) => void;
  setJwt: (jwt: string) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  jwt: '',
  loader: false,
  setLoader: (loader) => set({ loader }),
  setJwt: (jwt) => set({ jwt }),
}));

export default useAuthStore;
