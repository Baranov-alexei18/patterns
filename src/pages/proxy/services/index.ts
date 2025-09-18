export class ApiFacade {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  private async request<T>(url: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`${this.baseUrl}${url}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return response.json() as Promise<T>;
  }

  getUser(userId: number) {
    return this.request<{ id: number; name: string }>(`/users/${userId}`);
  }

  createUser(name: string) {
    return this.request<{ id: number; name: string }>(`/users`, {
      method: 'POST',
      body: JSON.stringify({ name }),
    });
  }

  deleteUser(userId: number) {
    return this.request<{ success: boolean }>(`/users/${userId}`, {
      method: 'DELETE',
    });
  }
}
