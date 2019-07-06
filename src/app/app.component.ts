
import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Network } from '@ionic-native/network/ngx';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { firebase } from '@firebase/app';
import { NotificationsService } from './services/notifications/notifications.service';


export enum ConnectionStatus {
  Online,
  Offline
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [Network]
})

export class AppComponent implements OnInit, AfterViewInit {
  private status: BehaviorSubject<ConnectionStatus> = new BehaviorSubject(ConnectionStatus.Offline);
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private network: Network,
    private notificationsService: NotificationsService,
    private toastController: ToastController) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async ngOnInit() {
    this.initializeNetworkEvents();
    console.log(environment);
    firebase.initializeApp(environment.firebaseConfig);
    await this.notificationsService.init();
  }

  ngAfterViewInit() {
    this.platform.ready().then(async () => {
       await this.notificationsService.requestPermission();
    });
}

  initializeNetworkEvents() {
    this.network.onDisconnect().subscribe(() => {
      if (this.status.getValue() === ConnectionStatus.Online) {
        console.log('WE ARE OFFLINE');
        this.updateNetworkStatus(ConnectionStatus.Offline);
      }
    });

    this.network.onConnect().subscribe(() => {
      if (this.status.getValue() === ConnectionStatus.Offline) {
        console.log('WE ARE ONLINE');
        this.updateNetworkStatus(ConnectionStatus.Online);
      }
    });
  }

  private async updateNetworkStatus(status: ConnectionStatus) {
    this.status.next(status);

    const connection = status === ConnectionStatus.Offline ? 'Offline' : 'Online';
    const toast = this.toastController.create({
      message: `You are now ${connection}`,
      duration: 3000,
      position: 'bottom'
    });
    toast.then(t => t.present());
  }

  public onNetworkChange(): Observable<ConnectionStatus> {
    return this.status.asObservable();
  }

  public getCurrentNetworkStatus(): ConnectionStatus {
    return this.status.getValue();
  }

}
