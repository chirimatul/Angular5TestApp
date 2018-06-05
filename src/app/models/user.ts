export interface testI{
    
        
        test(num:number);
        test4():string;
        test2;
        age:number;
    
    
    }

export class User implements testI {
    
    test4(): string {
        throw new Error("Method not implemented.");
    }

    test(str:number){

    }
    test2: any;
    age: number;

    userName: string;

    //gender: boolean;
    country: string;
    dob: Date;
    favouriteColor: string;
    roles: string[];
    isSwimmer: boolean;
    isSinger: boolean;
    Cancycle: boolean;

    private _gender: boolean;

    constructor() {

    }


    x: [string, number,string];
    
    get gender(): boolean {

        this.x[1]
        return this._gender;
    }

    set gender(value: boolean) {

        this._gender = value;
    }

    get fullName():string{
        return this.userName+"l name";

        
    }



}



