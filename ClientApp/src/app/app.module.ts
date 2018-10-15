import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app/app.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientTasksComponent } from './components/client-tasks/client-tasks.component';
import { ClientService } from './services/client/client.service';
import { TaskTabService } from './services/task-tab/task-tab.service';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ClientTasksComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ClientService, TaskTabService],
  bootstrap: [AppComponent]
})
export class AppModule { }
