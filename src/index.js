'use strict';
var Alexa = require("alexa-sdk");
var storage = require("./storage");

var response = '';

const handlers = {
	'LaunchRequest': function () {
		var welcomeMessage = 'Hello! Hope you are having a healthy day today?';
		var tryAgain = 'What would you like to know?';
		this.attributes.speechOutput = welcomeMessage;
        this.attributes.repromptSpeech = tryAgain;
		this.emit(':ask', welcomeMessage, tryAgain);
	},

	'SetSleep': function() {
		var sleep = this.event.request.intent.slots.sleep.value;
		var date = this.event.request.intent.slots.date.value;
		
		if (typeof sleep == 'undefined' || typeof date == 'undefined' || typeof sleep == '' || typeof date == 'undefined') {
			var incorrect = 'Please enter correct date and sleep parameters. Would you like to add anything else?';
			var tryAgain = 'Would you like to add anything else?';
			this.attributes.speechOutput = incorrect;
			this.attributes.repromptSpeech = tryAgain;
			this.emit(':ask', incorrect, tryAgain);
		}
		else {
			storage.saveSleep(sleep, date, this.event.session, (sleep) => {
				response = 'Ok, you had ' + sleep + ' hours of sleep on ' + date + '. I got it. Would you like to add anything else?';
				var anyElse = 'Would you like to add anything else?';
				this.attributes.speechOutput = response;
				this.attributes.repromptSpeech = anyElse;
				this.emit(':ask', response, anyElse);
			});
		}
	},

	'GetSleep': function() {
		var date = this.event.request.intent.slots.date.value;

		storage.getSleep(date, this.event.session, (sleep) => {
			if (typeof sleep == 'undefined' || typeof sleep == '') {
				var incorrect = 'Oops! You did not enter any sleep data for ' + date + '. What else would you like to know?';
				var tryAgain = 'What else would you like to know?';
				this.attributes.speechOutput = incorrect;
				this.attributes.repromptSpeech = tryAgain;
				this.emit(':ask', incorrect, tryAgain);
			}
			else {
				response = 'You had ' + sleep + ' hours of sleep on ' + date + '. What else would you like to know?';
				var anyElse = 'What else would you like to know?';
				this.attributes.speechOutput = response;
				this.attributes.repromptSpeech = anyElse;
				this.emit(':ask', response, anyElse);
			}
		});
	},
	
	'SetWater': function() {
		var water = this.event.request.intent.slots.water.value;
		var date = this.event.request.intent.slots.date.value;
		
		if (typeof water == 'undefined' || typeof date == 'undefined' || typeof water == '' || typeof date == '') {
			var incorrect = 'Please enter correct date and water intake parameters. Would you like to add anything else?';
			var tryAgain = 'Would you like to add anything else?';
			this.attributes.speechOutput = incorrect;
			this.attributes.repromptSpeech = tryAgain;
			this.emit(':ask', incorrect, tryAgain);
		}
		else {
			storage.saveWater(water, date, this.event.session, (water) => {
				response = 'Ok, you had ' + water + ' glasses of water on ' + date + '. I got it. Would you like to add anything else?';
				var anyElse = 'Would you like to add anything else?';
				this.attributes.speechOutput = response;
				this.attributes.repromptSpeech = anyElse;
				this.emit(':ask', response, anyElse);
			});
		}
	},

	'GetWater': function() {
		var date = this.event.request.intent.slots.date.value;

		storage.getWater(date, this.event.session, (water) => {
			if (typeof water == 'undefined' || typeof water == '') {
				var incorrect = 'Oops! You did not enter any water intake data for ' + date + '. What else would you like to know?';
				var tryAgain = 'What else would you like to know?';
				this.attributes.speechOutput = incorrect;
				this.attributes.repromptSpeech = tryAgain;
				this.emit(':ask', incorrect, tryAgain);
			}
			else {
				response = 'You had ' + water + ' glasses of water on ' + date + '. What else would you like to know?';
				var anyElse = 'What else would you like to know?';
				this.attributes.speechOutput = response;
				this.attributes.repromptSpeech = anyElse;
				this.emit(':ask', response, anyElse);
			}
		});
	},
	
	'SetWeight': function() {
		var weight = this.event.request.intent.slots.weight.value;
		var date = this.event.request.intent.slots.date.value;

		if (typeof weight == 'undefined' || typeof date == 'undefined' || typeof weight == '' || typeof date == '') {
			var incorrect = 'Please enter correct date and weight parameters. Would you like to add anything else?';
			var tryAgain = 'Would you like to add anything else?';
			this.attributes.speechOutput = incorrect;
			this.attributes.repromptSpeech = tryAgain;
			this.emit(':ask', incorrect, tryAgain);
		}
		else {
			storage.saveWeight(weight, date, this.event.session, (weight) => {
				response = 'Ok, you weighed ' + weight + ' kilograms on ' + date + '. I got it. Would you like to add anything else?';
				var anyElse = 'Would you like to add anything else?';
				this.attributes.speechOutput = response;
				this.attributes.repromptSpeech = anyElse;
				this.emit(':ask', response, anyElse);
			});
		}
	},

	'GetWeight': function() {
		var date = this.event.request.intent.slots.date.value;
		
		storage.getWeight(date, this.event.session, (weight) => {
			if (typeof weight == 'undefined' || typeof weight == '') {
				var incorrect = 'Oops! You did not enter any weight data for ' + date + '. What else would you like to know?';
				var tryAgain = 'What else would you like to know?';
				this.attributes.speechOutput = incorrect;
				this.attributes.repromptSpeech = tryAgain;
				this.emit(':ask', incorrect, tryAgain);
			}
			else {
				response = 'You weighed ' + weight + ' kilograms on ' + date + '. What else would you like to know?';
				var anyElse = 'What else would you like to know?';
				this.attributes.speechOutput = response;
				this.attributes.repromptSpeech = anyElse;
				this.emit(':ask', response, anyElse);
			}
		});
	},
	
	'SetHeight': function() {
		var height = this.event.request.intent.slots.height.value;
		var date = this.event.request.intent.slots.date.value;

		if (typeof height == 'undefined' || typeof date == 'undefined' || typeof height == '' || typeof date == '') {
			var incorrect = 'Please enter correct date and height parameters. Would you like to add anything else?';
			var tryAgain = 'Would you like to add anything else?';
			this.attributes.speechOutput = incorrect;
			this.attributes.repromptSpeech = tryAgain;
			this.emit(':ask', incorrect, tryAgain);
		}
		else {
			storage.saveHeight(height, date, this.event.session, (height) => {
				response = 'Ok, you measured ' + height + ' centimeters on ' + date + '. I got it. Would you like to add anything else?';
				var anyElse = 'Would you like to add anything else?';
				this.attributes.speechOutput = response;
				this.attributes.repromptSpeech = anyElse;
				this.emit(':ask', response, anyElse);
			});
		}
	},

	'GetHeight': function() {
		var date = this.event.request.intent.slots.date.value;
		
		storage.getHeight(date, this.event.session, (height) => {
			if (typeof height == 'undefined' || typeof height == '') {
				var incorrect = 'Oops! You did not enter any weight data for ' + date + '. What else would you like to know?';
				var tryAgain = 'What else would you like to know?';
				this.attributes.speechOutput = incorrect;
				this.attributes.repromptSpeech = tryAgain;
				this.emit(':ask', incorrect, tryAgain);
			}
			else {
				response = 'You measured ' + height + ' centimeters on ' + date + '. What else would you like to know?';
				var anyElse = 'What else would you like to know?';
				this.attributes.speechOutput = response;
				this.attributes.repromptSpeech = anyElse;
				this.emit(':ask', response, anyElse);
			}
		});
	},
	
	'DailySummary': function() {
		var date = this.event.request.intent.slots.date.value;

		storage.getDailySummary(date, this.event.session, (sleep, water, weight) => {
			if (typeof sleep == 'undefined' || typeof sleep == '') {
				var oops = 'Oops! You did not enter any sleep data for ' + date + '. Please enter all your health data to get a daily summary. What else would you like to know?';
				var tryAgain = 'What else would you like to know?';
				this.attributes.speechOutput = oops;
				this.attributes.repromptSpeech = tryAgain;
				this.emit(':ask', oops, tryAgain);
			}
			else if (typeof water == 'undefined' || typeof water == '') {
				var oops = 'Oops! You did not enter any water intake data for ' + date + '. Please enter all your health data to get a daily summary. What else would you like to know?';
				var tryAgain = 'What else would you like to know?';
				this.attributes.speechOutput = oops;
				this.attributes.repromptSpeech = tryAgain;
				this.emit(':ask', oops, tryAgain);
			}
			else if (typeof weight == 'undefined' || typeof weight == '') {
				var oops = 'Oops! You did not enter any weight data for ' + date + '. Please enter all your health data to get a daily summary. What else would you like to know?';
				var tryAgain = 'What else would you like to know?';
				this.attributes.speechOutput = oops;
				this.attributes.repromptSpeech = tryAgain;
				this.emit(':ask', oops, tryAgain);
			}
			else {
				var sl = parseInt(sleep, 10);
				var wa = parseInt(water, 10);
				var we = parseInt(weight, 10);
				sl>7 ? sl=10 : sl = ((sl/7).toFixed(1))*10;
				wa>8 ? wa = 10 : wa = ((wa/8).toFixed(1))*10;
				
				response = 'On ' + date + ' you slept for ' + sleep + ' hours. The recommended daily sleep requirement is 7 hours. On a scale of 10, your sleep is rated as ' + sl + '. You also had ' + water + ' glasses of water yesterday. The recommended daily water intake requirement is 8 glasses. On a scale of 10, your water intake is rated as ' + wa + '. As of ' + date + ' you weighed ' + weight + ' kilograms. ' + (we>80 ? 'You are overweight and should do daily work outs to get in shape and eat healthy.' : 'Your weight is perfect. Keep doing daily work outs and eat healthy.');
				
				response = response + ' What else would you like to know?';
				
				var anyElse = 'What else would you like to know?';
				this.attributes.speechOutput = response;
				this.attributes.repromptSpeech = anyElse;
				this.emit(':ask', response, anyElse);
			}
		});
	},
	
	'BodyMass': function() {
		var date = this.event.request.intent.slots.date.value;

		storage.getBodyMass(date, this.event.session, (height, weight) => {
			if (typeof height == 'undefined' || typeof height == '') {
				var oops = 'Oops! You did not enter any height data for ' + date + '. Please enter your height and weight data correctly to get a Body Mass Index rating. What else would you like to know?';
				var tryAgain = 'What else would you like to know?';
				this.attributes.speechOutput = oops;
				this.attributes.repromptSpeech = tryAgain;
				this.emit(':ask', oops, tryAgain);
			}
			else if (typeof weight == 'undefined' || typeof weight == '') {
				var oops = 'Oops! You did not enter any weight data for ' + date + '. Please enter your height and weight data correctly to get a Body Mass Index rating. What else would you like to know?';
				var tryAgain = 'What else would you like to know?';
				this.attributes.speechOutput = oops;
				this.attributes.repromptSpeech = tryAgain;
				this.emit(':ask', oops, tryAgain);
			}
			else {
				if(weight > 0 && height > 0){	
					var finalBmi = weight/(height/100*height/100);
					finalBmi = finalBmi.toFixed(1);
					response = 'On ' + date + ' your Body Mass Index was ' + finalBmi + '. According to this, you are ';
					if(finalBmi < 18.5){
						response = response + 'underweight. You should eat more.';
					}
					if(finalBmi > 18.5 && finalBmi < 25){
						response = response + 'healthy. Keep eating healthy and working out regularly.';
					}
					if(finalBmi > 25 && finalBmi < 30){
						response = response + 'overweight. You should eat healthy and do daily work outs to get in shape.';
					}
					if(finalBmi > 30){
						response = response + 'obese. You should eat healthy and do daily work outs to get in shape.';
					}
				}
				
				response = response + ' What else would you like to know?';
				
				var anyElse = 'What else would you like to know?';
				this.attributes.speechOutput = response;
				this.attributes.repromptSpeech = anyElse;
				this.emit(':ask', response, anyElse);
			}
		});
	},

	'Unhandled': function() {
		var sors = 'Sorry, I didn\'t get that. Please try again. What would you like to know?';
		var tryAgain = 'What would you like to know?';
		this.attributes.speechOutput = sors;
		this.attributes.repromptSpeech = tryAgain;
		this.emit(':ask', sors, tryAgain);
	},

	'AMAZON.HelpIntent': function () {
		var helpy = 'Tell me how much water you drank, how many hours you slept and how much you weigh currently. If you have already added all your health data for any particular date, then you may ask me to fetch your daily health summary for that date. What else would you like to know?';
		var tryAgain = 'What else would you like to know?';
		this.attributes.speechOutput = helpy;
		this.attributes.repromptSpeech = tryAgain;
		this.emit(':ask', helpy, tryAgain);
	},

	'AMAZON.StopIntent': function () {
		var say = 'Goodbye. Have a healthy day.';
		this.emit(':tell', say );
	},
	
	'AMAZON.CancelIntent': function () {
		var say = 'Goodbye. Have a healthy day.';
		this.emit(':tell', say );
	},
	
	'AMAZON.RepeatIntent': function () {
		this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
	}

}

exports.handler = function (event, context, callback) {
	var alexa = Alexa.handler(event, context);
	alexa.appId = 'amzn1.ask.skill.03bc3597-4bf4-4beb-b687-5b507585a3da';
	alexa.registerHandlers(handlers);
	alexa.execute();
}
