import { Component, inject, OnInit } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  public form = {
    name: '',
    description: '',
    location: '',
    date: '',
    status: 'on'
  }

  private firestore: Firestore = inject(Firestore);

  private fbCollection = collection(this.firestore, 'things');

  constructor() {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    this.form.date = `${day}/${month}/${year}`;

  }

  ngOnInit() {  }

  enviar() {
    addDoc(this.fbCollection, this.form)
    .then((data) => {
      console.log('Contato salvo com Id :' + data.id)
    })
  }

}
