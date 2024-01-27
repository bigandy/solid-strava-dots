import { type Component, createSignal, createEffect } from "solid-js";

const doFancyThingy = (count: number) => {
  const a = count * 333;

  const b = count * 999;

  return { a, b };
};

const Thingulator: Component<{ count: any }> = (props) => {
  const [effectAB, setEffectAB] = createSignal({ a: 0, b: 0 });

  const ft = () => doFancyThingy(props.count());

  createEffect(() => {
    const { a, b } = doFancyThingy(props.count());

    setEffectAB({ a, b });
  });

  return (
    <>
      <h2>This is from a derived value</h2>
      <div>
        {ft().a} - {ft().b}
      </div>

      <h2>This is from a derived signal</h2>
      <div>
        {effectAB().a} - {effectAB().b}
      </div>
    </>
  );
};

export default Thingulator;
