import {BaseElement} from './base-element.js';

export class DataTable extends BaseElement {

  constructor(headers, data){
    super();
    this.headers = headers;
    this.data = data;
  }

  getElementString(){
    let thHeaders = '';
    for(let h of this.headers){
      thHeaders += `
        <th class="mdl-data-table__cell--non-numeric">${h}</th>
      `;
    }
    

    let trTags = '';
    for( let row of this.data ){
      trTags += `<tr>`;

        let tdTags ='';

        //loop through headers array to pull out fileds of data we will need
        for( let property of this.headers){
          let field = row[property.toLowerCase()]; //must make the field lowercase to access the name properly in the array
          trTags += `
            <td class="mdl-data-table__cell--non-numeric">${field}</td>
          `;
        }

      trTags += `</tr>`;
    }

    return `
      <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
        <thead>
          <tr>
            ${thHeaders}
          </tr>
        </thead>
        <tbody>
            ${trTags}
        </tbody>
      </table>
     `;
  }

}