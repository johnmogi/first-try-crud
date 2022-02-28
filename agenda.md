1. full stack app - lead generating form:
create an installation script for base backend?

maen - mongo, angular, node, express
client: angular with primeng
server: nodejs with express mongodb
works with basic validation - work time approx. 45 minutes.

2. same with nestjs..

back end:
mkdir Server; cd Server ; touch app.js
npm init -y ; npm i express cors mongoose

fe:
ng g c layout/main --skip-tests
ng g c layout/header --skip-tests ;
ng g c layout/sidebar --skip-tests ;
ng g c layout/footer --skip-tests ;

npm install primeng --save
npm install primeicons --save
imported css into angular.json

import {CardModule} from 'primeng/card';
-V
install pages, routing
ng g c pages/home --skip-tests ;
ng g c pages/apply --skip-tests ;
ng g c pages/admin/leads --skip-tests ;
ng g c pages/admin/lead-detail --skip-tests ;

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'shop/item/:id', component: ItemComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'admin/edit/:id', component: EditItemComponent },
  { path: 'admin/add-item', component: AddItemComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

        <router-outlet></router-outlet>

                <a routerLink="home">logo</a>

install leadservice + display results

build a model:
export class ProductModel {
  public constructor(
    public productID?: Number,
    public catID?: Number,
    public itemName?: String,
    public itemDescription?: String,
    public price?: Number,
    public imageUrl?: string
  ) {}
}

ng g s leads --skip-tests
<!-- ng g s services/leads --skip-tests -->

plan todo courses:
nestjs - udemy
angular - dido