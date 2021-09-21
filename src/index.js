import React from "react";
import { render } from "react-dom";
import Content from "./Content";
import jsPDF from "jspdf";
import $ from "jquery";
import html2pdfmake from "./html2pdfmake";

class App extends React.Component {
  componentDidMount() {
    const doc = new jsPDF();
    const specialElementHandlers = {
      "#editor": function(element, renderer) {
        return true;
      }
    };

    $("#cmd").click(function() {
      doc.fromHTML($("#content").html(), 15, 15, {
        width: 170,
        elementHandlers: specialElementHandlers
      });

      doc.save("sample-file.pdf");
    });

    const html = "<div style='border: 1px solid red;'>55555</div>";
    const xxx = html2pdfmake(html);

    console.log(xxx);
  }

  render() {
    return (
      <div>
        <div id="content">
          <p>ใบวางบิล ต้นฉบับ</p>

          <table border="1">
            <tbody>
              <tr>
                <td height="20">ssss</td>
                <td height="20">ssss</td>
                <td height="20">ssss</td>
              </tr>
            </tbody>
          </table>
          <Content />
        </div>

        <div id="editor" />
        <button id="cmd">Generate PDF</button>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
