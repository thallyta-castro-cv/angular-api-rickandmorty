import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-lis-api',
  templateUrl: './lis-api.component.html',
  styleUrls: ['./lis-api.component.css']
})

export class LisApiComponent implements OnInit {

  personagens: Array<any> = [];

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.listService.getList().subscribe(result => {
      this.personagens = result?.results;
    })
  }

}
