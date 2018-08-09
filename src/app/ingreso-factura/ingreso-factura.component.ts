import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-ingreso-factura',
  templateUrl: './ingreso-factura.component.html',
  styleUrls: ['./ingreso-factura.component.scss']
})
export class IngresoFacturaComponent implements OnInit {
  closeResult: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
