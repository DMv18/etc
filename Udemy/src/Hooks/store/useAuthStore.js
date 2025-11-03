import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import {login as loginService, register as registerService, getCurrentUser} from '../../Services/auth/authService.js';


export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      isHydrated: false,

      login: async (email, password) => {
        const data = await loginService(email, password);
        set({ user: data });
        return data;
      },

      register: async (email, password) => {
        const data = await registerService(email, password);
        if(data?.success){
          set({ user: data });
        }
        return data;
      },

      logout: () => {
        set({ user: null });
        get().__store?.persist?.destroy?.();
        localStorage.removeItem('auth-storage');
      },

      loadUser: async () => {
        const data = await getCurrentUser();
        set({ user: data });
        return data || null;
      }
    }),
    {
      name: 'auth-storage', 
      getStorage: () => localStorage,
      onRehydrateStorage: () => {
        return (error) => {
          if (!error) {
            set({ isHydrated: true });
          }
        };
      }
    }
  )
);
