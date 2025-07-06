const permuteString = (string, prefix = "", arr = new Set()) => {
  if (string.length === 0) {
    arr.add(prefix);
    
  } else {
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      const remaining = string.slice(0, i) + string.slice(i + 1);
      permuteString(remaining, prefix + char, arr)
    }
  }
  return Array.from(arr); 
}

/* 
instead of creating an empty array, we create an empty Set by default if prefix and arr not given on first call
sets by default do not add items that already exist in the Set. (sets remove duplicates)
then convert back to array at the end

explanation of recursive step: 
->loop through string characters using indices
->extract the character using string[i] where i is the index of the string
->other characters are extracted using slice, example if input is "far" then
char = "f" and remaining = "ar" when i = 0
*/

/* Sample Call: 
permuteString("far") -> permuteString("far", "", Set())

i=0 
char = "f"
remaining = "ar"
-> permuteString("ar", "f", {})
-> new string input is "ar" and new prefix is "f", new i=0
-> i=0
-> char = "a"
-> remaining = "r"
--> permuteString("r", "fa", {})
--> new i=0
--> char = "r"
--> remaining = ""
---> permuteString("", "far", {})
---> since string length is 0, prefix of "far" is added to the empty Set
--> {"far"}
-> i=1
-> char = "r"
-> remaining = "a"
--> permuteString("a", "fr", {"far"})
--> new i=0
--> char = "a"
--> remaining = ""
---> permuteString("", "fra", {"far"})
--> arr={"far", "fra"} since string="" here, we simply reach base case and add prefix="fra" to Set
-> we've now taken care of permuteString("ar", "f", {}) which is i=0 of original

i=1
char = "a"
remaining = "fr"
-> permuteString("fr", "a", {"far", "fra"})
-> i=0
-> char = "f"
-> remaining = "r"
--> permuteString("r", "af", {"far", "fra"})
--> i=0
--> char = "r"
--> remaining = ""
---> permuteString("", "afr", {"far", "fra"})
--> arr={"far", "fra", "afr"}
-> jump back to permuteString("fr"...) section
-> i=1
-> char="r"
-> remaining="f"
--> permuteString("f", "ar", {"far", "fra", "afr"})
--> i=0
--> char = "f"
--> remaining = ""
---> permuteString("", "arf", {"far", "fra", "afr"})
--> arr={"far", "fra", "afr", "arf"}
-> we've now taken care of permuteString("fr", "a", {"far", "fra"}) which is i=1 of original

i=2 
char = "r"
remaining = "fa"
-> permuteString("fa", "r", {"far", "fra", "afr", "arf"})
-> i=0
-> char = "f"
-> remaining = "a"
--> permuteString("a", "rf", {"far", "fra", "afr", "arf"})
--> i=0
--> char = "a"
--> remaining = ""
---> permuteString("", "rfa", {"far", "fra", "afr", "arf"})
--> arr={"far", "fra", "afr", "arf", "rfa"}
-> jump back to permuteString("fa"...) but now we do the i=1 part of its loop
-> i=1
-> char = "a"
-> remaining = "f"
--> permuteString("f", "ra", {"far", "fra", "afr", "arf", "rfa"})
--> i=0
--> char = "f"
--> remaining = ""
---> permuteString("", "raf", {"far", "fra", "afr", "arf", "rfa"})
--> arr={"far", "fra", "afr", "arf", "rfa", "raf"}
-> we've now taken care of permuteString("fa", "r", arr) and finished the loop 

return Array.from(arr)
this just converts the Set object into an Array

*/

console.log(permuteString("far"));
console.log(permuteString("fcc"));
console.log(permuteString("p"));
console.log(permuteString(""));
console.log(permuteString("walk"));