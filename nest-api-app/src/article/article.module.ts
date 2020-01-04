import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { articleProviders } from './article.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [ArticleController],
    providers: [ArticleService, ...articleProviders],
})
export class ArticleModule {}
