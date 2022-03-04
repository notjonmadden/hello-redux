import { CSSProperties } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { AbilityName, abilityNames, selectAbility, selectCharacter, setAbility, setName } from './characterSlice';

export default function CharacterSheet() { 
  const dispatch = useAppDispatch();
  const character = useAppSelector(selectCharacter);

  return (
    <article>
      <section style={sectionStyle}>
        <label style={labelStyle}>
          Name
          <input
            type="text"
            value={character.name}
            onChange={(e) => dispatch(setName(e.target.value))}
          />
        </label>
      </section>
      <section style={sectionStyle}>
        {abilityNames.map((name) => (
          <label style={labelStyle}>
            <span style={{ flex: "1" }}>{name}</span>
            <Score ability={name} />
          </label>
        ))}
      </section>
    </article>
  );
}

function Score({ ability }: { ability: AbilityName }) {
  const dispatch = useAppDispatch();
  const { score, modifier } = useAppSelector(selectAbility(ability));

  return (
    <>
      <input type="number" value={score} onChange={(e) => dispatch(setAbility({ ability, value: +e.target.value }))} />
      <span>({formatModifier(modifier)})</span>
    </>
  );

  function formatModifier(modifier: number) {
    return Intl.NumberFormat("en-US", { signDisplay: "always" }).format(
      modifier
    );
  }
};

const sectionStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  width: "325px",
};

const labelStyle: CSSProperties = {
  display: "flex",
  alignItems: "baseline",
  gap: "4px",
};
