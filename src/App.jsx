import pnLogo from "./assets/pn-logo.png";
import Header from "./components/Header.jsx";
import Scores from "./components/Scores.jsx";
import {
  HTML_RESULTS,
  JAVA_RESULTS,
  ENGLISH_RESULTS,
  PYTHON_RESULTS,
} from "./data.js";

function APP() {
  return (
    <>
      <Header batchName="PNV" />
      <main id="scores">
        <Scores courseName="HTML" courseResults={HTML_RESULTS}></Scores>
        <Scores courseName="JAVA" courseResults={JAVA_RESULTS}></Scores>
        <Scores courseName="ENGLISH" courseResults={ENGLISH_RESULTS}></Scores>
        <Scores courseName="PYTHON" courseResults={PYTHON_RESULTS}></Scores>
      </main>
    </>
  );
}
