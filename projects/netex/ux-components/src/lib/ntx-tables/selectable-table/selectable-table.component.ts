import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, PageEvent } from '@angular/material';

export interface PeriodicElement {
	avatar: string;
	name: string;
	project: string;
	type: string;
	modification: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
	{avatar: 'assets/images/perfil.jpg', name: 'Element name lorem ipsum dolor sit amet consectetur adipiscing elit quam risus pretium', project: 'Project name lorem ipsum dolor sit amet consectetur adipiscing elit quam risus pretium',  type: 'type name', modification: '29/11/2018'},
	{avatar: 'assets/images/perfil.jpg', name: 'Element name lorem ipsum dolor sit amet consectetur adipiscing elit quam risus pretium', project: 'Project name lorem ipsum dolor sit amet consectetur adipiscing elit quam risus pretium',  type: 'type name', modification: '29/11/2018'},
	{avatar: 'assets/images/perfil.jpg', name: 'Element name', project: 'Project name', type: 'type name', modification: '29/11/2018'},
	{avatar: 'assets/images/perfil.jpg', name: 'Element name', project: 'Project name', type: 'type name', modification: '29/11/2018'},
	{avatar: 'assets/images/perfil.jpg', name: 'Element name', project: 'Project name', type: 'long type name', modification: '29/11/2018'},
	{avatar: 'assets/images/perfil.jpg', name: 'Element name', project: 'Project name', type: 'type name', modification: '29/11/2018'},
	{avatar: 'assets/images/perfil.jpg', name: 'Element name lorem ipsum dolor sit amet consectetur adipiscing elit quam risus pretium', project: 'Project name lorem ipsum dolor sit amet consectetur adipiscing elit quam risus pretium',  type: 'type name', modification: '29/11/2018'},
	{avatar: 'assets/images/perfil.jpg', name: 'Element name', project: 'Project name', type: 'very long type name', modification: '29/11/2018'},
	{avatar: 'assets/images/perfil.jpg', name: 'Element name', project: 'Project name', type: 'type name', modification: '29/11/2018'},
	{avatar: 'assets/images/perfil.jpg', name: 'Element name lorem ipsum dolor sit amet consectetur adipiscing elit quam risus pretium', project: 'Project name lorem ipsum dolor sit amet consectetur adipiscing elit quam risus pretium',  type: 'type name', modification: '29/11/2018'},
	{avatar: 'assets/images/perfil.jpg', name: 'Element name', project: 'Project name', type: 'very long type name', modification: '29/11/2018'},
	{avatar: 'assets/images/perfil.jpg', name: 'Element name', project: 'Project name', type: 'type name', modification: '29/11/2018'},
	{avatar: 'assets/images/perfil.jpg', name: 'Element name lorem ipsum dolor sit amet consectetur adipiscing elit quam risus pretium', project: 'Project name lorem ipsum dolor sit amet consectetur adipiscing elit quam risus pretium',  type: 'type name', modification: '29/11/2018'},
];



@Component({
	selector: 'ntx-selectable-table',
	templateUrl: './selectable-table.component.html',
	styleUrls: ['./selectable-table.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class SelectableTableComponent implements OnInit {

	constructor() { }

	displayedColumns: string[] = ['select', 'avatar', 'name', 'project', 'type', 'modification', 'options'];
	dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
	selection = new SelectionModel<PeriodicElement>(true, []);

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	ngOnInit() {
		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;
	}

	/** Whether the number of selected elements matches the total number of rows. */
	isAllSelected() {
		const numSelected = this.selection.selected.length;
		const numRows = this.dataSource.data.length;
		return numSelected === numRows;
	}

	/** Selects all rows if they are not all selected; otherwise clear selection. */
	masterToggle() {
		this.isAllSelected() ?
			this.selection.clear() :
			this.dataSource.data.forEach(row => this.selection.select(row));
	}

	onRowCheckboxChange($event, row) {
		return $event ? this.selection.toggle(row) : null;
	}

	onHeaderCheckboxChange($event) {
		return $event ? this.masterToggle() : null;
	}

}
