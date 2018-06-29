import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NgxQRCodeModule } from 'ngx-qrcode2';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ClientScan } from '../pages/clientScan/clientScan';
import { Waiter } from '../pages/waiter/waiter';
import { Menu } from '../pages/menu/menu';
import { MenuTotal } from '../pages/menuTotal/menuTotal';
import { ClientOrder } from '../pages/clientOrder/clientOrder';
import { SuccessPayment } from '../pages/success/success';

@NgModule({
  declarations: [
    MyApp,
    ClientScan,
    Waiter,
    Menu,
    MenuTotal,
    HomePage,
    ClientOrder,
    SuccessPayment
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ClientScan,
    Waiter,
    Menu,
    MenuTotal,
    HomePage,
    ClientOrder,
    SuccessPayment
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
