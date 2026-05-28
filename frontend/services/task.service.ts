import API from "@/lib/axios";

export const createTask = async (data: any) => {
  const response = await API.post("/tasks", data);

  return response.data;
};

export const getTasks = async (workspaceId: string) => {
  const response = await API.get(`/tasks/${workspaceId}`);

  return response.data;
};