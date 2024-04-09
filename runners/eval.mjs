export const evalRunner = (code) => {
    try {
        return eval(code);
    } catch (e) {
        return e.message;
    }
}