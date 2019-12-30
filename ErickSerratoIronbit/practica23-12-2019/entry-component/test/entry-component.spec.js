/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../entry-component.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<entry-component></entry-component>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
