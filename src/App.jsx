import Header from "./components/Header";
import Section from "./components/section";
import "./assets/css/app.css";

function App() {
  return (
    <>
      <div className="root">
        <Header />

        <body>
          <Section title="ABOUT ME">
            <p>
              I'm a passionate and hard-working student that likes to find new{" "}
              <br />
              challenges and learn skills for my personal development. I have{" "}
              <br />
              experience with Customer Service. Software Development and <br />{" "}
              Marketing.
            </p>
          </Section>
          <Section title="WORK EXPERIENCE">
            <div className="work">
              <div>
                <h3>2023-now Legacy Developers</h3>
                <p>IT Consultant and Virtual Assistant</p>
                <br />
                <p>
                  Legacy Developers is a Real Estate Company where I have <br />{" "}
                  built pages from scratch, created automations and sent email{" "}
                  <br />
                  campaigns using marketing strategies after meeting with our{" "}
                  <br /> client.{" "}
                </p>
                <p>
                  Tools: Wordpress - GoHighLevel - Google Workspace - Canva{" "}
                  <br />- Photoshop - Convertkit
                </p>
              </div>

              <div>
                <h3>2022-2023 MT IT</h3>
                <p>Front-end Developer with React</p>
                <br />
                <p>
                  ThinklikeWarrenBuffet users can pick from several stocks
                  <br /> and find out what price Warren Buffet would attach to
                  each <br />
                  one of them. Easy-to-understand valuation graphs are <br />
                  provided for each stock for the investor to reach a better{" "}
                  <br />
                  view of it.
                </p>{" "}
                <p>
                  Techs: Material-UI - JavaScript - HTML - CSS - API Rest <br />
                  - React.js - Scrum - Web Interface Design
                </p>
              </div>
            </div>
          </Section>

          <Section title="EDUCATION">
            <h3>UNEG - Universidad Experimental de Guayana</h3>
            <p>Software Engineering</p>
            <br />
            <p>
              Learned about Data Bases such as MySQL. Project <br />
              Management. Networking with Cisco Packet Tracer and C, <br />
              C++, Python programming.
            </p>
          </Section>

          <Section title="LANGUAGES">
            <div className="languages">
              <div>
                <h3>English</h3>
                <span>
                  {" "}
                  <p> C1 - Berlitz English Course </p>{" "}
                </span>
              </div>

              <div>
                <h3>Spanish</h3>
                <span>
                  {" "}
                  <p> Native Speaker </p>{" "}
                </span>
              </div>
            </div>
          </Section>

          <Section title="TOOLS & SKILLS">
            <div className="tools">
              <p>
                -Javascript <br />
                -React.js <br />
                -Figma <br />
                -Node.js <br />
                -Github <br />
                -Monday, Notion and Trello <br />
              </p>
              <p>
                -Team Work <br />
                -Time Management <br />
                -Adaptability
                <br />
                -Problem-solving <br />
                -Creativity <br />
                -Research
                <br />
              </p>
            </div>
          </Section>
        </body>
      </div>
    </>
  );
}

export default App;
