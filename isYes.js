function isYes(text) {
    let answer = false;
    let input = text.toLowerCase();
    if (input === 'yes') answer = true;
    if (input === 'y') answer = true;
    if (input === 'yas') answer = true;
    if (answer === 'ye') answer = true;

    return answer;
}


export default isYes;