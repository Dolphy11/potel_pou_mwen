import { Inject, Injectable } from '@nestjs/common';
import { CONFIG_OPTIONS } from './jwt.constants';
import { JwtModuleOptions } from './jwt.interfaces';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtService {
    constructor(@Inject(CONFIG_OPTIONS) private readonly options: JwtModuleOptions,
){}
    sing(userID: number): string{
        return jwt.sign({id: userID}, this.options.privateKey);
    }
    verify(token: string) {
        return jwt.verify(token, this.options.privateKey);
    }
}
