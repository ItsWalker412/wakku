import { create } from 'zustand';

export type TransitionType =
  | "fade"
  | "slide"
  | "scale"
  | "blur"
  | "morph"
  | "wipe"
  | "glitch"
  | "split";

interface TransitionState {
  isTransitioning: boolean;
  shouldAnimateIn: boolean;
  transitionType: TransitionType;
  startTransition: () => void;
  endTransition: () => void;
  setTransitionType: (type: TransitionType) => void;
  completeTransitionOut: () => void;
  completeTransitionIn: () => void;
  resetTransition: () => void;
}

export const useTransitionStore = create<TransitionState>((set) => ({
  isTransitioning: false,
  shouldAnimateIn: false,
  transitionType: "fade",
  
  startTransition: () => set({ 
    isTransitioning: true,
    shouldAnimateIn: false 
  }),

  endTransition: () => set({
    isTransitioning: false,
    shouldAnimateIn: false,
  }),

  setTransitionType: (type) => set({ transitionType: type }),
  
  completeTransitionOut: () => set({ 
    shouldAnimateIn: true 
  }),
  
  completeTransitionIn: () => set({ 
    isTransitioning: false,
    shouldAnimateIn: false 
  }),
  
  resetTransition: () => set({ 
    isTransitioning: false,
    shouldAnimateIn: false 
  }),
}));