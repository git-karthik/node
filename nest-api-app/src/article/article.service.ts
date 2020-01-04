import { Model } from 'mongoose';
import { Article } from './interfaces/article.interface';
import { Inject, Injectable } from '@nestjs/common';
import { ArticleDTO } from './dto/article.dto';

@Injectable()
export class ArticleService {
    constructor(@Inject('ARTICLE_MODEL') private readonly articleModel: Model<Article>) {}

    async create(articleDTO: ArticleDTO): Promise<Article> {
        const createdArticle = new this.articleModel(articleDTO);
        return await createdArticle.save();
    }

    async findAll(): Promise<Article[]> {
        return await this.articleModel.find().exec();
    }

    async findById(id: string): Promise<Article> {
        return await this.articleModel.findById(id).exec();
    }

    async update(id: string, articleDto: ArticleDTO): Promise<Article> {
        return await this.articleModel.findByIdAndUpdate(id, articleDto);
    }

    async delete(id: string, articleDto: ArticleDTO): Promise<Article> {
        return await this.articleModel.findByIdAndRemove(id);
    }
}
