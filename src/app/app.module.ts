import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NbSidebarModule,NbLayoutModule,NbButtonModule,NbCardModule, NbThemeModule} from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { InfoComponent } from './info/info.component'
import { EmployeeService } from './employee.service';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import {AngularFireModule} from '@angular/fire/compat'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DetailsComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
    AngularFireModule.initializeApp(environment.firebase),
    NbButtonModule,
    FormsModule,
    NbCardModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbEvaIconsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())
  ],

  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
