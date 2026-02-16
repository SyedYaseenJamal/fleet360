// src/users/users.controller.ts
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Register new user
  @Post('register')
  async register(
    @Body() body: { username: string; email: string; password: string; roles?: string[] },
  ) {
    const { username, email, password, roles } = body;
    return this.usersService.create(username, email, password, roles);
  }

  // Get all users
  @Get()
  async getAll() {
    return this.usersService.findAll();
  }

  // Get user by id
  @Get(':id')
  async getUser(@Param('id') id: string) {
    return this.usersService.findById(id);
  }

  // (Optional) Login endpoint, basic example
  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const { email, password } = body;
    const user = await this.usersService.findByEmail(email);
    if (!user) return { error: 'User not found' };

    const isMatch = await this.usersService.validatePassword(password, user.password);
    if (!isMatch) return { error: 'Invalid credentials' };

    return { message: 'Login successful', user: { id: user._id, username: user.username, email: user.email, roles: user.roles } };
  }
}
