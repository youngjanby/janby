import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import {  faTrash } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { DataPagination, Product, ProductCreate, ProductData, productData } from '../../asserts/interfaces';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogWindow } from '../dialog/dialog-edit-data';


@Component({
  selector: 'my-lib-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  dataPagination!: DataPagination;
  faTrash = faTrash;
  selectedData: number = 0;
  subject$ = new Subject<number>();
  isModalDialogVisible: boolean = false;

  @Input()
  dataTable!: any;
  @Output() dataTableChange = new EventEmitter<Product>();

  allComplete: boolean = false;
  constructor(private dialog: MatDialog) {}

  openDialog(data: Product, index: number) {
    const dialogConfig: MatDialogConfig<{product: Product, index: number}> = new MatDialogConfig();
    dialogConfig.width = '700px';
    dialogConfig.height = '1000px';
    dialogConfig.position = { left: '0px' };
    dialogConfig.data = {product: data, index: index};
    const dialogRef = this.dialog.open(
      DialogWindow,
      dialogConfig
    );
    dialogRef.afterClosed().subscribe((res) => {
      if(res) {
        return this.dataTable[res.index] = res.product
      }
    })
  }
  close() {
    return (this.isModalDialogVisible = false);
  }

  ngOnInit(): void {
    this.dataPagination = {
      pageIndex: 0,
      pageSize: 5,
      length: this.dataTable.length,
    };
    this.subject$.subscribe((val) => (this.selectedData = val));
    this.subject$.next(this.dataTable.filter((t: any) => t.isReady).length);
    this.dataTable = this.dataTable.map((item: any) => {
      return {...item, completed: true, description: '',volumes: [{volume: item.volume}], categories: [{name: '', value: ''}], characters: [{key: '1', value: '2'}], tags: []}
    })
  }

  handlePageEvent(pageParams: PageEvent) {
    this.dataPagination = pageParams;
  }

  get currentData() {
    const startItem =
      this.dataPagination.pageIndex * this.dataPagination.pageSize;
    const endItem = startItem + this.dataPagination.pageSize;
    return this.dataTable.slice(startItem, endItem);
  }

  delete() {
    this.dataTable = this.dataTable.filter((t: any) => !t.isReady);
    this.dataTableChange.emit(this.dataTable);
    this.selectedData = 0;
  }

  check() {
    return this.subject$.next(this.dataTable.filter((t: any) => t.isReady).length);
  }

  updateAllComplete() {
    this.allComplete =
      this.dataTable != null && this.dataTable.every((t: any) => t.isReady);
  }

  someComplete() {
    if (this.dataTable == null) {
      return false;
    }
    return (
      this.dataTable.filter((t: any) => t.isReady).length > 0 && !this.allComplete
    );
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.dataTable == null) {
      return;
    }
    this.dataTable.forEach((t: any) => (t.isReady = completed));
    this.subject$.next(this.dataTable.filter((t: any) => t.isReady).length);
  }
}
