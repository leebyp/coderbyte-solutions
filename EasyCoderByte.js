function firstReverse(str) {
	return str.split('').reverse().join('');
}

function firstReverse(str) {
	for (var i=0; i<str.length; i++) {
		rev_s += str.substring(i-1, i);
	}
	return rev_s;
}

function firstFactorial(num) {
	factorial = 1;
	for (var i=num; i>0; i--) {
		factorial *= i;
	}
	return factorial;
}

function longest_word(sen) {
	var words = sen.match(/[a-z]{0,}/gi);
	longest_length = 0;
	longest_index = 0;
	for (var i=0; i<words.length; i++) {
		if (words[i].length > longest_length) {
			longest_length = words[i].length;
			longest_index = i;
		}
	}
	return words[longest_index];
}

function letter_changes(str) {
	var alphabet1 =  '';
	var alphabet2 = '';
	var newstring1 = '';
	var newstring2 ='';

	for (var i=0; i<str.length; i++) {
		if (str.charAt(i) == 'z') {
			newstring1 += 'a';
		}
		else if (str.charAt(i) == 'Z') {
			newstring1 += 'A';
		}
		else if (alphabet1.indexOf(str.charAt(i)) != -1) {
			newstring1 += alphabet1[alphabet1.indexOf(str.charAt(i))+1];
		}
		else if (alphabet2.indexOf(str.charAt(i)) != -1) {
			newstring1 += alphabet2[alphabet2.indexOf(str.charAt(i))+1];
		}
		else {
			newstring1 += str.charAt(i);
		}
	}

	for (var i=0; i<str.length; i++) {
		if (newstring1.charAt(i) == 'a') {};
		
	}
}