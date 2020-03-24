import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-simple-food',
  templateUrl: './simple-food.component.html',
  styleUrls: ['./simple-food.component.css']
})
export class SimpleFoodComponent implements OnInit {

  imageSelected = '';

  @Input() id;

  @Input() title;

  @Input() body;

  @Input() vote;

  @Input() image;

  @Output() removed = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
    this.imageSelected = this.image[0];
  }

  remove(id): void {
    this.removed.emit(id);
  }

  decreaseVote() {
    --this.vote;
  }

  increaseVote() {
    ++this.vote;
  }

  prev() {
    this.imageSelected = this.image[0];
  }

  next() {
    this.imageSelected = this.image[1];
  }
}
