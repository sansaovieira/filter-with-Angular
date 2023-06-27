import { Component, ViewChild } from '@angular/core';
import { MasterService } from './master.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Lib } from './model/lib.model';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayedColumns: string[] = ['id', 'title', 'author'];
  dataSource: any
  dataShow: any

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: MasterService) {}

  ngOnInit(){
    this.getAllData();
  }

  getAllData(){
    this.service.getAll().subscribe(res => {
      this.dataShow = res

      this.dataSource = new MatTableDataSource<Lib>(this.dataShow)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
    })
  }

  filterChange(event: Event) {
    const filvalue=(event.target as HTMLInputElement).value;
    this.dataSource.filter=filvalue
  }
}
