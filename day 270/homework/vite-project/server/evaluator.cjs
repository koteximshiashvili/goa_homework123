function evaluate(userCode, input, expectedOutput) {
  try {
    const userFunction = new Function("input", `
      ${userCode}
    `);

    const result = userFunction(input);

    if (String(result).trim() === String(expectedOutput).trim()) {
      return { success: true, message: "✅ Correct!" };
    } else {
      return {
        success: false,
        message: `❌ Expected ${expectedOutput}, but got ${result}`
      };
    }
  } catch (err) {
    return {
      success: false,
      message: "⚠️ Code error: " + err.message
    };
  }
}

module.exports = evaluate;