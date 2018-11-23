import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NewStockComponent } from './new-stock/new-stock.component';
import { StocksComponent } from './stocks/stocks.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchService } from './search.service';

@NgModule({
  declarations: [
    AppComponent,
    NewStockComponent,
    StocksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
