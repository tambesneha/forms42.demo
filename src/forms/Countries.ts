/*
 * This code is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License version 3 only, as
 * published by the Free Software Foundation.

 * This code is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
 * version 2 for more details (a copy is included in the LICENSE file that
 * accompanied this code).
 */

import { BaseForm } from './BaseForm';
import content from './Countries.html';
import { keymap } from '../FormsModule';
import { FormEvent, EventType, MouseMap, Field } from 'forms42core';


export class Countries extends BaseForm
{
    constructor()
    {
        super(content);
		this.title = "Countries";

		//let outcome:Set<string> = new Set<string>().add("DK-45").add("SE-46");
		//let code:Field = this.getFieldById("countries","country_code","cc1");
		//code.getDefaultProperties().setValidValues(outcome).apply();


		this.addEventListener(this.handle);
		this.addEventListener(this.fieldevents,{field: "country_name"});
		//this.addEventListener(this.mouseevents,[{mouse: MouseMap.contextmenu}]);
    }

	private async fieldevents(event:FormEvent) : Promise<boolean>
	{
		if (event.type == EventType.ValidateField && event.field.id == "cr-cn1")
		{
			console.log(event.toString());

			let values:Set<string> = new Set<string>();
			values.add("DK").add("SE").add("FI");

			event.field.getRecordProperties()
				.setTag("select")
				.setValidValues(values)
				.setStyle("width","75px")
				.setAttribute("size",3)
				.apply();

			this.getDefaultProperties(event.blockname,"country_id")[0]
				.setClass("purple")
				.apply();

		}

		return(true);
	}

	private async mouseevents(event:FormEvent) : Promise<boolean>
	{
		console.log(event.fieldname+" "+EventType[event.type]+" "+MouseMap[event.mouse]);
		return(true);
	}

	private rec:number = 0;
	public async handle(event:FormEvent) : Promise<boolean>
	{
		if (event.type == EventType.PostQuery)
			this.setValue("countries","country_id",this.rec++);

		//if (event.type == EventType.Key)
			//console.log(event.toString()+" "+(event.key == keymap.keyW))

		/*
		if (event.type == EventType.Editing)
			console.log("Edit "+event.fieldname+" <"+event.field.getValue()+">")

		if (event.type == EventType.ValidateField)
			console.log("validate field "+event.fieldname+" <"+event.field.getValue()+">");

		if (event.type == EventType.ValidateField && event.fieldname == "country_name")
			if (event.field.getValue() == "ERR") return(false);

		if (event.type == EventType.ValidateRecord)
			console.log("validate record "+event.blockname);
		*/

		return(true);
	}

	public test() : void
	{
		console.log("Test");
	}
}