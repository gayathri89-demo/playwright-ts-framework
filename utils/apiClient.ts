// utils/apiClient.ts

import { APIRequestContext } from '@playwright/test';

export class APIClient {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async get(endpoint: string) {
    return await this.request.get(endpoint, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  async post(endpoint: string, payload: any) {
    return await this.request.post(endpoint, {
      data: payload,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  async put(endpoint: string, payload: any) {
    return await this.request.put(endpoint, {
      data: payload,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  async delete(endpoint: string) {
    return await this.request.delete(endpoint, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  async createUser(name: string, email: string) {
    return await this.post('/users', {
      name,
      email
    });
  }

  async getUserById(id: number) {
    return await this.get(`/users/${id}`);
  }

  async updateUser(id: number, data: any) {
    return await this.put(`/users/${id}`, data);
  }

  async deleteUser(id: number) {
    return await this.delete(`/users/${id}`);
  }
}
