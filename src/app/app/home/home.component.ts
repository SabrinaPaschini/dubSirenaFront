import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  imagens: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.imagens = [
      'assets/img/dubsydrum.jpeg',
      'assets/img/lick.jpg',
      'assets/img/njd.jpeg',
      'assets/img/syndrum flavio.jpg',
      'assets/img/dubsydrum.jpeg',
      'assets/img/njd.jpeg',
    ];
  }

  moverPrimeiroParaUltimo() {
    let primeiroElemento = this.imagens.shift();

    if (primeiroElemento !== undefined) {
      this.imagens.push(primeiroElemento);
    }
  }

  moverUltimoParaPrimeiro() {
    let ultimoElemento = this.imagens.pop();

    if (ultimoElemento !== undefined) {
      this.imagens.unshift(ultimoElemento);
    }
  }
}
