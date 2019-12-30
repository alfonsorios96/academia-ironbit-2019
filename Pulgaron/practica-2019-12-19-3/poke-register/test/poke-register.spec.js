/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../poke-register.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<poke-register></poke-register>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
