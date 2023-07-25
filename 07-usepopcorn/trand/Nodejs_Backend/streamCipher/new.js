let round_keys = [];
let pt;

function convertDecimalToBinary(decimal) {
  let binary = decimal.toString(2);
  while (binary.length < 4) {
    binary = "0" + binary;
  }
  return binary;
}

function convertBinaryToDecimal(binary) {
  return parseInt(binary, 2);
}

function shiftLeftOnce(key_chunk) {  //1,2,9,16
  let shifted = "";
  for (let i = 1; i < 28; i++) {
    shifted += key_chunk[i];
  }
  shifted += key_chunk[0];
  return shifted;
}

function shiftLeftTwice(key_chunk) {  //
  let shifted = "";
  for (let i = 0; i < 2; i++) {
    for (let j = 1; j < 28; j++) {
      shifted += key_chunk[j];
    }
    shifted += key_chunk[0];
    key_chunk = shifted;
    shifted = "";
  }
  return key_chunk;
}

function xor(key, text) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    result += key[i] !== text[i] ? "1" : "0";
  }
  return result;
}

function generateKeys(key) {
  const pc1 = [
    57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35,
    27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46,
    38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4,
  ];

  const pc2 = [
    14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27,
    20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56,
    34, 53, 46, 42, 50, 36, 29, 32,
  ];

  let perm_key = "";
  for (let i = 0; i < 56; i++) {
    // Compressing
    perm_key += key[pc1[i] - 1];
  }

  let left = perm_key.substring(0, 28);
  let right = perm_key.substring(28, 56);
  for (let i = 0; i < 16; i++) {
    if (i === 0 || i === 1 || i === 8 || i === 15) {
      left = shiftLeftOnce(left);
      right = shiftLeftOnce(right);
    } else {
      left = shiftLeftTwice(left);
      right = shiftLeftTwice(right);
    }

    let combined_key = left + right;
    let round_key = "";

    for (let i = 0; i < 48; i++) {
      round_key += combined_key[pc2[i] - 1]; // Using the PC2 table to transpose the key bits
    }
    round_keys[i] = round_key;
    
  }
}

