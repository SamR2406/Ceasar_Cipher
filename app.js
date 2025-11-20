const messageInput = document.getElementById("message");
const shiftInput = document.getElementById("shift");
const resultBox = document.getElementById("result");
const encryptBtn = document.getElementById("encrypt");
const decryptBtn = document.getElementById("decrypt");
const clearBtn = document.getElementById("clear");

const normalizeShift = (shift) => {
  const n = parseInt(shift, 10);
  if (Number.isNaN(n)) return 0;
  return ((n % 26) + 26) % 26; // keep it in [0, 25]
  
};

const caesar = (text, shift) => {
  const normalized = normalizeShift(shift);
  return text
    .split("")
    .map((char) => {
      if (!/[a-z]/i.test(char)) return char;
      const base = char >= "a" && char <= "z" ? "a".charCodeAt(0) : "A".charCodeAt(0);
      const charCode = char.charCodeAt(0) - base;
      const shifted = (charCode + normalized) % 26;
      return String.fromCharCode(base + shifted);
    })
    .join("");
};

encryptBtn.addEventListener("click", () => {
  const text = messageInput.value;
  const shift = shiftInput.value;
  resultBox.textContent = caesar(text, shift);
});

decryptBtn.addEventListener("click", () => {
  const text = messageInput.value;
  const shift = shiftInput.value;
  resultBox.textContent = caesar(text, -shift);
});

clearBtn.addEventListener("click", () => {
  messageInput.value = "";
  resultBox.textContent = "";
});
