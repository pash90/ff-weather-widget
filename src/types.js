/**
 * @typedef Coordinates
 * @property {number} lat
 * @property {number} lon
 */

/**
 * @typedef Sys
 * @property {string} country
 * @property {number} sunrise
 * @property {number} sunset
 */

/**
 * @typedef WeatherItem
 * @property {number} id
 * @property {string} main
 * @property {string} description
 * @property {string} icon
 */

/**
 * @typedef Main
 * @property {number} temp
 * @property {number} humidity
 * @property {number} pressure
 * @property {number} temp_min
 * @property {number} temp_max
 */

/**
 * @typedef Wind
 * @property {number} speed
 * @property {number} degree
 */

/**
 * @typedef Rain
 * @property {number} 3h
 */

/**
 * @typedef Clouds
 * @property {number} all
 */

/**
 * @typedef WeatherBrief
 * @property {number} id
 * @property {number} dt
 * @property {string} base
 * @property {string} name
 * @property {number} cod
 * @property {Coordinates} coord
 * @property {Sys} sys
 * @property {WeatherItem[]} weather
 * @property {Main} main
 * @property {Wind} wind
 * @property {Rain} rain
 * @property {Clouds} cloud
 */
