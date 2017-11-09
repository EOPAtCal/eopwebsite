"use strict"
var data = `
            [
              {
                "title": "college advisor",
                "text": "College advisors build relationships with students to understand their particular needs and focus on their academic & career goals.  Their primary role is to support students with general program planning and academic advising while making appropriate referrals to student services, faculty and enrichment opportunities.  College advisors also assist students in navigating college policies such as degree requirements, deadlines, unit limits, academic holds, withdrawals and more.",
                "img": "images/1.png",
                "link": "http://www.eop.berkeley.edu/advising/college-advisor"
              },
              {
                "title": "educational opportunity program",
                "text": "The Educational Opportunity Program (EOP) serves undergraduate students who are first-generation, low-income, and/or underrepresented students. EOP Academic Counselors can support you with academic planning, financial assistance, graduate school / career exploration and building community at UC Berkeley.  The quickest way to verify your EOP eligibility is by contact our front office at 510.642.7224 or visiting 119 Chavez.  You can also apply online through our website below.",
                "img": "images/2.jpg",
                "link": "http://www.eop.berkeley.edu/advising/eop"
              },
              {
                "title": "cal student central",
                "text": "Cal Student Central (CSC) is a one-stop resource that includes the Office of Financial Aid & Scholarships, Office of the Registrar and Billing & Payment Services. CSC helps students understand their student budget, financial aid package (loans, grants/scholarships and work-study), appeals processes, etc.   Additionally, CSC assists students with billing/payment inquiries, transcripts, enrollment verifications, residency and more.",
                "img": "images/3.png",
                "link": "http://www.eop.berkeley.edu/advising/cal-student-central"
              },
              {
                "title": "major advisor",
                "text": "A Major Advisor is a department specialist who assists students in planning their academic schedule in preparation to declare and/or graduate from the desired major within a college. Students can meet with their Major Advisor to discuss questions specific to their major prerequisites or upper division requirements. Major advisors can be located by following the links below:",
                "img": "images/4.jpg",
                "link": "http://www.eop.berkeley.edu/advising/major-advisor"
              },
              {
                "title": "faculty advisor",
                "text": "Faculty advisors serve as academic/professional mentors who support students in engaging further in their academic discipline. These advisors expose students to potential career paths, internship opportunities, write letters of recommendation and can serve as a thesis advisor. Not all departments have faculty advisors; view the list of faculty advisors below.",
                "img": "images/5.jpg",
                "link": "http://www.eop.berkeley.edu/advising/faculty-advisor"
              },
              {
                "title": "peer advisors",
                "text": "Peer Advisors are current students who use their personal experience to provide student-to-student advising and mentoring about several topics including:",
                "img": "images/6.jpg",
                "link": "http://www.eop.berkeley.edu/advising/peer-advisors"
              },
              {
                "title": "additional advising resources",
                "text": "Centers for Educational Equity & Excellence, Career Center, Study Abroad, Fall Program for Freshman, LEAD Center, Office of Undergraduate Research & Scholarships",
                "img": "images/7.jpg",
                "link": "http://www.eop.berkeley.edu/advising/additional-resources"
              }
            ]
            `

function shorten(text, maxLength) {
    var ret = text;
    if (ret.length > maxLength) {
        ret = ret.substr(0, maxLength);
        ret = ret.substr(0, Math.min(ret.length, ret.lastIndexOf(" "))) + "...";
    }
    return ret;
}

function getData(data) {
    return JSON.parse(data);
}

var texts = getData(data);

function displayText(ind) {
    return function() {
        document.querySelector("#text-preview > .card > .card-block > .card-title").innerText = texts[ind]["title"];
        document.querySelector("#text-preview > .card > .card-block > .card-text").innerText = texts[ind]["text"]
        document.querySelector("#text-preview > .card > img").setAttribute("src", texts[ind]["img"])
    }
}

function render(items) {
    if (items.length === texts.length) {
        for (var i = items.length - 1; i >= 0; i--) {
            texts[i]["text"] = shorten(texts[i]["text"], 120);
            items[i].navigateFunction = displayText(i);
        }
    }

}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function renderDefault() {
    var ind = getRandomIntInclusive(0, texts.length - 1)
    document.querySelector("#text-preview > .card > .card-block > .card-title").innerText = texts[ind]["title"];
    document.querySelector("#text-preview > .card > .card-block > .card-text").innerText = texts[ind]["text"]
    document.querySelector("#text-preview > .card > img").setAttribute("src", texts[ind]["img"])
    document.querySelector("#text-preview > .card > .card-block > a").setAttribute("href", texts[ind]["link"])
}

window.onload = function() {
    //This is the place for code snippets from the documentation -> http://wheelnavjs.softwaretailoring.net/documentation.html
    var titles = [
        "College \n Advisor",
        "Educational \n Opportunity \n Program",
        "Cal Student \n Central",
        "Major \n Advisor",
        "Faculty \n Advisor",
        "Peer \n Advisors",
        "Additional \n Resources"
    ]

    var wheel = new wheelnav("wheelDiv");
    wheel.slicePathFunction = slicePath().DonutSlice;
    wheel.colors = colorpalette.fractallove
    wheel.markerEnable = true;
    wheel.markerPathFunction = markerPath().DropMarker;
    wheel.markerAttr = {
        fill: '#333',
        stroke: '#333'
    };

    wheel.createWheel(titles);

    wheel.titleAttr = {
        fill: "#333"
    };
    wheel.titleSelectedAttr = {
        fill: "#FFF"
    };
    wheel.titleHoverAttr = {
        fill: "#FFF"
    };

    render(wheel.navItems);
    wheel.refreshWheel();
    renderDefault();
};