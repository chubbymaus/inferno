import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/Navbar"
// import Layout from "../components/layout"
import Jumbotron from "../components/Home/Jumbotron"
// import WhyWordpress from "../components/Home/WhyWordpress"
// import Services from "../components/Home/Services"
// import Hosting from "../components/Home/Hosting"
import About from "../components/Home/About"
import Computers from "../images/computers.png"
import "fullpage.js/vendors/scrolloverflow" // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage"

const SEL = "custom-section"
const SECTION_SEL = `.${SEL}`

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
// This is no longer required for the scrollOverflow option.
const pluginWrapper = () => {
  /*
   * require('./fullpage.fadingEffect.min'); // Optional. Required when using the "fadingEffect" extension.
   */
}

const originalColors = [
  "#7272ff",
  "#0798ec",
  "#7272ff",
  "#00BE7C",
  "#435b71",
  "blue",
  "purple",
  "yellow",
]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sectionsColor: [...originalColors],
      fullpages: [
        {
          text: "Section sdfasdfasdf",
        },
        {
          text: "Section 2",
        },
        {
          text: "Section 3",
        },
      ],
    }
  }

  onLeave(origin, destination, direction) {
    console.log("onLeave", { origin, destination, direction })
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  }

  render() {
    const { fullpages } = this.state

    if (!fullpages.length) {
      return null
    }

    return (
      <div className="App">
        <Navbar id="indexNav" />
        <ReactFullpage
          debug /* Debug logging */
          // Required when using extensions
          pluginWrapper={pluginWrapper}
          // fullpage options
          licenseKey={"Y5B29808C-3C1F4F18-A146AC19-C381C5B4"} // Get one from https://alvarotrigo.com/fullPage/pricing/
          navigation
          anchors={["about", "secondPage", "thirdPage"]}
          sectionSelector={SECTION_SEL}
          onLeave={this.onLeave.bind(this)}
          sectionsColor={this.state.sectionsColor}
          render={comp => (
            <ReactFullpage.Wrapper>
              <div className={SEL} id="dots-section">
                <Jumbotron />
              </div>
              <div className={SEL}>
                <About />
              </div>
              <div className={SEL}>
                <About />
              </div>
              <div className={SEL} id="dots-section">
                <About />
              </div>
              <div className={SEL} id="utah">
                <About />
              </div>
              {/* {fullpages.map(({ text }) => (
                <div key={text} className={SEL}>
                  <h1>{text}</h1>
                </div>
              ))} */}
            </ReactFullpage.Wrapper>
          )}
        />
      </div>
    )
  }
}

export default App
