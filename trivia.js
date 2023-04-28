const URL = ''
const button = document.getElementById('gen')
const display = document.getElementById('ques')
const answer = document.getElementById('ans')
const answers = document.querySelectorAll('.answerButton')
const a = document.getElementById('ans1')
const b = document.getElementById('ans2')
const c = document.getElementById('ans3')
const d = document.getElementById('ans4')
const r = document.getElementById('result')

function GenTrivia(){
    const URL = `https://opentdb.com/api.php?amount=1&type=multiple`
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            var cat = data.results[0].category
            var diff = data.results[0].difficulty
            var q = data.results[0].question

            var correct = data.results[0].correct_answer
            var inc_1 = data.results[0].incorrect_answers[0]
            var inc_2 = data.results[0].incorrect_answers[1]
            var inc_3 = data.results[0].incorrect_answers[2]

            console.log(data)

            var holder = [correct, inc_1, inc_2, inc_3]

            holder = holder.sort( () => .5 - Math.random())

            console.log(correct)
            console.log(holder)

            answers.forEach(function(butt, i) {
                butt.textContent = holder[i]
            })

            display.innerHTML= `Category: ${cat},<br> Difficulty: ${diff},<br> Question: ${q}`

            var a_val = a.innerText
            var b_val = b.innerText
            var c_val = c.innerText
            var d_val = d.innerText

            var button_corr;

            if (correct == a_val) {
                button_corr = a;
            } else if (correct == b_val) {
                button_corr = b;
            } else if (correct == c_val) {
                button_corr = c;
            } else if (correct == d_val) {
                button_corr = d;
            } else {
                console.log('Error!')
            }
            
            console.log(button_corr)

            a.addEventListener('click', function () {
                if (button_corr == a) {
                    document.body.style.backgroundColor = 'green'
                    console.log('a is correct')
                } else {
                    document.body.style.backgroundColor = 'red'
                    console.log('a is incorrect')
                }
            })
            b.addEventListener('click', function () {
                if (button_corr == b) {
                    document.body.style.backgroundColor = 'green'
                    console.log('b is correct')
                } else {
                    document.body.style.backgroundColor = 'red'
                    console.log('b is incorrect')
                }
            })
            c.addEventListener('click', function () {
                if (button_corr == c) {
                    document.body.style.backgroundColor = 'green'
                    console.log('c is correct')
                } else {
                    document.body.style.backgroundColor = 'red'
                    console.log('c is incorrect')
                }
            })
            d.addEventListener('click', function () {
                if (button_corr == d) {
                    document.body.style.backgroundColor = 'green'
                    console.log('d is correct')
                } else {
                    document.body.style.backgroundColor = 'red'
                    console.log('d is incorrect')
                }
            })



        })
}

function Refresh(){
    document.body.style.backgroundColor = '#6a4c93'
}

button.addEventListener('click', () => {
    Refresh()
    GenTrivia()
})
