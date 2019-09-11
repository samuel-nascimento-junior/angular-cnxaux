import {Component, OnInit} from '@angular/core';
import {CardModule} from 'primeng/card';
import {wallets} from '../wallets';


@Component({
  selector: 'app-wallet-list',
  templateUrl: './wallet-list.component.html',
  styleUrls: ['./wallet-list.component.css']
})
export class WalletListComponent implements OnInit {

  wallets = wallets;

  constructor() { }

  ngOnInit() {
  }

}