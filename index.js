"use strict";

const world = new Map([
  ["congo",
    ["east-africa", "north-africa", "south-africa"]],
  ["egypt",
    ["east-africa", "middle-east", "north-africa", "southern-europe"]],
  ["east-africa",
    ["congo", "egypt", "madagascar", "north-africa", "south-africa"]],
  ["madagascar",
    ["east-africa", "south-africa"]],
  ["north-africa",
    ["brazil", "congo", "east-africa", "egypt", "southern-europe", "western-europe"]],
  ["south-africa",
    ["congo", "east-africa", "madagascar"]],

  ["afghanistan",
    ["china", "middle-east", "ukraine", "ural"]],
  ["china",
    ["afghanistan", "india", "middle-east", "mongolia", "siam", "siberia", "ural"]],
  ["india",
    ["china", "middle-east", "siam"]],
  ["irkutsk", // cita
    ["kamchatka", "mongolia", "siberia", "yakutsk"]],
  ["japan",
    ["kamchatka", "mongolia"]],
  ["kamchatka",
    ["alaska", "irkutsk", "mongolia", "japan", "yakutsk"]],
  ["middle-east",
    ["afghanistan", "china", "egypt", "india", "southern-europe", "ukraine"]],
  ["mongolia",
    ["china", "irkutsk", "japan", "kamchatka", "siberia"]],
  ["siam",
    ["china", "india", "indonesia"]],
  ["siberia",
    ["china", "irkutsk", "mongolia", "ural", "yakutsk"]],
  ["ural",
    ["afghanistan", "china", "siberia", "ukraine"]],
  ["yakutsk", // jacuzia
    ["irkutsk", "kamchatka", "siberia"]],

  ["great-britain",
    ["iceland", "northern-europe", "scandinavia", "western-europe"]],
  ["iceland",
    ["great-britain", "greenland", "scandinavia"]],
  ["northern-europe",
    ["great-britain", "scandinavia", "southern-europe", "ukraine", "western-europe"]],
  ["scandinavia",
    ["great-britain", "iceland", "northern-europe", "ukraine"]],
  ["southern-europe",
    ["egypt", "middle-east", "north-africa", "northern-europe", "ukraine", "western-europe"]],
  ["ukraine",
    ["afghanistan", "middle-east", "northern-europe", "scandinavia", "southern-europe", "ural"]],
  ["western-europe",
    ["great-britain", "north-africa", "northern-europe", "southern-europe"]],

  ["alaska",
    ["alberta", "kamchatka", "northwest-territory"]],
  ["alberta",
    ["alaska", "northwest-territory", "ontario", "western-united-states"]],
  ["central-america",
    ["eastern-united-states", "venezuela", "western-united-states"]],
  ["eastern-united-states",
    ["central-america", "ontario", "quebec", "western-united-states"]],
  ["greenland",
    ["iceland", "northwest-territory", "ontario", "quebec"]],
  ["northwest-territory",
    ["alaska", "alberta", "greenland", "ontario"]],
  ["ontario",
    ["alberta", "eastern-united-states", "greenland", "northwest-territory", "quebec", "western-united-states"]],
  ["quebec",
    ["eastern-united-states", "greenland", "ontario"]],
  ["western-united-states",
    ["alberta", "central-america", "eastern-united-states", "ontario"]],

  ["eastern-oceania",
    ["new-guniea", "western-oceania"]],
  ["indonesia",
    ["new-guniea", "siam", "western-oceania"]],
  ["new-guniea",
    ["eastern-oceania", "indonesia", "western-oceania"]],
  ["western-oceania",
    ["eastern-oceania", "indonesia", "new-guniea"]],

  ["argentina",
    ["brazil", "peru"]],
  ["brazil",
    ["argentina", "north-africa", "peru", "venezuela"]],
  ["peru",
    ["argentina", "brazil", "venezuela"]],
  ["venezuela",
    ["brazil", "central-america", "peru"]],
]);

/**
 * When it's called with only one parameters,
 * returns all the neighbors countries of that country.
 * If it's called with two parameters,
 * determines whether the two countries are neighbors.
 * @name neighbors
 * @param {String} country
 * @param {String?} neighbor
 * @throw {Error} Unkown country
 * @return {Boolean|String[]}
 */
const neighbors =
  (country, neighbors) => {
    if (!world.has(country)) {
      throw new Error("Invalid country: '" + country + "' doesn't exist.");
    }

    const neighborhood = world.get(country);

    if (neighbors) {
      if (!world.has(neighbors)) {
        throw new Error("Invalid country: '" + neighbors + "' doesn't exist.");
      }

      const countries = neighborhood.find(function (country) {
        return country === neighbors;
      });

      if (countries) {
        return true;
      } else {
        return false;
      }
    }
    return neighborhood;
  };

module.exports = neighbors;
