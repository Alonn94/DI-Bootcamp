function areAnagrams(str1, str2) {
    const cleanedStr1 = str1.replace(/\s+/g, '').toLowerCase();
    const cleanedStr2 = str2.replace(/\s+/g, '').toLowerCase();

    return cleanedStr1.split('').sort().join('') === cleanedStr2.split('').sort().join('');
}

console.log(areAnagrams("Astronomer", "Moon starer"));  
console.log(areAnagrams("School master", "The classroom"));  




