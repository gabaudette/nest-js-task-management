import { IsString, Matches, MaxLength, MinLength } from 'class-validator'

export class AuthCredentialsDto {

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string

    @IsString()
    @MinLength(8)
    @MaxLength(20)
    @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message : 'Password too weak'}) //Strong password regex (One uppercase, one number, one lowercase) Source : https://gist.github.com/arielweinberger/18a29bfa17072444d45adaeeb8e92ddc
    password: string
}



