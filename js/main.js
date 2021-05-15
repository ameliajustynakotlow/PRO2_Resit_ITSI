
//---------------------------- PASSENGER X0A44 ---------------------------- 

//var passengerLogin = prompt ('Welcome', 'enter your passenger login');
//var passengerLogin = prompt ('Welcome, Passenger XOA44', 'enter your password');


//---------------------------- DATE & TIME ---------------------------- 

var d = new Date();
document.getElementById("date").innerHTML = d;


//---------------------------- MARTIAN TRANSLATE ---------------------------- 

var phrase1 = 'Thank you so much.';
var phrase2 = 'Excuse me.';
var phrase3 = 'I’m sorry.';
var phrase4 = 'What do you think?';
var phrase5 = 'That sounds great.';
var phrase6 = 'I’m learning Martian.';
var phrase7 = 'I don’t understand.';
var phrase8 = 'Could you repeat that please?';
var phrase9 = 'Can you help me, please?';
var phrase10 = 'Thank you for help.';

var englishPhrases = new Array ('Thank you so much.','Excuse me.','I am sorry.','What do you think?','That sounds great.','I am learning Martian.', 'I do not understand.', 'Could you repeat that please?', 'Can you help me, please?','Thank you for help.');
//englishPhrases [2] = 'I am sorry.';
//console.log (englishPhrases.lenght);


//---------------------------- OBJECTS ---------------------------- 

var phrase1 = {
				Number: 1,
				English: 'Thank you so much.',
				Martian: 'மிக்க நன்றி.',
				Pronunciation: 'Mikka naṉṟi.',
			  };

var phrase2 = {
				Number: 2,
				English: 'Excuse me.',
				Martian: 'மன்னிக்கவும்.',
				Pronunciation: 'Maṉṉikkavum',
			  };

var phrase3 = {
				Number: 3,
				English:'I am sorry.',
				Martian: 'மன்னிக்கவும்.',
				Pronunciation: 'Maṉṉikkavum',
			  };

var phrase4 =  {
				Number: 4,
				English: 'What do you think?',
				Martian: 'நீங்கள் என்ன நினைக்கிறீர்கள்?',
				Pronunciation: 'Nīṅkaḷ eṉṉa niṉaikkiṟīrkaḷ?',
			  };

var phrase5 = {
				Number: 5,
				English: 'That sounds great.',
				Martian: 'அது நன்றாக இருக்கிறது.',
				Pronunciation: 'Atu naṉṟāka irukkiṟatu.',
			  };

var phrase6 = {
				Number: 6,
				English: 'I am learning Martian.',
				Martian: 'நான் செவ்வாய் மொழியைக் கற்கிறேன்.',
				Pronunciation: 'nāṉ cevvāy moḻiyaik kaṟkiṟēṉ.',
			  };

var phrase7 = {
				Number: 7,
				English: 'I do not understand.',
				Martian: 'எனக்கு புரியவில்லை.',
				Pronunciation: 'Eṉakku puriyavillai.',
			  };

var phrase8 = {
				Number: 8,
				English: 'Could you repeat that please?',
				Martian: 'தயவுசெய்து அதை மீண்டும் செய்ய முடியுமா?',
				Pronunciation: 'Tayavuceytu atai mīṇṭum ceyya muṭiyumā?',
			  };

var phrase9 = {
				Number: 9,
				English: 'Can you help me, please?',
				Martian: 'தயவுசெய்து எனக்கு உதவ முடியுமா?',
				Pronunciation: 'Tayavuceytu eṉakku utava muṭiyumā?',
			  };

var phrase10 = {
				Number: 10,
				English:  'Thank you for help.',
				Martian: 'உதவிக்கு நன்றி.',
				Pronunciation: 'Utavikku naṉṟi.',
			  };


console.log(phrase4.Martian.Pronunciation);


//---------------------------- METHOD ---------------------------- 


var phrase4 =  {
				Number: 4,
				Martian: 'நீங்கள் என்ன நினைக்கிறீர்கள்?',
				Pronunciation: 'Nīṅkaḷ eṉṉa niṉaikkiṟīrkaḷ?',
				isTranslated: false,

				translation: function(){
							 //alert('Great job!')
							 //alert('or I should rather say: பெரிய வேலை!')
							 this.isTranslated = true;
										}
				};

