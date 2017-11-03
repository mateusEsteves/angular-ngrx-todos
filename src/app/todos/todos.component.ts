import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent implements OnInit {

    @Input() todos;

    constructor() {
    }

    ngOnInit() {
    }

}