function DES() {
  const initial_permutation = [
    58, 50, 42, 34, 26, 18, 10, 2, 60, 52, 44, 36, 28, 20, 12, 4, 62, 54, 46,
    38, 30, 22, 14, 6, 64, 56, 48, 40, 32, 24, 16, 8, 57, 49, 41, 33, 25, 17, 9,
    1, 59, 51, 43, 35, 27, 19, 11, 3, 61, 53, 45, 37, 29, 21, 13, 5, 63, 55, 47,
    39, 31, 23, 15, 7,
  ];
  
  const expansion_table = [
    32, 1, 2, 3, 4, 5, 4, 5, 6, 7, 8, 9, 8, 9, 10, 11, 12, 13, 12, 13, 14, 15,
    16, 17, 16, 17, 18, 19, 20, 21, 20, 21, 22, 23, 24, 25, 24, 25, 26, 27, 28,
    29, 28, 29, 30, 31, 32, 1,
  ];
  
  const substitution_boxes = [
    [
      [14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 7],
      [0, 15, 7, 4, 14, 2, 13, 1, 10, 6, 12, 11, 9, 5, 3, 8],
      [4, 1, 14, 8, 13, 6, 2, 11, 15, 12, 9, 7, 3, 10, 5, 0],
      [15, 12, 8, 2, 4, 9, 1, 7, 5, 11, 3, 14, 10, 0, 6, 13],
    ],
    [
      [7, 13, 14, 3, 0, 6, 9, 10, 1, 2, 8, 5, 11, 12, 4, 15],
      [13, 8, 11, 5, 6, 15, 0, 3, 4, 7, 2, 12, 1, 10, 14, 9],
      [10, 6, 9, 0, 12, 11, 7, 13, 15, 1, 3, 14, 5, 2, 8, 4],
      [3, 15, 0, 6, 10, 1, 13, 8, 9, 4, 5, 11, 12, 7, 2, 14],
    ],
    [
      [2, 12, 4, 1, 7, 10, 11, 6, 8, 5, 3, 15, 13, 0, 14, 9],
      [14, 11, 2, 12, 4, 7, 13, 1, 5, 0, 15, 10, 3, 9, 8, 6],
      [4, 2, 1, 11, 10, 13, 7, 8, 15, 9, 12, 5, 6, 3, 0, 14],
      [11, 8, 12, 7, 1, 14, 2, 13, 6, 15, 0, 9, 10, 4, 5, 3],
    ],
    [
      [12, 1, 10, 15, 9, 2, 6, 8, 0, 13, 3, 4, 14, 7, 5, 11],
      [10, 15, 4, 2, 7, 12, 9, 5, 6, 1, 13, 14, 0, 11, 3, 8],
      [9, 14, 15, 5, 2, 8, 12, 3, 7, 0, 4, 10, 1, 13, 11, 6],
      [4, 11, 2, 14, 15, 0, 8, 13, 3, 12, 9, 7, 5, 10, 6, 1],
    ],
    [
      [7, 11, 4, 1, 9, 12, 14, 2, 0, 6, 10, 13, 15, 3, 5, 8],
      [1, 15, 13, 8, 10, 3, 7, 4, 12, 5, 6, 11, 0, 14, 9, 2],
      [2, 1, 14, 7, 4, 10, 8, 13, 15, 12, 9, 0, 3, 5, 6, 11],
      [12, 7, 11, 14, 1, 4, 2, 13, 6, 15, 0, 9, 10, 3, 5, 8],
    ],
    [
      [2, 12, 4, 1, 7, 10, 11, 6, 8, 5, 3, 15, 13, 0, 14, 9],
      [14, 11, 2, 12, 4, 7, 13, 1, 5, 0, 15, 10, 3, 9, 8, 6],
      [4, 2, 1, 11, 10, 13, 7, 8, 15, 9, 12, 5, 6, 3, 0, 14],
      [11, 8, 12, 7, 1, 14, 2, 13, 6, 15, 0, 9, 10, 4, 5, 3],
    ],
    [
      [12, 1, 10, 15, 9, 2, 6, 8, 0, 13, 3, 4, 14, 7, 5, 11],
      [10, 15, 4, 2, 7, 12, 9, 5, 6, 1, 13, 14, 0, 11, 3, 8],
      [9, 14, 15, 5, 2, 8, 12, 3, 7, 0, 4, 10, 1, 13, 11, 6],
      [4, 11, 2, 14, 15, 0, 8, 13, 3, 12, 9, 7, 5, 10, 6, 1],
    ],
    [
      [7, 13, 14, 3, 0, 6, 9, 10, 1, 2, 8, 5, 11, 12, 4, 15],
      [13, 8, 11, 5, 6, 15, 0, 3, 4, 7, 2, 12, 1, 10, 14, 9],
      [10, 6, 9, 0, 12, 11, 7, 13, 15, 1, 3, 14, 5, 2, 8, 4],
      [3, 15, 0, 6, 10, 1, 13, 8, 9, 4, 5, 11, 12, 7, 2, 14],
    ],
  ];
  
  const permutation_tab = [
    16, 7, 20, 21, 29, 12, 28, 17, 1, 15, 23, 26, 5, 18, 31, 10, 2, 8, 24, 14,
    32, 27, 3, 9, 19, 13, 30, 6, 22, 11, 4, 25,
  ];
  
  const inverse_permutation = [
    40, 8, 48, 16, 56, 24, 64, 32, 39, 7, 47, 15, 55, 23, 63, 31, 38, 6, 46, 14,
    54, 22, 62, 30, 37, 5, 45, 13, 53, 21, 61, 29, 36, 4, 44, 12, 52, 20, 60,
    28, 35, 3, 43, 11, 51, 19, 59, 27, 34, 2, 42, 10, 50, 18, 58, 26, 33, 1, 41,
    9, 49, 17, 57, 25,
  ];
  
  let perm = "";
  for (let i = 0; i < 64; i++) {
    perm += pt[initial_permutation[i] - 1];
  }
  
  let left = perm.substr(0, 32);
  let right = perm.substr(32, 32);
  // plain text is encrypted 16 times
  for (let i = 0; i < 16; i++) {
    let right_expanded = "";


    // The right half of the plain text is expanded
    for (let j = 0; j < 48; j++) {
      right_expanded += right[expansion_table[j] - 1];
    }
    
    let xored = xor(round_keys[i], right_expanded);
    console.log("xored", xored, i);
    let res = "";
    
    for (let j = 0; j < 8; j++) {
      
      let row1 = xored.substr(j * 6, 1) + xored.substr(j * 6 + 5, 1);
      console.log(xored.substr(j * 6, 1), xored.substr(j * 6 + 5, 1));
      console.log(row1);
      let row = convertBinaryToDecimal(row1);
      let col1 =
        xored.substr(j * 6 + 1, 1) +
        xored.substr(j * 6 + 2, 1) +
        xored.substr(j * 6 + 3, 1) +
        xored.substr(j * 6 + 4, 1);
      console.log(xored.substr(j * 6 + 1, 1));
      console.log(xored.substr(j * 6 + 2, 1));
      console.log(xored.substr(j * 6 + 3, 1));
      console.log(xored.substr(j * 6 + 4, 1));
      console.log(col1);
      let col = convertBinaryToDecimal(col1);
      let val = substitution_boxes[j][row][col];
      res += convertDecimalToBinary(val);
      console.log(
        "row-1",
        row1,
        "col-1",
        col1,
        "row",
        row,
        "col",
        col,
        "val",
        val,
        "res",
        res,
        "jjjjjjjjjjjjj",
        j
      );
    }
    
    let perm2 = "";
    for (let j = 0; j < 32; j++) {
      perm2 += res[permutation_tab[j] - 1];
    }
  
    xored = xor(perm2, left);
    // The left and the right parts of the plain text are swapped
    left = xored;
    if (i < 15) {
      let temp = right;
      right = xored;
      left = temp;
    }
  }
  // The halves of the plain text are applied
  let combined_text = left + right;
  let ciphertext = "";
  // The inverse of the initial permutation is applied
  for (let i = 0; i < 64; i++) {
    ciphertext += combined_text[inverse_permutation[i] - 1];
  }
  // Finally, we get the cipher text
  //console.log("combine-text",combined_text,"ciphertext",ciphertext);
  return ciphertext;
}

let key = "1010101010111011000010010001100000100111001101101100110011011101";

pt = "1010101111001101111001101010101111001101000100110010010100110110";
let newpt = pt;
// Calling the function to generate 16 keys
generateKeys(key);
// Applying the algorithm
console.log("pto", pt);
// Applying the algo

let ct = DES();

console.log("Ciphertext:", ct);

// Reversing the round_keys array for decryption
let i = 15;
let j = 0;
while (i > j) {
  temp = round_keys[i];
  console.log("1555555555555555", temp);
  round_keys[i] = round_keys[j];
  console.log("t22222222222222222222", round_keys[j]);
  round_keys[j] = temp;
  i--;
  j++;
}
pt = ct;
let decrypted = DES();
// Comapring the initial plain text with the decrypted text
if (decrypted == newpt) {
  console.log("Plain-text", newpt);
  console.log("Encrypted-text", ct);
  console.log("decrypted-text", decrypted);
}
