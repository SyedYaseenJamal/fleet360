import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AgenciesService } from './agencies.service';
import { CreateAgencyDto } from './dto/create-agency.dto';
import { UpdateAgencyDto } from './dto/update-agency.dto';

@ApiTags('Agencies')
@Controller('api/agencies')
export class AgenciesController {
  constructor(private readonly agenciesService: AgenciesService) {}

  // ADMIN USE (optional)
  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get all agencies (admin)' })
  findAll() {
    return this.agenciesService.findAll();
  }

  // ADMIN USE (optional)
  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create agency (admin)' })
  create(@Body() dto: CreateAgencyDto) {
    return this.agenciesService.create(dto);
  }

  // REQUIRED
  @Get(':agencyId')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get agency by ID' })
  findOne(@Param('agencyId') agencyId: string) {
    return this.agenciesService.findById(agencyId);
  }

  // REQUIRED
  @Patch(':agencyId')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update agency by ID' })
  update(@Param('agencyId') agencyId: string, @Body() dto: UpdateAgencyDto) {
    return this.agenciesService.updateById(agencyId, dto);
  }

  // ADMIN ONLY (optional)
  @Delete(':agencyId')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete agency by ID (admin)' })
  async remove(@Param('agencyId') agencyId: string) {
    await this.agenciesService.deleteById(agencyId);
    return { message: 'Agency deleted successfully' };
  }
}