console.log(phrase4.isTranslated);
phrase4.translation();
//to check: //console.log(phrase4.isTranslated);

// only the example, no time :( 


/*
//WHEN YOU'LL DELETE ABOVE /* SIGN, REST OF THE CONTENT SOULD BE ACTIVED


//---------------------------- MARTIAN TRANSLATE ---------------------------- 

var phrase1 = 'Thank you so much.';
var phrase2 = 'Excuse me.';
var phrase3 = 'I’m sorry.';
var phrase4 = 'What do you think?';
var phrase5 = 'That sounds great.';
var phrase6 = 'I’m learning Martian.';
var phrase7 = 'I don’t understand.';
var phrase8 = 'Could you repeat that please?';
var phrase9 = 'Can you help me, please?';
var phrase10 = 'Thank you for help.';

var englishPhrases = new Array ('Thank you so much.','Excuse me.','I am sorry.','What do you think?','That sounds great.','I am learning Martian.', 'I do not understand.', 'Could you repeat that please?', 'Can you help me, please?','Thank you for help.');
//englishPhrases [2] = 'I am sorry.';
//console.log (englishPhrases.lenght);

var martian1 = 'மிக்க நன்றி.';
var martian2 = 'மன்னிக்கவும்.';
var martian3 = 'மன்னிக்கவும்.';
var martian4 = 'நீங்கள் என்ன நினைக்கிறீர்கள்?';
var martian5 = 'அது நன்றாக இருக்கிறது.';
var martian6 = 'நான் ஆங்கிலம் கற்கிறேன்.';
var martian7 = 'எனக்கு புரியவில்லை.';
var martian8 = 'தயவுசெய்து அதை மீண்டும் செய்ய முடியுமா?';
var martian9 = 'தயவுசெய்து மெதுவாக பேச முடியுமா?';
var martian10 ='நன்றி. அது நிறைய உதவுகிறது.';

var martianPhrases = new Array ('மிக்க நன்றி.','மன்னிக்கவும்.','மன்னிக்கவும்.','நீங்கள் என்ன நினைக்கிறீர்கள்?','அது நன்றாக இருக்கிறது.','நான் ஆங்கிலம் கற்கிறேன்.','எனக்கு புரியவில்லை.', 'தயவுசெய்து அதை மீண்டும் செய்ய முடியுமா?', 'தயவுசெய்து மெதுவாக பேச முடியுமா?','நன்றி. அது நிறைய உதவுகிறது.');
//console.log (martianPhrases.lenght);

var translate1 = 'Mikka naṉṟi.';
var translate2 = 'Maṉṉikkavum.';
var translate3 = 'Maṉṉikkavum.';
var translate4 = 'Nīṅkaḷ eṉṉa niṉaikkiṟīrkaḷ?';
var translate5 = 'Atu naṉṟāka irukkiṟatu.';
var translate6 = 'Nāṉ āṅkilam kaṟkiṟēṉ.';
var translate7 = 'Eṉakku puriyavillai.';
var translate8 = 'Tayavuceytu atai mīṇṭum ceyya muṭiyumā?';
var translate9 = 'Tayavuceytu metuvāka pēca muṭiyumā?';
var translate10 ='Naṉṟi. Atu niṟaiya utavukiṟatu.';

var translatedPhrases = new Array ('Mikka naṉṟi.', 'Maṉṉikkavum.','Maṉṉikkavum.','Nīṅkaḷ eṉṉa niṉaikkiṟīrkaḷ?','Atu naṉṟāka irukkiṟatu.', 'Nāṉ āṅkilam kaṟkiṟēṉ.', 'Eṉakku puriyavillai.', 'Tayavuceytu atai mīṇṭum ceyya muṭiyumā?', 'Tayavuceytu metuvāka pēca muṭiyumā?','Naṉṟi. Atu niṟaiya utavukiṟatu.');
//console.log (translatedPhrases.lenght);


englishPhrases[1] = martianPhrases[1] + translatedPhrases[1];
englishPhrases[2] = martianPhrases[2] + translatedPhrases[2];
englishPhrases[2] = martianPhrases[3] + translatedPhrases[3];
englishPhrases[3] = martianPhrases[4] + translatedPhrases[4];
englishPhrases[4] = martianPhrases[5] + translatedPhrases[5];
englishPhrases[5] = martianPhrases[6] + translatedPhrases[6];
englishPhrases[6] = martianPhrases[7] + translatedPhrases[7];
englishPhrases[8] = martianPhrases[8] + translatedPhrases[8];
englishPhrases[9] = martianPhrases[9] + translatedPhrases[9];
englishPhrases[10] = martianPhrases[10] + translatedPhrases[10];


//REUSABLE FUNCTION for the set of correct answers
function phraseSet (number){
	var number = Math.random();
	number = (number+10)+1;
	number = Math.floor(number);
	return number;
}
console.log(phraseSet);


//---------------------------- NODES ---------------------------- 


var node = document.getElementByClassName('.englishPhrases');
node.innerHTML = '.martianPhrases ' + ' .translatedPhrases';



//---------------------------- OBJECTS ---------------------------- 

var phrase1 = {
				Number: 1,
				Martian: 'மிக்க நன்றி.',
				Pronunciation: 'Mikka naṉṟi.',
			  };

var phrase2 = {
				Number: 2,
				Martian: 'மன்னிக்கவும்.',
				Pronunciation: 'Maṉṉikkavum',
			  };
// etc.


var phrase3 = {
				Number: 3,
				Martian: 'மன்னிக்கவும்.',
				Pronunciation: 'Maṉṉikkavum',
			  };

var phrase4 =  {
				Number: 4,
				Martian: 'நீங்கள் என்ன நினைக்கிறீர்கள்?',
				Pronunciation: 'Nīṅkaḷ eṉṉa niṉaikkiṟīrkaḷ?',
			  };

var phrase5 = {
				Number: 5,
				Martian: 'அது நன்றாக இருக்கிறது.',
				Pronunciation: 'Atu naṉṟāka irukkiṟatu.',
			  };

// etc.

var phrase6 = 'I’m learning Martian.';
var phrase7 = 'I don’t understand.';
var phrase8 = 'Could you repeat that please?';
var phrase9 = 'Can you help me, please?';
var phrase10 = 'Thank you for help.';

var martian6 = 'நான் ஆங்கிலம் கற்கிறேன்.';
var martian7 = 'எனக்கு புரியவில்லை.';
var martian8 = 'தயவுசெய்து அதை மீண்டும் செய்ய முடியுமா?';
var martian9 = 'தயவுசெய்து மெதுவாக பேச முடியுமா?';
var martian10 ='நன்றி. அது நிறைய உதவுகிறது.';

var translate6 = 'Nāṉ āṅkilam kaṟkiṟēṉ.';
var translate7 = 'Eṉakku puriyavillai.';
var translate8 = 'Tayavuceytu atai mīṇṭum ceyya muṭiyumā?';
var translate9 = 'Tayavuceytu metuvāka pēca muṭiyumā?';
var translate10 ='Naṉṟi. Atu niṟaiya utavukiṟatu.';


console.log(phrase4.Martian.Pronunciation);


//---------------------------- METHOD ---------------------------- 


var phrase4 =  {
				Number: 4,
				Martian: 'நீங்கள் என்ன நினைக்கிறீர்கள்?',
				Pronunciation: 'Nīṅkaḷ eṉṉa niṉaikkiṟīrkaḷ?',
				isTranslated: false,

				translation: function(){
							 alert('Great job!')
							 alert('or I should rather say: பெரிய வேலை!')
							 this.isTranslated = true;
										};
				}

console.log(phrase4.isTranslated);
phrase4.translation();
to check: //console.log(phrase4.isTranslated);

// only the example, no time :( 

//---------------------------- MARTIAN CURRENCY (additional idea) ---------------------------- 

//var euro = 1;
//var martianRock = euro/0.834;

//REUSABLE FUNCTION
function euroToRock(euro){
	var martianRock = euro/0.834;
	return martianRock;
}

console.log(euroToRock(1000000));

//How many Martian Rocks you can get for: 45000, 5829, 20038 Euro?
console.log(euroToRock());
console.log(euroToRock());
console.log(euroToRock());




// Fill with gradient
//ctx.strokeStyle = gradient;
//ctx.strokeText("Start your daily Martian classes", 10, 90);

/*
var video = document.getElementByClassName("camera1");
vid.volume = 10%;

var video = document.getElementByClassName("camera2");
vid.volume = 0%;

var video = document.getElementByClassName("camera2");
vid.volume = 0%;
*/

