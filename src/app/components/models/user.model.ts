

export class UserModel {

  constructor(public id: number, public name: string, public username: string,public email: string,
    public address: {
      street: string,
      suite: string,
      city: string,
      zipcode: number,
      geo: {
        lat: number,
        lng: number
      }
    }, public phone: number, public website: string,
     public company: { name: string,catchPhrase: string, bs: string
    }
    ) {}

}
