// @ts-check

let friday = "March 3 2022"
let saturday = "March 4 2022"

/** 
 * @typedef {object} subEventOrganizers
 * @property {string} subEventOrganizerName
 * @property {string} subEventOrganizerContact
 */


/**
* @typedef OrganizedEvent
* @property {string} subEventName
* @property {string} subEventCode
* @property {string} subEventDesc
* @property {string} subEventDuration
* @property {string[]} subEventRules
* @property {string} subEventDate
* @property {string} subEventTime
* @property {string} subEventVenue
* @property {string} subEventTeamSize
* @property {subEventOrganizers[]} subEventOrganizers
*/


/**
* @typedef MitafestEvent
* @property {string} eventCode
* @property {string} eventName
* @property {string} eventTagName
* @property {OrganizedEvent[]} organizedEvents
*/

/**
 * @type {MitafestEvent[]}
 * @description This is the array of all the events
 */
