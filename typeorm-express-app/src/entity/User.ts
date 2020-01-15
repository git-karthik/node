import { Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Length, IsNotEmpty } from "class-validator";
import * as bcrypt from "bcryptjs";

@Entity()
@Unique(["username"])
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Length(4,20)
    username: string;

    @Column()
    @Length(8,100)
    password: string;

    @Column()
    @Length(4,10)
    @IsNotEmpty()
    role: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date

    @Column()
    @UpdateDateColumn()
    updatedAt: Date

    hashpassword(){
        this.password = bcrypt.hashSync(this.password, 8);
    }

    checkIfPasswordIsValid(unencryptedPwd: string){
        return bcrypt.compareSync(unencryptedPwd, this.password);
    }

}
