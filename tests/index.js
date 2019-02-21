/* eslint-env jest */

"use strict";

const neighbors = require("../index.js");

describe("get neighbors", () => {
  it("throws when country is unknown", () => {
    expect(function () {
      neighbors("molise");
    }).toThrow("Invalid country: 'molise' doesn't exist.");
  });

  it("returns neighbors", () => {
    expect(
      neighbors("china")
    ).toEqual(["afghanistan", "india", "middle-east", "mongolia", "siam", "siberia", "ural"]);
  });

  it("returns neighbors (pacman effect)", () => {
    expect(
      neighbors("alaska")
    ).toEqual(["alberta", "kamchatka", "northwest-territory"]);
  });
});

describe("are neighbors", () => {
  it("throws when country is unknown", () => {
    expect(function () {
      neighbors("china", "molise");
    }).toThrow("Invalid country: 'molise' doesn't exist.");
  });

  it("returns false if countries are not neighbors", () => {
    expect(
      neighbors("china", "southern-europe")
    ).toBe(false);
  });

  it("returns true if countries are neighbors", () => {
    expect(
      neighbors("china", "middle-east")
    ).toBe(true);
  });
});
