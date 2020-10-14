let mockTasks = [];

export const fetchTasks = jest.fn(async () => mockTasks);

export const setMockTasks = (tasks) => {
  mockTasks = tasks;
};
