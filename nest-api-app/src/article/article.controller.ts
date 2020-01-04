import { Controller, Body, Post, Get, Param, Put, Delete } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleDTO } from './dto/article.dto';
import { Article } from './interfaces/article.interface';

@Controller('article')
export class ArticleController {
    constructor(private readonly articleService: ArticleService) {}

    @Post()
    async create(@Body() articleDTO: ArticleDTO) {
        return await this.articleService.create(articleDTO);
    }

    @Get()
    async findAll(): Promise<Article[]> {
        return await this.articleService.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: string) {
        return await this.articleService.findById(id);
    }

    @Put(':id')
        async update(@Param('id') id: string, @Body() articleDto: ArticleDTO) {
        return this.articleService.update(id, articleDto);
    }

    @Delete(':id')
        async delete(@Param('id') id: string, @Body() articleDto: ArticleDTO) {
        return this.articleService.delete(id, articleDto);
    }
}
