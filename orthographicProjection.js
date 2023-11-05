document.getElementById("canvas1").setAttribute("width", 500)
document.getElementById("canvas1").setAttribute("height", 500)
document.getElementById("canvas2").setAttribute("width", 500)
document.getElementById("canvas2").setAttribute("height", 500)
ctx1 = document.getElementById("canvas1").getContext("2d")
ctx2 = document.getElementById("canvas2").getContext("2d")

window.onload = function() {
    submit()
}

function submit() {
    theta = document.getElementById("submit").value;
    document.getElementById("value").innerText = theta + "°";
    if (theta == "") {
        document.getElementById("value").innerText = "0°";
    }
    if (theta > 90 || theta < 0) {
        document.getElementById("value").style.background = "red";
    } else {
        document.getElementById("value").style.background = "none";
    }

    sinTheta = Math.sin(theta * Math.PI / 180)
    cosTheta = Math.cos(theta * Math.PI / 180)

    ctx1.clearRect(0, 0, document.getElementById("canvas1").width, document.getElementById("canvas1").height)
    ctx2.clearRect(0, 0, document.getElementById("canvas2").width, document.getElementById("canvas2").height)

    // Canvas1에서의 ABCD
    ctx1.beginPath()
    ctx1.moveTo(0, 500)
    ctx1.lineTo(500, 500)
    ctx1.lineWidth = 10
    ctx1.strokeStyle = "blue"
    ctx1.stroke()

    // Canvas1에서의 정사영
    ctx1.beginPath()
    ctx1.moveTo(0, 500)
    ctx1.lineTo(500 * cosTheta, 500)
    ctx1.lineWidth = 10
    ctx1.strokeStyle = "yellow"
    ctx1.stroke()

    // Canvas1에서의 A'B'C'D'
    ctx1.beginPath()
    ctx1.moveTo(0, 500)
    ctx1.lineTo(500 * cosTheta, 500 - (500 * sinTheta))
    ctx1.lineWidth = 10
    ctx1.strokeStyle = "red"
    ctx1.stroke()

    // Canvas2에서의 ABCD
    ctx2.beginPath()
    ctx2.moveTo(0, 500)
    ctx2.lineTo(250, 500)
    ctx2.lineTo(250, 0)
    ctx2.lineTo(0, 0)
    ctx2.lineTo(0, 500)
    ctx2.lineWidth = 10
    ctx2.strokeStyle = "blue"
    ctx2.stroke()

    // Canvas2에서의 A'B'C'D'
    ctx2.beginPath()
    ctx2.moveTo(0, 500)
    ctx2.lineTo(250, 500)
    ctx2.lineTo(250, 500 - (500 * cosTheta))
    ctx2.lineTo(0, 500 - (500 * cosTheta))
    ctx2.lineTo(0, 500)
    ctx2.lineWidth = 10
    ctx2.strokeStyle = "red"
    ctx2.stroke()

    // A', B', C', D'의 좌표
    document.getElementById("p1").innerText = "sin θ ≒ " + Math.round(sinTheta * 100) / 100 + "\ncos θ ≒ " + Math.round(cosTheta * 100) / 100 + "\nA'(0, 0, 0)\nB'(5, 0, 0)\nC'(5, " + Math.round(10 * cosTheta * 100) / 100 + ", " + Math.round(10 * sinTheta * 100) / 100 + ")\nD'(0, " + Math.round(10 * cosTheta * 100) / 100 + ", " + Math.round(10 * sinTheta * 100) / 100 + ")"

    // A', B', C', D'의 좌표로 구한 정사영의 넓이, 교과서의 정사영의 넓이 공식으로 구한 정사영의 넓이
    document.getElementById("p2").innerHTML = "A', B', C', D'의 좌표를 이용하여 계산한 정사영의 넓이(S')는 <a>A'B'</a> * <a>B'C'</a> = 5 * " + Math.round(10 * cosTheta * 100) / 100 + " ≒ " + Math.round(5 * 10 * cosTheta * 100) / 100 + "이다.<br>이때 <a>A'B'</a> = <a>AB</a>이며 좌측 그래프와 같이 <a>B'C'</a> = <a>BC</a> * cos θ이다.<br>따라서 S' = <a>AB</a> * <a>BC</a> * cos θ = S * cos θ이며, 이렇게 교과서의 수식 S' = S * cos θ이 성립함을 시각적으로 보일 수 있다.<br>5 * 10 * " + Math.round(cosTheta * 100) / 100 + " = " + Math.round(5 * 10 * cosTheta * 100) / 100 + "이다."
}