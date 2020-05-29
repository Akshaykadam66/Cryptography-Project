  var myMapNumber = new Map(); 
  myMapNumber.set('a',0);
  myMapNumber.set('b',1); 
  myMapNumber.set('c',2); 
  myMapNumber.set('d',3);
  myMapNumber.set('e',4); 
  myMapNumber.set('f',5); 
  myMapNumber.set('g',6); 
  myMapNumber.set('h',7); 
  myMapNumber.set('i',8); 
  myMapNumber.set('j',9); 
  myMapNumber.set('k',10); 
  myMapNumber.set('l',11); 
  myMapNumber.set('m',12); 
  myMapNumber.set('n',13); 
  myMapNumber.set('o',14);
  myMapNumber.set('p',15); 
  myMapNumber.set('q',16); 
  myMapNumber.set('r',17); 
  myMapNumber.set('s',18); 
  myMapNumber.set('t',19); 
  myMapNumber.set('u',20); 
  myMapNumber.set('v',21); 
  myMapNumber.set('w',22); 
  myMapNumber.set('x',23); 
  myMapNumber.set('y',24); 
  myMapNumber.set('z',25); 
  

  var myMapCharacter = new Map(); 
  myMapCharacter.set(0,'a');
  myMapCharacter.set(1,'b'); 
  myMapCharacter.set(2,'c');
  myMapCharacter.set(3,'d');
  myMapCharacter.set(4,'e');
  myMapCharacter.set(5,'f');
  myMapCharacter.set(6,'g');
  myMapCharacter.set(7,'h');
  myMapCharacter.set(8,'i');
  myMapCharacter.set(9,'j');
  myMapCharacter.set(10,'k');
  myMapCharacter.set(11,'l');
  myMapCharacter.set(12,'m');
  myMapCharacter.set(13,'n');
  myMapCharacter.set(14,'o');
  myMapCharacter.set(15,'p');
  myMapCharacter.set(16,'q');
  myMapCharacter.set(17,'r');
  myMapCharacter.set(18,'s');
  myMapCharacter.set(19,'t');
  myMapCharacter.set(20,'u');
  myMapCharacter.set(21,'v');
  myMapCharacter.set(22,'w');
  myMapCharacter.set(23,'x');
  myMapCharacter.set(24,'y');
  myMapCharacter.set(25,'z');
  
    function Encrypt(source,destination,passcode) {
        content = document.getElementById(source).value ;
        passcode = document.getElementById(passcode).value ;
        CipherText = encryptCodes(content,passcode);    
        document.getElementById(destination).innerText = CipherText ;
    }

     function Decrypt(source_,destination_,passcode_) {
        content = document.getElementById(source_).value;
        passcode = document.getElementById(passcode_).value;
        PlainText = decryptCodes(content,passcode);
        document.getElementById(destination_).innerText = PlainText;
    }

    function encryptCodes(content,passcode) {
        var result = []; 
        var passLen = passcode.length ;
        for(var i = 0  ; i < content.length ; i++) {
            // we are taking the mod because to repeat the key many times as required 
            // to become the same length of plaintext
            var passOffset = i%passLen;
            num_value1 = myMapNumber.get(content[i]);
            num_value2 = myMapNumber.get(passcode[passOffset]);
            sum = num_value1+num_value2;
            if(sum > 25){
                sum -= 26;
            }
            console.log(sum);
            char_value = myMapCharacter.get(sum);
            result.push(char_value);
        }
        return result.join('');
    }
 
    function decryptCodes(content,passcode) {
        var result_ = [];
        var passLen = passcode.length ;
        for(var i = 0  ; i < content.length ; i++){
          var passOffset = i%passLen;
          number_value_cipher_text = myMapNumber.get(content[i]);
          number_value_key = myMapNumber.get(passcode[passOffset]);
          substracted_value = number_value_cipher_text - number_value_key;
          // console.log(substracted_value);
          added_value = substracted_value + 26 ;
          mod_value = added_value % 26 ;
          // console.log(mod_value);
          DecryptedChar = myMapCharacter.get(mod_value);
          console.log(DecryptedChar);
          result_.push(DecryptedChar);
        }
        return result_.join('');  
      }
