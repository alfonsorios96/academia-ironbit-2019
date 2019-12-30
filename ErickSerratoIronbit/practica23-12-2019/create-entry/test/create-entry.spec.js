/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../create-entry.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<create-entry></create-entry>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
