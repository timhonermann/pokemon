import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { PokedexComponent } from './containers/pokedex/pokedex.component';
import * as pokedexEffects from './state/pokedex.effects';
import { pokedexReducer } from './state/pokedex.reducer';
import { pokedexFeatureKey } from './state/pokedex.state';
import { PokemonDetailComponent } from './containers/pokemon-detail/pokemon-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: PokedexComponent,
    providers: [
      provideState(pokedexFeatureKey, pokedexReducer),
      provideEffects(pokedexEffects),
    ],
  },
  {
    path: `:id`,
    component: PokemonDetailComponent
  }
];
