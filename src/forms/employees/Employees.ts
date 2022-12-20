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

import content from './Employees.html';

import { BaseForm } from "../../BaseForm";
import { Sorter } from '../../utils/Sorter';
import { Employees as EmployeeBlock } from "../../blocks/Employees";


export class Employees extends BaseForm
{
	private sorter:Sorter = null;
	private emp:EmployeeBlock = new EmployeeBlock(this,"Employees");

	constructor()
	{
		super(content);
		this.title = "Employees";

		this.sorter = new Sorter(this.emp,"last_name");

		this.emp.setJobLov(["job_id","job_title"]);
		this.emp.setDepartmentLov(["department_id","department_name"]);
	}

	public sort(field:string) : void
	{
		this.sorter.column = field;
	}
}
