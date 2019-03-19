import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// NPM
import { Cloudinary as CloudinaryCore } from 'cloudinary-core';
import { CloudinaryConfiguration, CloudinaryModule } from '@cloudinary/angular-5.x';
import cloudinaryConfiguration from './cdn.config';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdnImageComponent } from './utils/cdn-image/cdn-image.component';
import { DataService } from './utils/data.service';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './utils/app-button/button.component';
import { LinebreakPipe } from './utils/linebreak.pipe';

export const cloudinary = {
  Cloudinary: CloudinaryCore
};
export const config: CloudinaryConfiguration = cloudinaryConfiguration;

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CdnImageComponent,
    LinebreakPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CloudinaryModule.forRoot(cloudinary, config),
    HttpClientModule
  ],
  
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
