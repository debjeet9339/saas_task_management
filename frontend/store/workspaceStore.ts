import { create } from "zustand";

interface WorkspaceStore {
  workspaces: any[];
  setWorkspaces: (workspaces: any[]) => void;
}

export const useWorkspaceStore = create<WorkspaceStore>((set) => ({
  workspaces: [],

  setWorkspaces: (workspaces) => set({ workspaces }),
}));