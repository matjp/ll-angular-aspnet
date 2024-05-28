import { Routes} from '@angular/router';
import { BookGridComponent } from './components/book-grid/book-grid.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
   { path: 'books/:filter', component: BookGridComponent },
   { path: 'about', component: AboutComponent },
   { path: '', redirectTo: '/books/0' , pathMatch: 'full' },
];
