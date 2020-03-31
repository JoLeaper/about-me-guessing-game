function isYes(text) {
    let input = String(text).toLowerCase();
    let answer = false;
    if (input === 'yes') answer = true;
    if (input === 'y') answer = true;
    if (input === 'yas') answer = true;
    if (input === 'ye') answer = true;

    return answer;
}

export default isYes;