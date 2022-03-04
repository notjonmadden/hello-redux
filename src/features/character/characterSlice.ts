import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../../app/store';

export const abilityNames = [
  'strength',
  'dexterity',
  'constitution',
  'wisdom',
  'intelligence',
  'charisma'
] as const;

export const characterSlice = createSlice({
  name: 'character',
  initialState: {
    name: '',
    abilities: abilityNames.reduce((o, a) => ({ ...o, [a]: 10 }), {} as Abilities)
  },
  reducers: {
    setName(state, value: PayloadAction<string>) {
      state.name = value.payload;
    },
    setAbility(state, { payload }: AbilityPayload) {
      state.abilities[payload.ability] = payload.value;
    }
  }
});

type AbilityPayload = PayloadAction<{ ability: AbilityName, value: number }>

export const { setName, setAbility } = characterSlice.actions;

export const selectCharacter = (state: AppState) => state.character;
export const selectAbility =
  (name: AbilityName) =>
  (s: AppState) => {
    const score = s.character.abilities[name];
    const modifier = Math.floor((score - 10) / 2);
    
    return { score, modifier };
  };

export default characterSlice.reducer;

export type AbilityName = (typeof abilityNames)[number];

export type Abilities = {
  [Name in AbilityName]: number;
}