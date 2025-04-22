import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'guess',
        pathMatch: 'full'
    },
    // {
    //     path: 'home',
    //     loadComponent: () => import('./app.component').then(c => c.AppComponent)
    // },
    {
        path: 'guess',
        loadComponent: () => import('./guess/guess.component').then(c => c.GuessComponent)
    },
    {
        path: 'blogs',
        loadComponent: () => import('./blogs/blog-management/blog-management.component')
            .then(c => c.BlogManagementComponent),
    },

    {
        path: 'twoway',
        loadComponent: () => import('./twoWay/tow-way-home/tow-way-home.component')
            .then(c => c.TowWayHomeComponent)
    },

    {
        path: 'movie',
        loadComponent: () => import('./movies/movie-home/movie-home.component')
            .then(c => c.MovieHomeComponent)
    },
    {
        path: 'movie/:id',
        loadComponent: () => import('./movies/movie-detail/movie-detail.component')
            .then(c => c.MovieDetailComponent)
    }
];