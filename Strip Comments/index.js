function solution(input, markers){
    return input.replace(new RegExp("\\s?[" + markers.join("") + "].*(\\n)?", "gi"), "$1");
}
console.log(solution("apples, pears # and bananas", ["#", "!"]))