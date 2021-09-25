import { Injectable } from '@angular/core';
import { UsersModel } from 'src/models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

   users: UsersModel[] = [
    {
        userId: 'dsdsds-1212-21212-2121',
        userName: 'Bret',
        emailAddress: 'Sincere@april.biz',
        phone: 56233566556,
        age: 24,
    },
    {
        userId: 'wewew4-333-23232-45454',
        userName: 'Antonette',
        emailAddress: 'Shanna@melissa.tv',
        phone: 102567777,
    },
    {
        userId: '3434df-34343-dvdf-3434',
        userName: 'Samantha',
        emailAddress: 'Nathan@yesenia.net',
        phone: 186554432,
    },
    {
        userId: '32332-dffg-776-jhjhjhj',
        userName: 'Karianne',
        emailAddress: 'Julianne.OConner@kory.org',
        phone: 4075665542,
        age: 60

    },
    {
        userId: 'aaf18357-3ac9-44bd-95ca-117a778fd32f',
        userName: 'Chelsey Dietrich',
        emailAddress: 'Lucio_Hettinger@annie.ca',
        phone: 2549541289,
        age: 29

    },
    {
        userId: 'c4452950-0641-4ed4-8303-e112b0d24a22',
        userName: 'Mrs. Dennis Schulist',
        emailAddress: 'Karley_Dach@jasper.info',
        phone: 93584786430,
        age: 50
    },
    {
        userId: '45859692-4444-43f0-ba4d-34150f5865d1',
        userName: 'Kurtis Weissnat',
        emailAddress: 'Telly.Hoeger@billy.biz',
        phone: 2100676132
    },
    {
        userId: 'fa0adb02-3c68-4c2c-b1d5-e842cb1789f4',
        userName: 'Nicholas Runolfsdottir V',
        emailAddress: 'Sherwood@rosamond.me',
        phone: 84936943140
    },
    {
        userId: 'c48ba7af-2284-4fcd-8775-418a2f3d6791',
        userName: 'Glenna Reichert',
        emailAddress: 'Chaim_McDermott@dana.io',
        phone: 7596741206
    },
    {
        userId: '61538df6-e8b2-4da6-8f96-41bca61eaf7d',
        userName: 'Clementina DuBuque',
        emailAddress: 'Rey.Padberg@karina.biz',
        phone: 246483804,
        age: 30
    }
   ];

  constructor() { }
}
