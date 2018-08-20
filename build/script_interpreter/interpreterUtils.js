function hex2bin(hexStr){
	
	var out = "";
	
	if(hexStr.length % 2 !== 0){
		hexStr = "0" + hexStr;
	}
	
	for(var i = 0; i < hexStr.length; i += 2){
		var towChars = hexStr.substring(i, i + 2);
		var res = 0;
		for(var j = 0; j < 2; j++){
			
			var ch = towChars.charCodeAt(j);
			if(ch <= '9'.charCodeAt(0)){
				ch -= '0'.charCodeAt(0);
			}else if(ch <= 'F'.charCodeAt(0)){
				ch -= 'A'.charCodeAt(0);
				ch += 10;
			}else if(ch <= 'f'.charCodeAt(0)){
				ch -= 'a'.charCodeAt(0);
				ch += 10;
			}
			
			res = ch + res*16;
		}
		out = out + String.fromCharCode(res);
	}
	
	return out;
}

function addTowStringsAsNumbers(str1, str2){
  str1a = str1.split('').reverse();
  str2a = str2.split('').reverse();
  let output = '';
  let longer = Math.max(str1.length, str2.length);
  let carry = false;
  for (let i = 0; i < longer; i++) {
    let result
    if (str1a[i] && str2a[i]) {
      result = parseInt(str1a[i]) + parseInt(str2a[i]);

    } else if (str1a[i] && !str2a[i]) {
      result = parseInt(str1a[i]);

    } else if (!str1a[i] && str2a[i]) {
      result = parseInt(str2a[i]);
    }

    if (carry) {
        result += 1;
        carry = false;
    }
    if(result >= 10) {
      carry = true;
      output += result.toString()[1];
    }else {
      output += result.toString();
    }
  }
  output = output.split('').reverse().join('');

  if(carry) {
    output = '1' + output;
  }
  return output;
}
