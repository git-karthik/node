import * as mongoose from 'mongoose';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async (): Promise<any> => {
            await mongoose.connect('mongodb://localhost/angular8-crud', {useNewUrlParser: true, useFindAndModify: false}) ;
        },
    },
];

