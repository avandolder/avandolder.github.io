'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var panels = [{
    name: "CourseFinder",
    url: "https://github.com/avandolder/311-project",
    desc: ["Developed a web application in order to provide an alternate way for University of Windsor students to find and plan their courses, with greater flexibility than the current official site.", "Built the back-end using Python and the Django web framework, and assisted in creating the front-end using Javascript, HTML, and CSS.", "Designed the data model using SQLite and Django's ORM.", "Utilized Agile methods to work through the Software Development Lifecycle."]
}, {
    name: "av-lang",
    url: "https://github.com/avandolder/av-lang",
    desc: ["Built a minimalist interpreter for a custom C-like programming language, currently dubbed av-lang.", "Written in C++, currently has functional lexical analysis and parsing, with codegen using LLVM in-progress."]
}, {
    name: "Tetrominoes",
    url: "https://github.com/avandolder/tetrominoes-rust",
    desc: ["Built a functional Tetris clone in an effort to better understand how to program in Rust.", "Utilized the GGEZ game framework."]
}, {
    name: "TermChat",
    url: "https://github.com/avandolder/termchat",
    desc: ["Designed and implemented a terminal-based chat server and client, communicating via TCP.", "Built with Python using the socket and curses libraries."]
}, {
    name: "eGADTs!",
    url: "https://github.com/avandolder/avandolder.github.io",
    desc: ["This website!", "Built using HTML5, CSS3, and ES6.", "Used ReactJS in order to build easily extensible components, such as this portfolio panel."]
}];

function PortfolioScrollButton(_ref) {
    var direction = _ref.direction,
        scroll = _ref.scroll;

    return React.createElement(
        "div",
        { className: "portfolio-scroll" },
        React.createElement(
            "button",
            { onClick: function onClick() {
                    return scroll(direction);
                } },
            direction === 'left' ? React.createElement(
                "p",
                null,
                "\u2190"
            ) : React.createElement(
                "p",
                null,
                "\u2192"
            )
        )
    );
}

function ProjectDescription(_ref2) {
    var desc = _ref2.desc;

    return React.createElement(
        "ul",
        null,
        desc.map(function (descLine, idx) {
            return React.createElement(
                "li",
                { key: idx },
                descLine
            );
        })
    );
}

function PortfolioPanel(props) {
    var _React$useState = React.useState(0),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        currPanel = _React$useState2[0],
        setCurrentPanel = _React$useState2[1];

    var panel = panels[currPanel];

    var scrollPanel = function scrollPanel(direction) {
        switch (direction) {
            case 'left':
                setCurrentPanel(currPanel > 0 ? currPanel - 1 : panels.length - 1);
                break;
            case 'right':
                setCurrentPanel((currPanel + 1) % panels.length);
                break;
            default:
                setCurrentPanel(0);
        }
    };

    return React.createElement(
        "div",
        { className: "portfolio-panel" },
        React.createElement(PortfolioScrollButton, { direction: "left", scroll: scrollPanel }),
        React.createElement(
            "div",
            { className: "portfolio-content" },
            React.createElement(
                "h3",
                null,
                React.createElement(
                    "a",
                    { href: panel.url },
                    panel.name
                )
            ),
            React.createElement(ProjectDescription, { desc: panel.desc })
        ),
        React.createElement(PortfolioScrollButton, { direction: "right", scroll: scrollPanel })
    );
}

var portfolioContainer = document.getElementById("PortfolioPanel");
ReactDOM.render(React.createElement(PortfolioPanel, null), portfolioContainer);