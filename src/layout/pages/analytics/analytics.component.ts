import { Component, OnInit } from "@angular/core";
import { SelectionModel } from "@angular/cdk/collections";
import { Router } from "@angular/router";

import { MatDialog } from "@angular/material/dialog";
import { NzTableQueryParams } from "ng-zorro-antd/table";
import { ToastrService } from "ngx-toastr";

import { AuthService } from "src/auth/auth.service";

@Component({
  selector: "app-analytics",
  templateUrl: "./analytics.component.html",
  styleUrls: ["./analytics.component.scss"],
})
export class AnalyticsComponent implements OnInit {
  cardTitle: string = "Recent Mpesa Transactions";
  columnsToDisplay: any = {};
  data: any;
  _data: any;
 
  loading: boolean = false;
  mandatoryColumns = [
   [
    "First Name",
    "Last Name",
    "Email",
    "Phone Number",
    "Status",
    "Blocked",
    "Pending Action",
    "Channel",
    "Remarks",
    "CreatedOn"
  ]
  ];

  page: number = 1;
  perPage: number = 10;
  profiles: any[] = [];
  selection = new SelectionModel<any>(true, []);

  userColumns: any;
  userDetails: any;

  searchInput: string = "";
  userEmail: any;
  selectedAgent: any;
  selectedUser: any;
  pageSize: any = 10;
  userCategory = localStorage.getItem("userCategory");

  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private router: Router,
    private toaster: ToastrService,

  ) {
 
  }

  ngOnInit(): void {
    // this.userEmail = this.authService.currentUser["email"];
    // this.getUsers();

  }

  //opens user creation modal
  triggerModal(data: any): void {
    this.router.navigate(["/users/add-user"]);
    // this.updateUser = false;
    this.userDetails = data;
    // const dialogRef = this.dialog.open(AddUserComponent, {data: {data: this.userDetails, updateUser: this.updateUser}, height: '570px', width: '570px', disableClose: true});
    // dialogRef.afterClosed().subscribe(() => {
  
    //   this.loadData();
    // })
  }

  //open user update modal
  editUser(data: any): void {
    this.router.navigate(["/users/add-user/edit/", data.id]);
    this.userDetails = data;
    // this.updateUser = true;
    // const dialogRef = this.dialog.open(AddUserComponent, {data: {data: this.userDetails, updateUser: this.updateUser}, height: '570px', width: '570px', disableClose: true});
    // dialogRef.afterClosed().subscribe(() => {
    //   this.loadData();
    // })
  }

 



 
  
  
  //updates request params
  onQueryParamsChange(params: NzTableQueryParams): void {
    const { pageSize, pageIndex } = params;
    this.page = pageIndex;
    this.perPage = pageSize;
    // this.getUsers();
  }
  //exports users xlsx
  // exportXLSX(): void {
  //   let model = {
  //     page: 0,
  //     size: this.total,
  //   };
  //   this._httpService
  //     .getWorkflows("user/list-users/all", model)
  //     .subscribe((res) => {
  //       if (res["status"] === 200) {
  //         // this._data = res["data"]["content"];
  //         let usersToExport = [];
  //         res["data"]["content"].map((item) => {
  //           if (item["firstTimeLogin"]) {
  //             item["firstTimeLogin"] = "Inactive";
  //           } else {
  //             item["firstTimeLogin"] = "Active";
  //           }
  //           let container = {};
  //           this.mandatoryColumns.map((col) => {
  //             container[col] = item[this.columnsToDisplay[col]];

  //             usersToExport.push(container);
  //           });
  //         });
  //         let entries = this._globalService.getUniqueListBy(usersToExport, "Email");
  //         this.dataToExport = entries;
  //         this._dataExportationService.exportDataXlsx(
  //           this.dataToExport,
  //           "users-list"
  //         );
  //       }
  //     })

  // }
 

  //exports users to pdf
  // exportUsersPDF(): void {
  //   let model = {
  //     page: 0,
  //     size: this.total,
  //   };
  //   this._httpService
  //     .getWorkflows("user/list-users/all", model)
  //     .subscribe((res) => {
  //       if (res["status"] === 200) {
  //         this.mandatoryColumns = this.mandatoryColumns;
  //         this.exportTitle = "Kenchic-Admin-Portal-Users.pdf";
  //         this.userExportColumns = this.mandatoryColumns;
  //         this.userExportRows = res["data"]["content"].map((user) => {
  //           if (user["firstTimeLogin"]) {
  //             user["firstTimeLogin"] = "Inactive";
  //           } else {
  //             user["firstTimeLogin"] = "Active";
  //           }
  //           let container = [];
  //           this.mandatoryColumns.map((col) => {
  //             container.push(user[this.columnsToDisplay[col]]);
  //           });
  //           return container;
  //         });
  //         this._dataExportationService.exportToPdf(
  //           this.userExportColumns,
  //           this.userExportRows,
  //           this.exportTitle
  //         );
  //       }
  //     })
  // }
  onUserSearch(event: any){
    this.selectedUser = event;
    let payLoad = {
      page: this.page - 1,
      size: this.perPage,
     
      staffId:'',
      nationalId:''
    };
    if(this.selectedUser) {
      payLoad["staffId"] = this.selectedUser;
    }
  
  }
  clear(){
    this.searchInput = "";
    this.selectedUser = "";
    // this.getUsers();
  }
//navigates to single user view
viewUser(element: any): void {
  this.router.navigate(["/users/view-user", element.id]);
}

}
