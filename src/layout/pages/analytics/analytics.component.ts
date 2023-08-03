import { Component, OnInit } from "@angular/core";

import { MatDialog } from "@angular/material/dialog";
import { NzTableQueryParams } from "ng-zorro-antd/table";
import { ToastrService } from "ngx-toastr";
import { CrudService } from "src/shared/crud.service";

@Component({
  selector: "app-analytics",
  templateUrl: "./analytics.component.html",
  styleUrls: ["./analytics.component.scss"],
})
export class AnalyticsComponent implements OnInit {
  cardTitle: string = "Recent Mpesa Transactions";
  page: number = 0;
  perPage: number = 10;
  data: any;
  _data: any;
 
  loading: boolean = false;

  constructor(
    public dialog: MatDialog,
    private crudService: CrudService,
    private toaster: ToastrService,

  ) {}

  ngOnInit(): void {
    this.getTopUps();
  }

  getTopUps(){
    this.loading = true;
this.crudService.getTopUps().subscribe(res=>{
  this._data = res.map((e:any, i:any)=>{
    const data = e.payload.doc.data();
    data.id = e.payload.doc.id;
    data.index = i+1
    return data;
  });
  this.loading = false;
}, err=> {
  this.toaster.error("Unable to retrieve Top Ups!", err)
this.loading= false;
})
  }

  deleteRecord(data: any){
    return this.crudService.deleteTopUp(data);
  }

  //updates request params
  onQueryParamsChange(params: NzTableQueryParams): void {
    const { pageSize, pageIndex } = params;
    this.page = pageIndex;
    this.perPage = pageSize;
 
  }



}
