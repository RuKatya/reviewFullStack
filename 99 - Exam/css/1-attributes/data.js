exports.questions = [
    {
        num: 1,
        q: 'How you will select all elements with an href containing "example"',
        ans1: {
            text: 'a[example]', correct: false
        },
        ans2: {
            text: 'a[href$="example"]', correct: false
        },
        ans3: {
            text: 'a[href^="example"]', correct: false
        },
        ans4: {
            text: 'a[href*="example"]', correct: true
        },
        correctAns: 'a[href*="example"]'

    },
    {
        num: 2,
        q: 'How you will select all elements without a `lang` attribute',
        ans1: {
            text: 'div[lang^="lang"]', correct: false
        },
        ans2: {
            text: 'div[lang*="attr" i]', correct: false
        },
        ans3: {
            text: 'div[lang="pt"]', correct: false
        },
        ans4: {
            text: 'div:not([lang])', correct: true
        },
        correctAns: 'div:not([lang])'
    },
    {
        num: 3,
        q: 'How you will select all elements with an href ending ".com"',
        ans1: {
            text: 'a[href$=".com"]', correct: true
        },
        ans2: {
            text: 'a[href*=".com"]', correct: false
        },
        ans3: {
            text: 'a[href^=".com"]', correct: false
        },
        ans4: {
            text: '[href~=".com"]', correct: false
        },
        correctAns: 'a[href$=".com"]'
    },

    {
        num: 4,
        q: 'How you will select all elements with case-insensitive value',
        ans1: {
            text: 'a[href^="insensitive"]', correct: false
        },
        ans2: {
            text: 'a[href*="insensitive" i]', correct: true
        },
        ans3: {
            text: 'a[href*="cAsE" s]', correct: false
        },
        ans4: {
            text: 'a[type="B" s]', correct: false
        },
        correctAns: 'a[href*="insensitive" i]'
    },
    {
        num: 5,
        q: 'How you will select all elements with a title attribute',
        ans1: {
            text: 'a[href*="title" s]', correct: false
        },
        ans2: {
            text: 'a[href|="title"]', correct: false
        },
        ans3: {
            text: 'a[title]', correct: true
        },
        ans4: {
            text: 'a[lang="title"]', correct: false
        },
        correctAns: 'a[title]'
    },
    {
        num: 6,
        q: 'How you will select all elements with Chinese languege',
        ans1: {
            text: 'div[lang~="zh-CN"]', correct: false
        },
        ans2: {
            text: 'div[lang|="zh"]', correct: true
        },
        ans3: {
            text: 'div[lang="zh"]', correct: false
        },
        ans4: {
            text: 'div[lang]', correct: false
        },
        correctAns: 'div[lang|="zh"]'
    },
    {
        num: 7,
        q: 'How you will select all divs with a `lang` attribute',
        ans1: {
            text: 'div[lang]', correct: true
        },
        ans2: {
            text: 'div[lang~="lang"]', correct: false
        },
        ans3: {
            text: 'div[href^="lang"]', correct: false
        },
        ans4: {
            text: 'div[data-lang="lang"]', correct: false
        },
        correctAns: 'div[lang]'
    },
    {
        num: 8,
        q: 'How you will select all elements beginning with "#"',
        ans1: {
            text: 'a[href*="#"]', correct: false
        },
        ans2: {
            text: 'a[href$="$"]', correct: false
        },
        ans3: {
            text: 'a[href^="#"]', correct: true
        },
        ans4: {
            text: 'a[href|="#"]', correct: false
        },
        correctAns: 'a[href^="#"]'
    },
    {
        num: 9,
        q: 'How you will select all elements start with "https" and end in ".org"',
        ans1: {
            text: 'a[href|="https"][href*=".org"]', correct: false
        },
        ans2: {
            text: 'a[href$="https"][href=".org"]', correct: false
        },
        ans3: {
            text: 'a[href~="https"][href^=".org"]', correct: false
        },
        ans4: {
            text: 'a[href^="https"][href$=".org"]', correct: true
        },
        correctAns: 'a[href^="https"][href$=".org"]'
    },
    {
        num: 10,
        q: 'How you will select all elements with US English languege',
        ans1: {
            text: 'div[lang^="en-us"]', correct: false
        },
        ans2: {
            text: 'div[lang~="en-us"]', correct: true
        },
        ans3: {
            text: 'div[lang|="en-us"]', correct: false
        },
        ans4: {
            text: 'div[lang="en-us"]', correct: false
        },
        correctAns: 'div[lang~="en-us"]'
    },


]