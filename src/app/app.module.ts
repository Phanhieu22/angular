import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainScreenComponent } from './views/mainScreen/main-screen/main-screen.component';
import { SideBarComponent } from './shared/component/side-bar/side-bar.component';
import { ItemSideBarComponent } from './shared/component/item-side-bar/item-side-bar.component';
import { ListItemSideBarComponent } from './shared/component/list-item-side-bar/list-item-side-bar.component';
import { ListUserComponent } from './views/list-user/list-user.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, MainScreenComponent, SideBarComponent, ItemSideBarComponent, ListItemSideBarComponent, ListUserComponent, DashboardComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
