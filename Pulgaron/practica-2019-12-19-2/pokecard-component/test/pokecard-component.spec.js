/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../pokecard-component.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<pokecard-component></pokecard-component>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
