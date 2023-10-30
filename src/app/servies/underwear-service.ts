import { Injectable } from '@angular/core';
import { Type } from '../models/types';
import { Gender, Underwear } from '../models/underwear';


@Injectable({
    providedIn: 'root'
})
export class UnderwearService {
    genders:Gender[] = ['man', 'woman' , 'unisex'];
    
    type: Type[] = [];
}


