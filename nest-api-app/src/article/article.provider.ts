import { Connection } from 'mongoose';
import { ArticleSchema } from './schemas/article.schemas';

export const articleProviders = [
    {
        provide: 'ARTICLE_MODEL',
        useFactory: (conn: Connection) => conn.model('Article', ArticleSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
