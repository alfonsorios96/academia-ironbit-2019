/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../poke-card.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<poke-card></poke-card>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
