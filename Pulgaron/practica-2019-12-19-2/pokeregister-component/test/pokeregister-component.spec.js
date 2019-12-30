/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../pokeregister-component.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<pokeregister-component></pokeregister-component>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
