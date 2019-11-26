import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  list: any[] = [
    {
      id: 1,
      first_name: 'Logan',
      last_name: 'Corsor',
      email: 'lcorsor0@newyorker.com',
      gender: 'Male',
      ip_address: '16.139.178.197',
      address: '75980 Brickson Park Center',
      phone: '+7 461 493 6488'
  },
  {
      id: 2,
      first_name: 'Starr',
      last_name: 'Stainton',
      email: 'sstainton1@wikispaces.com',
      gender: 'Female',
      ip_address: '113.78.89.114',
      address: '6 Oak Way',
      phone: '+351 464 461 5177'
  },
  {
      id: 3,
      first_name: 'Jeanie',
      last_name: 'Jakuszewski',
      email: 'jjakuszewski2@berkeley.edu',
      gender: 'Female',
      ip_address: '232.124.88.87',
      address: '04610 Anthes Parkway',
      phone: '+7 775 387 5147'
  },
  {
      id: 4,
      first_name: 'Leora',
      last_name: 'Hinkins',
      email: 'lhinkins3@skyrock.com',
      gender: 'Female',
      ip_address: '100.136.187.119',
      address: '70579 Cardinal Junction',
      phone: '+55 442 588 1513'
  },
  {
      id: 5,
      first_name: 'Arlyn',
      last_name: 'Comrie',
      email: 'acomrie4@theguardian.com',
      gender: 'Female',
      ip_address: '115.196.156.130',
      address: '5 Fairview Crossing',
      phone: '+86 758 377 5614'
  },
  {
      id: 6,
      first_name: 'Marilee',
      last_name: 'Ogelbe',
      email: 'mogelbe5@army.mil',
      gender: 'Female',
      ip_address: '154.116.183.26',
      address: '858 Graedel Hill',
      phone: '+63 899 454 7305'
  },
  {
      id: 7,
      first_name: 'Tiffany',
      last_name: 'Sidwick',
      email: 'tsidwick6@odnoklassniki.ru',
      gender: 'Female',
      ip_address: '252.187.247.30',
      address: '0 Kensington Park',
      phone: '+62 218 660 7373'
  },
  {
      id: 8,
      first_name: 'Hillary',
      last_name: 'Jephcote',
      email: 'hjephcote7@ebay.co.uk',
      gender: 'Male',
      ip_address: '25.158.171.142',
      address: '6 Butternut Plaza',
      phone: '+380 734 649 4922'
  },
  {
      id: 9,
      first_name: 'Richmond',
      last_name: 'Drinkwater',
      email: 'rdrinkwater8@vinaora.com',
      gender: 'Male',
      ip_address: '227.162.150.139',
      address: '9 Northfield Way',
      phone: '+86 208 321 9468'
  },
  {
      id: 10,
      first_name: 'Kailey',
      last_name: 'Chalcraft',
      email: 'kchalcraft9@who.int',
      gender: 'Female',
      ip_address: '174.8.227.103',
      address: '90535 Forest Run Crossing',
      phone: '+62 532 605 2300'
  },
  ];

  apiUrl = 'http://localhost:3000/';
  endpoint = 'employee';

  constructor() { }
}
