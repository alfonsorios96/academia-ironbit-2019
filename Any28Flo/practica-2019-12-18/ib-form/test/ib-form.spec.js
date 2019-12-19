/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../ib-form.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<ib-form></ib-form>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
