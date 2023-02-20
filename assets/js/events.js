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
let events = [
    {
        eventCode: "quill",
        eventName: "MIT QUILL",
        eventTagName: "The Literary Club of MIT",
        organizedEvents: [
            {
                subEventName: "Just A Minute(JAM)",
                subEventCode: "jam",
                subEventDesc:
                    "A standard, god ol' just-a-min; 60 mins of coherent thoughts with proper chronology and remember, no fillers, no repetition, and most importantly, no deviation. This will be an individual event",
                subEventDuration:
                    "3 hours (ideally); if no. of participants are higher and decision making is difficult with one round, might require prelims + finals",
                subEventRules: [
                    "The event includes two rounds. ",
                    "The first round is a preliminary round. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                    "The top 5 participants will be selected for the final round. ",
                    "The final round will be a debate. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                ],
                subEventDate: friday,
                subEventTime: "Prelims - 10 AM to 1 PM, Finals - 2 PM to 4 PM",
                subEventVenue: "Mini Auditorium",
                subEventTeamSize: "1",
                subEventOrganizers: [
                    {
                        subEventOrganizerName: "Ramana",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                    {
                        subEventOrganizerName: "Deepshika",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                ],
            },
            {
                subEventName: "Lawyer Up",
                subEventCode: "lawyerup",
                subEventDesc:
                    "A standard, god ol' just-a-min; 60 mins of coherent thoughts with proper chronology and remember, no fillers, no repetition, and most importantly, no deviation. This will be an individual event",
                subEventDuration:
                    "3 hours (ideally); if no. of participants are higher and decision making is difficult with one round, might require prelims + finals",
                subEventRules: [
                    "The event includes two rounds. ",
                    "The first round is a preliminary round. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                    "The top 5 participants will be selected for the final round. ",
                    "The final round will be a debate. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                ],
                subEventDate: friday,
                subEventTime: "Prelims - 10 AM to 1 PM, Finals - 2 PM to 4 PM",
                subEventVenue: "Mini Auditorium",
                subEventTeamSize: "1",
                subEventOrganizers: [
                    {
                        subEventOrganizerName: "Ramana",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                    {
                        subEventOrganizerName: "Deepshika",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                ]
            },
        ]
    },
    {
        eventCode: "music",
        eventName: "MIT QUILL",
        eventTagName: "The Literary Club of MIT",
        organizedEvents: [
            {
                subEventName: "Just A Minute(JAM)",
                subEventCode: "jam",
                subEventDesc:
                    "A standard, god ol' just-a-min; 60 mins of coherent thoughts with proper chronology and remember, no fillers, no repetition, and most importantly, no deviation. This will be an individual event",
                subEventDuration:
                    "3 hours (ideally); if no. of participants are higher and decision making is difficult with one round, might require prelims + finals",
                subEventRules: [
                    "The event includes two rounds. ",
                    "The first round is a preliminary round. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                    "The top 5 participants will be selected for the final round. ",
                    "The final round will be a debate. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                ],
                subEventDate: friday,
                subEventTime: "Prelims - 10 AM to 1 PM, Finals - 2 PM to 4 PM",
                subEventVenue: "Mini Auditorium",
                subEventTeamSize: "1",
                subEventOrganizers: [
                    {
                        subEventOrganizerName: "Ramana",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                    {
                        subEventOrganizerName: "Deepshika",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                ],
            },
            {
                subEventName: "Lawyer Up",
                subEventCode: "lawyerup",
                subEventDesc:
                    "A standard, god ol' just-a-min; 60 mins of coherent thoughts with proper chronology and remember, no fillers, no repetition, and most importantly, no deviation. This will be an individual event",
                subEventDuration:
                    "3 hours (ideally); if no. of participants are higher and decision making is difficult with one round, might require prelims + finals",
                subEventRules: [
                    "The event includes two rounds. ",
                    "The first round is a preliminary round. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                    "The top 5 participants will be selected for the final round. ",
                    "The final round will be a debate. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                ],
                subEventDate: friday,
                subEventTime: "Prelims - 10 AM to 1 PM, Finals - 2 PM to 4 PM",
                subEventVenue: "Mini Auditorium",
                subEventTeamSize: "1",
                subEventOrganizers: [
                    {
                        subEventOrganizerName: "Ramana",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                    {
                        subEventOrganizerName: "Deepshika",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                ]
            },
        ]
    },  
    {
        eventCode: "entrepreneurship",
        eventName: "MIT QUILL",
        eventTagName: "The Literary Club of MIT",
        organizedEvents: [
            {
                subEventName: "Just A Minute(JAM)",
                subEventCode: "jam",
                subEventDesc:
                    "A standard, god ol' just-a-min; 60 mins of coherent thoughts with proper chronology and remember, no fillers, no repetition, and most importantly, no deviation. This will be an individual event",
                subEventDuration:
                    "3 hours (ideally); if no. of participants are higher and decision making is difficult with one round, might require prelims + finals",
                subEventRules: [
                    "The event includes two rounds. ",
                    "The first round is a preliminary round. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                    "The top 5 participants will be selected for the final round. ",
                    "The final round will be a debate. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                ],
                subEventDate: friday,
                subEventTime: "Prelims - 10 AM to 1 PM, Finals - 2 PM to 4 PM",
                subEventVenue: "Mini Auditorium",
                subEventTeamSize: "1",
                subEventOrganizers: [
                    {
                        subEventOrganizerName: "Ramana",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                    {
                        subEventOrganizerName: "Deepshika",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                ],
            },
            {
                subEventName: "Lawyer Up",
                subEventCode: "lawyerup",
                subEventDesc:
                    "A standard, god ol' just-a-min; 60 mins of coherent thoughts with proper chronology and remember, no fillers, no repetition, and most importantly, no deviation. This will be an individual event",
                subEventDuration:
                    "3 hours (ideally); if no. of participants are higher and decision making is difficult with one round, might require prelims + finals",
                subEventRules: [
                    "The event includes two rounds. ",
                    "The first round is a preliminary round. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                    "The top 5 participants will be selected for the final round. ",
                    "The final round will be a debate. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                ],
                subEventDate: friday,
                subEventTime: "Prelims - 10 AM to 1 PM, Finals - 2 PM to 4 PM",
                subEventVenue: "Mini Auditorium",
                subEventTeamSize: "1",
                subEventOrganizers: [
                    {
                        subEventOrganizerName: "Ramana",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                    {
                        subEventOrganizerName: "Deepshika",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                ]
            },
        ]
    },  
    {
        eventCode: "question",
        eventName: "MIT QUILL",
        eventTagName: "The Literary Club of MIT",
        organizedEvents: [
            {
                subEventName: "Just A Minute(JAM)",
                subEventCode: "jam",
                subEventDesc:
                    "A standard, god ol' just-a-min; 60 mins of coherent thoughts with proper chronology and remember, no fillers, no repetition, and most importantly, no deviation. This will be an individual event",
                subEventDuration:
                    "3 hours (ideally); if no. of participants are higher and decision making is difficult with one round, might require prelims + finals",
                subEventRules: [
                    "The event includes two rounds. ",
                    "The first round is a preliminary round. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                    "The top 5 participants will be selected for the final round. ",
                    "The final round will be a debate. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                ],
                subEventDate: friday,
                subEventTime: "Prelims - 10 AM to 1 PM, Finals - 2 PM to 4 PM",
                subEventVenue: "Mini Auditorium",
                subEventTeamSize: "1",
                subEventOrganizers: [
                    {
                        subEventOrganizerName: "Ramana",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                    {
                        subEventOrganizerName: "Deepshika",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                ],
            },
            {
                subEventName: "Lawyer Up",
                subEventCode: "lawyerup",
                subEventDesc:
                    "A standard, god ol' just-a-min; 60 mins of coherent thoughts with proper chronology and remember, no fillers, no repetition, and most importantly, no deviation. This will be an individual event",
                subEventDuration:
                    "3 hours (ideally); if no. of participants are higher and decision making is difficult with one round, might require prelims + finals",
                subEventRules: [
                    "The event includes two rounds. ",
                    "The first round is a preliminary round. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                    "The top 5 participants will be selected for the final round. ",
                    "The final round will be a debate. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                ],
                subEventDate: friday,
                subEventTime: "Prelims - 10 AM to 1 PM, Finals - 2 PM to 4 PM",
                subEventVenue: "Mini Auditorium",
                subEventTeamSize: "1",
                subEventOrganizers: [
                    {
                        subEventOrganizerName: "Ramana",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                    {
                        subEventOrganizerName: "Deepshika",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                ]
            },
        ]
    },  
    {
        eventCode: "tamil",
        eventName: "MIT QUILL",
        eventTagName: "The Literary Club of MIT",
        organizedEvents: [
            {
                subEventName: "Just A Minute(JAM)",
                subEventCode: "jam",
                subEventDesc:
                    "A standard, god ol' just-a-min; 60 mins of coherent thoughts with proper chronology and remember, no fillers, no repetition, and most importantly, no deviation. This will be an individual event",
                subEventDuration:
                    "3 hours (ideally); if no. of participants are higher and decision making is difficult with one round, might require prelims + finals",
                subEventRules: [
                    "The event includes two rounds. ",
                    "The first round is a preliminary round. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                    "The top 5 participants will be selected for the final round. ",
                    "The final round will be a debate. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                ],
                subEventDate: friday,
                subEventTime: "Prelims - 10 AM to 1 PM, Finals - 2 PM to 4 PM",
                subEventVenue: "Mini Auditorium",
                subEventTeamSize: "1",
                subEventOrganizers: [
                    {
                        subEventOrganizerName: "Ramana",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                    {
                        subEventOrganizerName: "Deepshika",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                ],
            },
            {
                subEventName: "Lawyer Up",
                subEventCode: "lawyerup",
                subEventDesc:
                    "A standard, god ol' just-a-min; 60 mins of coherent thoughts with proper chronology and remember, no fillers, no repetition, and most importantly, no deviation. This will be an individual event",
                subEventDuration:
                    "3 hours (ideally); if no. of participants are higher and decision making is difficult with one round, might require prelims + finals",
                subEventRules: [
                    "The event includes two rounds. ",
                    "The first round is a preliminary round. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                    "The top 5 participants will be selected for the final round. ",
                    "The final round will be a debate. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                ],
                subEventDate: friday,
                subEventTime: "Prelims - 10 AM to 1 PM, Finals - 2 PM to 4 PM",
                subEventVenue: "Mini Auditorium",
                subEventTeamSize: "1",
                subEventOrganizers: [
                    {
                        subEventOrganizerName: "Ramana",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                    {
                        subEventOrganizerName: "Deepshika",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                ]
            },
        ]
    },  
    {
        eventCode: "drama",
        eventName: "MIT QUILL",
        eventTagName: "The Literary Club of MIT",
        organizedEvents: [
            {
                subEventName: "Just A Minute(JAM)",
                subEventCode: "jam",
                subEventDesc:
                    "A standard, god ol' just-a-min; 60 mins of coherent thoughts with proper chronology and remember, no fillers, no repetition, and most importantly, no deviation. This will be an individual event",
                subEventDuration:
                    "3 hours (ideally); if no. of participants are higher and decision making is difficult with one round, might require prelims + finals",
                subEventRules: [
                    "The event includes two rounds. ",
                    "The first round is a preliminary round. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                    "The top 5 participants will be selected for the final round. ",
                    "The final round will be a debate. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                ],
                subEventDate: friday,
                subEventTime: "Prelims - 10 AM to 1 PM, Finals - 2 PM to 4 PM",
                subEventVenue: "Mini Auditorium",
                subEventTeamSize: "1",
                subEventOrganizers: [
                    {
                        subEventOrganizerName: "Ramana",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                    {
                        subEventOrganizerName: "Deepshika",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                ],
            },
            {
                subEventName: "Lawyer Up",
                subEventCode: "lawyerup",
                subEventDesc:
                    "A standard, god ol' just-a-min; 60 mins of coherent thoughts with proper chronology and remember, no fillers, no repetition, and most importantly, no deviation. This will be an individual event",
                subEventDuration:
                    "3 hours (ideally); if no. of participants are higher and decision making is difficult with one round, might require prelims + finals",
                subEventRules: [
                    "The event includes two rounds. ",
                    "The first round is a preliminary round. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                    "The top 5 participants will be selected for the final round. ",
                    "The final round will be a debate. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                ],
                subEventDate: friday,
                subEventTime: "Prelims - 10 AM to 1 PM, Finals - 2 PM to 4 PM",
                subEventVenue: "Mini Auditorium",
                subEventTeamSize: "1",
                subEventOrganizers: [
                    {
                        subEventOrganizerName: "Ramana",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                    {
                        subEventOrganizerName: "Deepshika",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                ]
            },
        ]
    },  
    {
        eventCode: "pda",
        eventName: "MIT QUILL",
        eventTagName: "The Literary Club of MIT",
        organizedEvents: [
            {
                subEventName: "Just A Minute(JAM)",
                subEventCode: "jam",
                subEventDesc:
                    "A standard, god ol' just-a-min; 60 mins of coherent thoughts with proper chronology and remember, no fillers, no repetition, and most importantly, no deviation. This will be an individual event",
                subEventDuration:
                    "3 hours (ideally); if no. of participants are higher and decision making is difficult with one round, might require prelims + finals",
                subEventRules: [
                    "The event includes two rounds. ",
                    "The first round is a preliminary round. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                    "The top 5 participants will be selected for the final round. ",
                    "The final round will be a debate. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                ],
                subEventDate: friday,
                subEventTime: "Prelims - 10 AM to 1 PM, Finals - 2 PM to 4 PM",
                subEventVenue: "Mini Auditorium",
                subEventTeamSize: "1",
                subEventOrganizers: [
                    {
                        subEventOrganizerName: "Ramana",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                    {
                        subEventOrganizerName: "Deepshika",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                ],
            },
            {
                subEventName: "Lawyer Up",
                subEventCode: "lawyerup",
                subEventDesc:
                    "A standard, god ol' just-a-min; 60 mins of coherent thoughts with proper chronology and remember, no fillers, no repetition, and most importantly, no deviation. This will be an individual event",
                subEventDuration:
                    "3 hours (ideally); if no. of participants are higher and decision making is difficult with one round, might require prelims + finals",
                subEventRules: [
                    "The event includes two rounds. ",
                    "The first round is a preliminary round. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                    "The top 5 participants will be selected for the final round. ",
                    "The final round will be a debate. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                ],
                subEventDate: friday,
                subEventTime: "Prelims - 10 AM to 1 PM, Finals - 2 PM to 4 PM",
                subEventVenue: "Mini Auditorium",
                subEventTeamSize: "1",
                subEventOrganizers: [
                    {
                        subEventOrganizerName: "Ramana",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                    {
                        subEventOrganizerName: "Deepshika",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                ]
            },
        ]
    },  
    {
        eventCode: "ted",
        eventName: "MIT QUILL",
        eventTagName: "The Literary Club of MIT",
        organizedEvents: [
            {
                subEventName: "Just A Minute(JAM)",
                subEventCode: "jam",
                subEventDesc:
                    "A standard, god ol' just-a-min; 60 mins of coherent thoughts with proper chronology and remember, no fillers, no repetition, and most importantly, no deviation. This will be an individual event",
                subEventDuration:
                    "3 hours (ideally); if no. of participants are higher and decision making is difficult with one round, might require prelims + finals",
                subEventRules: [
                    "The event includes two rounds. ",
                    "The first round is a preliminary round. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                    "The top 5 participants will be selected for the final round. ",
                    "The final round will be a debate. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                ],
                subEventDate: friday,
                subEventTime: "Prelims - 10 AM to 1 PM, Finals - 2 PM to 4 PM",
                subEventVenue: "Mini Auditorium",
                subEventTeamSize: "1",
                subEventOrganizers: [
                    {
                        subEventOrganizerName: "Ramana",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                    {
                        subEventOrganizerName: "Deepshika",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                ],
            },
            {
                subEventName: "Lawyer Up",
                subEventCode: "lawyerup",
                subEventDesc:
                    "A standard, god ol' just-a-min; 60 mins of coherent thoughts with proper chronology and remember, no fillers, no repetition, and most importantly, no deviation. This will be an individual event",
                subEventDuration:
                    "3 hours (ideally); if no. of participants are higher and decision making is difficult with one round, might require prelims + finals",
                subEventRules: [
                    "The event includes two rounds. ",
                    "The first round is a preliminary round. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                    "The top 5 participants will be selected for the final round. ",
                    "The final round will be a debate. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                ],
                subEventDate: friday,
                subEventTime: "Prelims - 10 AM to 1 PM, Finals - 2 PM to 4 PM",
                subEventVenue: "Mini Auditorium",
                subEventTeamSize: "1",
                subEventOrganizers: [
                    {
                        subEventOrganizerName: "Ramana",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                    {
                        subEventOrganizerName: "Deepshika",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                ]
            },
        ]
    },  
    {
        eventCode: "dance",
        eventName: "MIT QUILL",
        eventTagName: "The Literary Club of MIT",
        organizedEvents: [
            {
                subEventName: "Just A Minute(JAM)",
                subEventCode: "jam",
                subEventDesc:
                    "A standard, god ol' just-a-min; 60 mins of coherent thoughts with proper chronology and remember, no fillers, no repetition, and most importantly, no deviation. This will be an individual event",
                subEventDuration:
                    "3 hours (ideally); if no. of participants are higher and decision making is difficult with one round, might require prelims + finals",
                subEventRules: [
                    "The event includes two rounds. ",
                    "The first round is a preliminary round. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                    "The top 5 participants will be selected for the final round. ",
                    "The final round will be a debate. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                ],
                subEventDate: friday,
                subEventTime: "Prelims - 10 AM to 1 PM, Finals - 2 PM to 4 PM",
                subEventVenue: "Mini Auditorium",
                subEventTeamSize: "1",
                subEventOrganizers: [
                    {
                        subEventOrganizerName: "Ramana",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                    {
                        subEventOrganizerName: "Deepshika",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                ],
            },
            {
                subEventName: "Lawyer Up",
                subEventCode: "lawyerup",
                subEventDesc:
                    "A standard, god ol' just-a-min; 60 mins of coherent thoughts with proper chronology and remember, no fillers, no repetition, and most importantly, no deviation. This will be an individual event",
                subEventDuration:
                    "3 hours (ideally); if no. of participants are higher and decision making is difficult with one round, might require prelims + finals",
                subEventRules: [
                    "The event includes two rounds. ",
                    "The first round is a preliminary round. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                    "The top 5 participants will be selected for the final round. ",
                    "The final round will be a debate. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                ],
                subEventDate: friday,
                subEventTime: "Prelims - 10 AM to 1 PM, Finals - 2 PM to 4 PM",
                subEventVenue: "Mini Auditorium",
                subEventTeamSize: "1",
                subEventOrganizers: [
                    {
                        subEventOrganizerName: "Ramana",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                    {
                        subEventOrganizerName: "Deepshika",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                ]
            },
        ]
    },  
    {
        eventCode: "cultural",
        eventName: "MIT QUILL",
        eventTagName: "The Literary Club of MIT",
        organizedEvents: [
            {
                subEventName: "Just A Minute(JAM)",
                subEventCode: "jam",
                subEventDesc:
                    "A standard, god ol' just-a-min; 60 mins of coherent thoughts with proper chronology and remember, no fillers, no repetition, and most importantly, no deviation. This will be an individual event",
                subEventDuration:
                    "3 hours (ideally); if no. of participants are higher and decision making is difficult with one round, might require prelims + finals",
                subEventRules: [
                    "The event includes two rounds. ",
                    "The first round is a preliminary round. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                    "The top 5 participants will be selected for the final round. ",
                    "The final round will be a debate. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                ],
                subEventDate: friday,
                subEventTime: "Prelims - 10 AM to 1 PM, Finals - 2 PM to 4 PM",
                subEventVenue: "Mini Auditorium",
                subEventTeamSize: "1",
                subEventOrganizers: [
                    {
                        subEventOrganizerName: "Ramana",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                    {
                        subEventOrganizerName: "Deepshika",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                ],
            },
            {
                subEventName: "Lawyer Up",
                subEventCode: "lawyerup",
                subEventDesc:
                    "A standard, god ol' just-a-min; 60 mins of coherent thoughts with proper chronology and remember, no fillers, no repetition, and most importantly, no deviation. This will be an individual event",
                subEventDuration:
                    "3 hours (ideally); if no. of participants are higher and decision making is difficult with one round, might require prelims + finals",
                subEventRules: [
                    "The event includes two rounds. ",
                    "The first round is a preliminary round. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                    "The top 5 participants will be selected for the final round. ",
                    "The final round will be a debate. The participants will be given a topic and they will have to speak on it for 1 minute. The participants will be judged on their fluency, clarity, and the ability to stick to the topic. ",
                ],
                subEventDate: friday,
                subEventTime: "Prelims - 10 AM to 1 PM, Finals - 2 PM to 4 PM",
                subEventVenue: "Mini Auditorium",
                subEventTeamSize: "1",
                subEventOrganizers: [
                    {
                        subEventOrganizerName: "Ramana",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                    {
                        subEventOrganizerName: "Deepshika",
                        subEventOrganizerContact: "82021-210-1220",
                    },
                ]
            },
        ]
    },  
]