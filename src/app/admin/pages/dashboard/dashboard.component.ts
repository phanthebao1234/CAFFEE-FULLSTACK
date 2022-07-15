import { Component, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";
import { Checkout } from "src/app/models/checkout.model";
import { SignupUser } from "src/app/models/signup-user.model";
import { AuthenService } from "src/app/services/authen.service";

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  dataLabels: ApexDataLabels | any;
  grid: ApexGrid | any;
  stroke: ApexStroke | any;
  title: ApexTitleSubtitle | any;
};
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  listOrder:Checkout[] = [];
  doanhthu: number = 0;
  listPrice:any = [];
  userArray: any = [];
  listUser:SignupUser[] = []
  p: number = 1;
  count: number = 5;
  @ViewChild("chart") chart: ChartComponent | any;
  public chartOptions!: Partial<ChartOptions>;

  constructor(private authenService: AuthenService) {
    this.chartOptions = {
      series: [
        {
          name: "Desktops",
          data: this.listPrice
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Biểu đồ doanh thu",
        align: "center"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: []
      }
    };
    this.loadOrder();
    this.calcOrderTotal();
    this.getPriceUser();
    this.getListUser();

  }

  loadOrder() {
    const order = localStorage.getItem('ORDER')
    if (order && order != "") {
      this.listOrder = JSON.parse(order);
    }
  }

  calcOrderTotal() {
    const total = this.listOrder.reduce((acc, order) => {
      return acc + order.totalAmount
    }, 0)
    this.doanhthu = total;
  }

  getPriceUser() {
    for (let i = 0; i < this.listOrder.length; i++) {
      const element = this.listOrder[i];
      for (let j = 0; j < element.carts.length; j++) {
        const item = element.carts[j];
        this.listPrice.push(item.price);
      }
      for (let y = 0; y < element.customer.length; y++) {
        const item = element.customer[y];
        this.userArray.push(item.fullName)
      }
    }
  }

  getListUser() {
    this.authenService.getUserLogin()
      .then((response:any) => {
        this.listUser = response;
      })
  }
}
