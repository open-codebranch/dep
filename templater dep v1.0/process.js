
// functions
const e = selector => document.querySelector(selector);
const number = (party, _party) => (party == 2) ? _party += "দ্বয়" :  (party == 3) ? _party +=  "গণ" : _party;
const ER = party => (party.endsWith("গণ")) ? party.replace(/গণ$/, "গণে") : (party.endsWith("দ্বয়")) ? party.replace(/দ্বয়$/, "দ্বয়ে") : party;

let _giverM = _giverF = _giverAnd = _receiverM = _receiverF = _receiverAnd = "";
let _giverPronoun = "আমি";
let _giverPronounR = "আমার";
let _receiverPronoun = "আপনি";
let _receiverPronounR = "আপনার";



e("#submit").addEventListener("click", function(){

	const currentTime = new Date();
	const currentHour = currentTime.getHours();

	let all = e("#all").value;
	let giverM = parseInt(all[4]);
	let giverF = parseInt(all[5]);
	let receiverM = parseInt(all[6]);
	let receiverF = parseInt(all[7]);

if (currentHour == all.substring(0, 2)){

if (all.substring(2, 4) == "01"){
// sale
	// 01 - Giver
		if (giverM != 0){ _giverM = number(giverM, "দাতা");	}
		if (giverF != 0){ _giverF = number(giverF, "দাত্রী"); }
		if (giverM + giverF > 1){_giverPronoun = "আমরা";_giverPronounR = "আমাদের";}
		if (giverM != 0 && giverF != 0){ _giverAnd = " ও "; }

	// 02 - Receiver
		if (receiverM != 0){ _receiverM = number(receiverM, "গ্রহিতা");	}
		if (receiverF != 0){ _receiverF = number(receiverF, "গ্রহিত্রী"); }

		if (receiverM + receiverF > 1){_receiverPronoun = "আপনারা";_receiverPronounR = "আপনাদের";}
		if (receiverM != 0 && receiverF != 0){ _receiverAnd = " ও "; }




		let [_giver, _receiver] = [(_giverM + _giverAnd + _giverF), (_receiverM + _receiverAnd + _receiverF)];
		let [_giverER, _receiverER] = [ER(_giver), ER(_receiver)];

e(".injectHere").innerHTML = `বর্তমানে ${_giverPronoun} অত্র দলিল ${_giverER}র নানা প্রকার বৈধ কারণে নগদ টাকার বিশেষ প্রয়োজন হওয়ায় উপরোল্লিখিত বর্ণিত রূপে নিম্ন তফসিল বর্ণিত সম্পত্তি প্রকাশ্যে সাফ বিক্রয় করার প্রস্তাব ঘোষণা করিলে ${_receiverPronoun} অত্র দলিল ${_receiver} উক্ত ভূমি খরিদ করিতে ইচ্ছুক হওয়ায় ${_giverPronoun} অত্র দলিল ${_giver} ${_receiverPronounR} নিকট বিক্রয় করিতে সম্মত হইয়া বর্ণিত ভূমির সাকূল্য মূল্যের টাকা ${_giverPronoun}  অত্র দলিল ${_giver} নগদ গ্রহণ করিয়া বর্ণিত দাগের সম্পত্তি অত্র সাফ কবলা দলিল দ্বারা ${_receiverPronounR} নিকট সাফ বিক্রয় করিলাম। 
<br>
<br>
অদ্য হইতে ${_receiverPronoun} অত্র দলিল ${_receiver} নিম্ন তফসিল বর্ণিত দাগের সম্পত্তিতে অদ্যকার খরিদ সূত্রে মালিক হইয়া ${_giverPronoun} অত্র দলিল ${_giverER}র যৎযাবতীয় স্বত্বে স্বত্ববান মালিক ও ভোগ দখলকার নিয়ত হইয়া ভূমি রাজস্ব অফিস সহ প্রয়োজনীয় অফিসে ${_giverPronoun} অত্র দলিল ${_giverER}র নামের পরিবর্তে ${_receiverPronoun} অত্র দলিল ${_receiverER}র নিজ${(receiverM + receiverF > 1) ? ' নিজ' : ''} নামে নামজারী ও জমাভাগ করাইয়া খাজনাদি পরিশোধক্রমে ভূমি কাটিয়া, ভরিয়া, সমান করিয়া পাকা-পোক্ত গৃহাদি নির্মাণ করিয়া বসবাস সহ ${_receiverPronounR} প্রয়োজনে দান, বিক্রয়, রেহান, বয়, ডিকলারেশন অব হেবা, বেল এওয়াজ হেবা, বন্ধক, বন্টন, এওয়াজ বদল বা বিনিময় ইত্যাদি সর্ব প্রকার হস্তান্তর ও রূপান্তরের ক্ষমতা পরিচালনে ${_receiverPronoun} অত্র দলিল ${_receiver} ও স্থলবর্তী উত্তরাধিকারীগণ ক্রমে পরম সুখে ভোগ বিনিয়োগ করিতে থাকিবেন। ইহাতে ${_giverPronoun} অত্র দলিল ${_giver} কিংবা ${_giverPronounR} কোন ওয়ারিশের ওজর আপত্তি দাবি-দাওয়া নাই ও রহিল না, করিলেও তাহা সর্ব আইন আদালতে অগ্রাহ্য ও বাতিল বলিয়া গণ্য হইবে।
<br>
<br>
যদি ভবিষ্যতে অত্র সাফ কবলা দলিলের গর্ভের বয়ানে, দাগ নম্বর, খতিয়ান নম্বর, নাম, ঠিকানা, সীমানা, চৌহুদ্দি ইত্যাদিতে কোন প্রকার ভুল-ত্রুটি পরিলক্ষিত হয় তজ্জন্য দলিল পণ্ড হইবে না বরং ${_giverPronoun} অত্র দলিল ${_giver}-কে জানাইলে পর ${_giverPronoun} বিনা ওজরে সাব-রেজিষ্ট্রার অফিসে উপস্থিত হইয়া ভুলের শুদ্ধ বর্ণনা দিয়া ${_receiverPronounR} বরাবরে ভ্রম সংশোধন দলিল সম্পাদন সহ রেজিষ্ট্রী কার্যাদি সম্পন্ন করিয়া দিব।
<br>
<br>
নিম্ন তফসিল বর্ণিত দাগের সম্পত্তি ${_giverPronoun} ইতোপূর্বে অন্যত্র কাহারো নিকট বিক্রয় করি নাই বা বিক্রয়ের চুক্তিতে কোথাও আবদ্ধ হই নাই কিংবা কোন সরকারী, আধাসরকারী বা বেসরকারী প্রতিষ্ঠানের নিকট দায়বদ্ধ রাখি নাই, যদি ভবিষ্যতে তদ্রুপ কোন কার্য প্রকাশ পায় এবং যদি ${_giverPronoun} অত্র দলিল ${_giver} কিংবা ${_giverPronounR} কোন ওয়ারিশ ${_receiverPronounR} ভোগ দখলে কোন প্রকার ব্যঘাত সৃষ্টি করে তাহা হইলে ${_giverPronoun} অত্র দলিল ${_giver} আইনতঃ দণ্ডনীয় হইব।`;

} else if (all.substring(2, 4) == "02"){
// power
	// 01 - Giver
		if (giverM != 0){ _giverM = number(giverM, "দাতা");	}
		if (giverF != 0){ _giverF = number(giverF, "দাত্রী"); }
		if (giverM + giverF > 1){_giverPronoun = "আমরা";_giverPronounR = "আমাদের";}
		if (giverM != 0 && giverF != 0){ _giverAnd = " ও "; }

	// 02 - Receiver
		if (receiverM != 0){ _receiverM = number(receiverM, "সাহেব");	}
		if (receiverF != 0){ _receiverF = number(receiverF, "সাহেবা"); }

		if (receiverM != 0 && receiverF != 0){ _receiverAnd = " ও "; }




		let [_giver, _receiver] = [(_giverM + _giverAnd + _giverF), (_receiverM + _receiverAnd + _receiverF)];
		let [_giverER, _receiverER] = [ER(_giver), ER(_receiver)];


e(".injectHere").innerHTML = `অদ্য হইতে ${_giverPronounR} নিযুক্তীয় পাওয়ার অব অ্যাটর্নি ${_receiver} উল্লেখিত এবং নিম্ন বর্ণিত কার্যাদি ${_giverPronounR} পক্ষে নিজ${(giverM + giverF > 1) ? ' নিজ' : ''} দায়িত্বে পরিচালনা করিবেন। উক্ত পাওয়ার অব অ্যাটর্নি ${_receiver} ${_giverPronounR} কর্তৃক সত্যিকার ও আইনানুগ পাওয়ার অব অ্যাটর্নি মনোনীত ও নিযুক্তীয় বটে। ${_giverPronounR} নিযুক্তীয় পাওয়ার অব অ্যাটর্নি ${_receiver} অত্র ভূমি বায়না, বিক্রয় এবং হস্তান্তর জনিত বৈধ কার্য পরিচালনা করিতে পারিবেন এবং বাংলাদেশ সুপ্রিম কোর্ট, হাইকোর্ট, জজকোর্ট, সহকারী জজকোর্ট, রাজস্ব বোর্ড, কালেক্টরীর আদালত, উপজেলা নির্বাহী অফিসারের দপ্তর, যে কোন ম্যাজিষ্ট্রেট ${_receiver}ের আদালত এবং যে কোন চেয়ারম্যান সাহেবের দপ্তর, পৌরসভার কার্যালয়, ডি.সি কোর্ট, পুলিশ অধিদপ্তরের যে কোন কার্যালয়, জেলা/উপজেলা, ইউনিয়ন পরিষদ কার্যালয়, বাংলাদেশের যে কোন ঋণ দানকারী সংস্থার কার্যালয়, গণপূর্ত/সড়ক ও জনপদ অধিদপ্তরের যে কোন কার্যালয়, বাংলাদেশের যে কোন ব্যাংক ও সরকারী/আধাসরকারী ও বেসরকারী অফিস আদালত সমূহে নিম্ন তফসিল বর্ণিত দাগের সম্পত্তির ব্যাপারে যাহা কিছু প্রযোজ্য হইবে তদ সমূদয় অফিস আদালতে ${_giverPronounR} পক্ষে বাদীতে বিবাদীতে বা তৃতীয় পক্ষতায় যে কোন প্রকার হস্তান্তর জনিত কার্যাদি এবং মামলা মোকদ্দমা পরিচালনার্থে উকিল, মোক্তার, ব্যারিষ্টার বা এজেন্ট নিয়োগ করিয়া উহার যৎ-যাবতীয় ইত্যাদি সহ কার্যাদি পরিচালনা করিবেন এবং বর্ণিত সম্পত্তির যাবতীয় মামলা মোকদ্দমা পরিচালনার্থে ওকালত নামায় আর্জিতে বা আপত্তিতে এবং আপত্তি সমূহের জবাবে যাবতীয় হলফ নামায় ${_giverPronounR} নাম লিখিয়া ‘ব’ কলমে স্বীয় নাম দস্তখত দ্বারা পরিচালনা করিতে পারিবেন এবং সংশ্লিষ্ট সাব-রেজিষ্ট্রার অফিসে উপস্থিত হইয়া সাফ-বিক্রয়, বায়না ইত্যাদি সর্ব প্রকার হস্তান্তর সূচক কার্যাদি ও অনুরূপভাবে করিতে পারিবেন। উল্লেখ্য যে, উল্লেখিত পাওয়ার অব অ্যাটর্নি ${_receiver} ${_giverPronounR} স্বার্থে ও হিতার্থে এবং সংশ্লিষ্ট বিষয়াদি অন্যান্য সকল প্রকার বৈধ কার্যাদি যাহা কিছু করিবেন তাহা ${_giverPronoun} অত্র দলিল ${_giver} অনুমোদন ও অনুসমর্থন করার সম্মতি ঘোষণা করিলাম। প্রকাশ থাকে যে, ${_giverPronoun} অত্র দলিল ${_giver} স্থির মস্তিষ্কে, সুস্থ্য শরীরে অন্যের বিনা প্ররোচনায় ${_giverPronounR} নিজ${(giverM + giverF > 1) ? ' নিজ' : ''} স্বার্থে ও হিতার্থে উল্লেখিত ${(receiverM + receiverF == 2) ? "ব্যক্তিদ্বয়" :  (receiverM + receiverF == 3) ? "ব্যক্তিগণ" : "ব্যক্তি"}কে পাওয়ার অব অ্যাটর্নি নিযুক্ত করিলাম। ${_giverPronounR} নিযুক্তীয় পাওয়ার অব অ্যাটর্নি ${_receiver} যাহা কিছু করিবেন তাহা সকলই ${_giverPronounR} স্বীয় কার্য বলিয়া গণ্য হইবে।`;

}




const range = document.createRange();
range.selectNodeContents(e(".injectHere"));
window.getSelection().addRange(range);
document.execCommand('copy');
window.getSelection().removeAllRanges();
}});
