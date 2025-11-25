const API_BASE_URL = 'http://localhost:8080';

export const focusAPI = {
  getAll: async (page = 0, size = 15) => {
    const response = await fetch(`${API_BASE_URL}/focuses?page=${page}&size=${size}&sort=title`);
    if (!response.ok) throw new Error('Failed to fetch focuses');
    return response.json();
  },

  getById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/focuses/${id}`);
    if (!response.ok) throw new Error('Failed to fetch focus');
    return response.json();
  },

  create: async (data) => {
    const response = await fetch(`${API_BASE_URL}/focuses`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Failed to create focus');
    return response.json();
  },

  update: async (data) => {
    const response = await fetch(`${API_BASE_URL}/focuses`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Failed to update focus');
    return response.json();
  },

  delete: async (id) => {
    const response = await fetch(`${API_BASE_URL}/focuses/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error('Failed to delete focus');
    return response.status === 204;
  }
};

export const taskAPI = {
  getAll: async (focusId, page = 0, size = 15) => {
    const response = await fetch(`${API_BASE_URL}/focuses/${focusId}/tasks?page=${page}&size=${size}&sort=title`);
    if (!response.ok) throw new Error('Failed to fetch tasks');
    return response.json();
  },

  getById: async (focusId, taskId) => {
    const response = await fetch(`${API_BASE_URL}/focuses/${focusId}/tasks/${taskId}`);
    if (!response.ok) throw new Error('Failed to fetch task');
    return response.json();
  },

  create: async (focusId, data) => {
    const response = await fetch(`${API_BASE_URL}/focuses/${focusId}/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Failed to create task');
    return response.json();
  },

  update: async (focusId, data) => {
    const response = await fetch(`${API_BASE_URL}/focuses/${focusId}/tasks`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Failed to update task');
    return response.json();
  },

  delete: async (focusId, taskId) => {
    const response = await fetch(`${API_BASE_URL}/focuses/${focusId}/tasks/${taskId}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error('Failed to delete task');
    return response.status === 204;
  }
};