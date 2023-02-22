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
				],
			},
		],
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
				],
			},
		],
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
				],
			},
		]
	},
	{
		eventCode: "question",
		eventName: "QC MIT",
		eventTagName: "The Quiz Club of MIT",
		organizedEvents: [
			{
				subEventName:
					"ENAKU ORU UNMA THERINJAGANUM SAAMI - GENERAL QUIZ",
				subEventCode: "eouts",
				subEventDesc:
					"A good old-fashioned general quiz that tests your knowledge on a wide range of topics from fandom, to current affairs, to technology, to business.",
				subEventDuration:
					"3 hours (ideally); if no. of participants are higher and decision making is difficult with one round, might require prelims + finals",
				subEventRules: [
					"Prelims (Written round)",
					"Final (Format will be notified during event)",
					"Teams of two and lone wolves are welcome.",
					"Cross college teams are allowed.",
					"Top six teams from the prelims will qualify for the finals.",
					"Scoring scheme will be mentioned at the beginning of each round.",
					"The Quiz Master’s decision is final.",
				],
				subEventDate: friday,
				subEventTime:
					"Prelims - 9:30am to 10:30am, Finals - 10:30am to 12pm",
				subEventVenue: "RLHC 002",
				subEventTeamSize: "1-2",
				subEventOrganizers: [
					{
						subEventOrganizerName: "Abhijit",
						subEventOrganizerContact: "9840406710",
					},
					{
						subEventOrganizerName: "Gokul",
						subEventOrganizerContact: "9840955017",
					},
					{
						subEventOrganizerName: "Aditya",
						subEventOrganizerContact: "9444668092",
					},
				],
			},
			{
				subEventName:
					"EVERYTHING IS A ONE WHOLESOME ENTERTAINMENT - POP CULTURE QUIZ",
				subEventCode: "eiaowe",
				subEventDesc:
					"Are you a person who binge watches a lot? This quiz is the best place for you to put theknowledge gained from binge watching to use.",
				subEventDuration:
					"3 hours (ideally); if no. of participants are higher and decision making is difficult with one round, might require prelims + finals",
				subEventRules: [
					"Teams of two and lone wolves are welcome.",
					"Cross college teams are allowed.",
					"Top six teams from the prelims will qualify for the finals.",
					"Scoring scheme will be mentioned at the beginning of each round.",
					"The Quiz Master’s decision is final.",
				],
				subEventDate: friday,
				subEventTime:
					"Prelims - 9:30am to 10:30am, Finals - 10:30am to 12pm",
				subEventVenue: "RLHC 002",
				subEventTeamSize: "1-2",
				subEventOrganizers: [
					{
						subEventOrganizerName: "Keerthi",
						subEventOrganizerContact: "6374089449",
					},
					{
						subEventOrganizerName: "Kishor",
						subEventOrganizerContact: "7904145676",
					},
					{
						subEventOrganizerName: "Abhijit",
						subEventOrganizerContact: "9840406710",
					},
				],
			},
		],
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
				],
			},
		],
	},
	{
		eventCode: "drama",
		eventName: "TBO",
		eventTagName: "The Box Office Club of MIT",
		organizedEvents: [
			{
				subEventName: "ESCAPE ROOM HANDBOOK",
				subEventCode: "erh",
				subEventDesc:
					"A standard, god ol' just-a-min; 60 mins of coherent thoughts with proper chronology and remember, no fillers, no repetition, and most importantly, no deviation. This will be an individual event",
				subEventDuration:
					"THE TIME LIMIT IS FIXED AND NO EXTRA TIME WILL BE PROVIDED - 15 Mins",
				subEventRules: [
					"PHONES ARE NOT ALLOWED INSIDE THE ESCAPE ROOM. ONE WILL BE KEPT THERE FOR EMERGENCIES",
					"THE TIME LIMIT IS FIXED AND NO EXTRA TIME WILL BE PROVIDED",
					"THIS IS NOT A COMPETITON BUT A FUN EVENT TO DO WITH FRIENDS",
					"THE TEAM MEMBERS ARE REQUESTED NOT TO MAKE A MESS AND ONLY SOLVE THE PUZZLES",
					"EACH TEAM WILL GET 15 MINUTES TO SOLVE A SERIES OF PUZZLES IN A PARTICULAR ORDER IN ORDER TO GET THE KEY THAT WILL RELEASE THEM FROM THE ROOM",
					"AFTER THE 15 MINUTES, IF A TEAM WANTS A BIT MORE TIME, THEY WILL BE ASKED TO SOLVE ANOTHER RIDDLE TO GET 5 MINUTES EXTRA",
					"THE TEAMS WILL BE GIVEN THE FIRST CLUE WHEN THEY ENTER THE ESCAPE ROOM",
					"EACH TEAM WILL HAVE ONLY 3 LIFELINES, FOR WHICH THERE WILL BE A PHONE IN THE ROOM.",
					"THERE IS NO WINNER OR LOSER, THERE ARE ONLY SURVIVORS WITH THE PRIZE OF YOUR LIFE",
					"SO ARE YOU AND TEAM READY TO PUT YOUR SKILLS TO THE TEST AT THE COST OF YOUR FREEDOM",
				],
				subEventDate: friday,
				subEventTime: "Prelims - 10 AM to 1 PM, Finals - 2 PM to 4 PM",
				subEventVenue: "Mini Auditorium",
				subEventTeamSize: "2-5",
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
			}
		],
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
				],
			},
		],
	},
	{
		eventCode: "ted",
		eventName: "TED",
		eventTagName: "TED CLUB of MIT",
		organizedEvents: [
			{
				subEventName: "Treasure Hunt",
				subEventCode: "th",
				subEventDesc:
					"A standard, god ol' just-a-min; 60 mins of coherent thoughts with proper chronology and remember, no fillers, no repetition, and most importantly, no deviation. This will be an individual event",
				subEventDuration:
					"3 hours (ideally); if no. of participants are higher and decision making is difficult with one round, might require prelims + finals",
				subEventRules: [
					"Treasure will be hidden all around the campus and the clues will be given to the participants",
					"The group which finds the most number of treasures within one hour will be declared as the winne",
					"Clues will be updated in real time - Look out for “Bonus Clues” ",
					"The participants should not use any mode of transport/vehicle inside the campus",
					"Only single round (Tie Breaker if needed) will be conducted",
				],
				subEventDate: friday,
				subEventTime: "Prelims - 10 AM to 1 PM, Finals - 2 PM to 4 PM",
				subEventVenue: "Mini Auditorium",
				subEventTeamSize: "1-3",
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
				subEventName: "Mad Ads",
				subEventCode: "ma",
				subEventDesc:
					"A standard, god ol' just-a-min; 60 mins of coherent thoughts with proper chronology and remember, no fillers, no repetition, and most importantly, no deviation. This will be an individual event",
				subEventDuration:
					"Preparation time - 3 mins, Performance time - 3 mins, Rebuttal - 1 min",
				subEventRules: [
					"The contestants will be given a product to advertise",
					"The presentation may be in the form of a talk or an act",
					"The Ad prepared by the contestant must not contain any obscene words/any subject that hurts the feelings of culture/language/religion/ region",
					"Negative marking for defying rules",
					"Time limit must be strictly followed",
					"The judge's decision if final and abiding",
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
				subEventName: "Ready to Lead?",
				subEventCode: "rtl",
				subEventDesc: "The topic or the scenario will be given on spot",
				subEventDuration:
					"Preparation time - 3 mins, Performance time - 3 mins, Deliberation/Question hour - 2 mins",
				subEventRules: [
					"Judging is based on points from judges and voting of the audience                    ",
					"No Language Barrier",
					"The presentation may be in the form of a talk or an act",
					"Extra brownie points for participating in the deliberation/question hour session",
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
		],
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
				],
			},
		],
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
				],
			},
		],
	},
]
