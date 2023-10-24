import { html } from "./node_modules/lit-html/lit-html.js";

export function createTemplate(studentInfo) {

    let template = html`
    <tr>
       <td>${studentInfo.firstName} ${studentInfo.lastName}</td>
       <td>${studentInfo.email}</td>
       <td>${studentInfo.course}</td>
    </tr>`;
 
    return template;
 }