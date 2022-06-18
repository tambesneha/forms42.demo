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
import { Event, EventType } from 'forms42core';


export class Countries extends BaseForm
{
    constructor()
    {
        super(content);
		this.title = "Countries";
		this.addEventListener(this.handle);
    }

	private rec:number = 0;
	public async handle(event:Event) : Promise<boolean>
	{
		if (event.type == EventType.PostQuery)
			this.setValue("countries","country_id",this.rec++);

		if (event.type == EventType.WhenValidateField)
			console.log("validate field "+event.fieldname+" <"+event.field.getValue()+">");

		if (event.type == EventType.WhenValidateRecord)
			console.log("validate record "+event.blockname);

		return(true);
	}
}