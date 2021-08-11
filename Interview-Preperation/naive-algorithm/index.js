function search(pat, txt) {
    let M = pat.length;
    let N = txt.length;
    for (let i = 0; i < N - M + 1; i++) {
        j = 0;
        while(j < M) {
            if (txt[i + j] != pat[j]) break;
            j += 1;
        }
        if (j == M) console.log("Pattern found at index ", i);
    };
};

let txt = "AABAACAADAABAAABAA";
let pat = "AABA";
search(pat, txt);
console.log(txt.split(pat))