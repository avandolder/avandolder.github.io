'use strict';

const panels = [
    {
        name: "CourseFinder",
        url: "https://github.com/avandolder/311-project",
        desc: [
            "Developed a web application in order to provide an alternate way for University of Windsor students to find and plan their courses, with greater flexibility than the current official site.",
            "Built the back-end using Python and the Django web framework, and assisted in creating the front-end using Javascript, HTML, and CSS.",
            "Designed the data model using SQLite and Django's ORM.",
            "Utilized Agile methods to work through the Software Development Lifecycle.",
        ],
    },
    {
        name: "av-lang",
        url: "https://github.com/avandolder/av-lang",
        desc: [
            "Built a minimalist interpreter for a custom C-like programming language, currently dubbed av-lang.",
            "Written in C++, currently has functional lexical analysis and parsing, with codegen using LLVM in-progress.",
        ],
    },
    {
        name: "Tetrominoes",
        url: "https://github.com/avandolder/tetrominoes-rust",
        desc: [
            "Built a functional Tetris clone in an effort to better understand how to program in Rust.",
            "Utilized the GGEZ game framework.",
        ],
    },
    {
        name: "TermChat",
        url: "https://github.com/avandolder/termchat",
        desc: [
            "Designed and implemented a terminal-based chat server and client, communicating via TCP.",
            "Built with Python using the socket and curses libraries.",
        ],
    },
    {
        name: "eGADTs!",
        url: "https://github.com/avandolder/avandolder.github.io",
        desc: [
            "This website!",
            "Built using HTML5, CSS3, and ES6.",
            "Used ReactJS in order to build easily extensible components, such as this portfolio panel.",
        ],
    },
];

function PortfolioScrollButton({direction, scroll}) {
    return (
        <div className="portfolio-scroll">
            <button onClick={() => scroll(direction)}>
                {direction === 'left' ? <p>&larr;</p> : <p>&rarr;</p>}
            </button>
        </div>
    );
}

function ProjectDescription({desc}) {
    return (
        <ul>
            {desc.map((descLine, idx) => <li key={idx}>{descLine}</li>)}
        </ul>
    );
}

function PortfolioPanel(props) {
    const [currPanel, setCurrentPanel] = React.useState(0);
    const panel = panels[currPanel];

    const scrollPanel = (direction) => {
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

    return (
        <div className="portfolio-panel">
            <PortfolioScrollButton direction="left" scroll={scrollPanel} />
            <div className="portfolio-content">
                <h3><a href={panel.url}>{panel.name}</a></h3>
                <ProjectDescription desc={panel.desc} />
            </div>
            <PortfolioScrollButton direction="right" scroll={scrollPanel} />
        </div>
    );
}

const portfolioContainer = document.getElementById("PortfolioPanel");
ReactDOM.render(<PortfolioPanel />, portfolioContainer); 
